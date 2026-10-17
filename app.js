(() => {
  'use strict';

  const $ = (sel) => document.querySelector(sel);
  const collator = new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' });
  const byPath = (a, b) => collator.compare(a, b);
  const NOTE_EXT = /\.(md|markdown|mdown|mkd|txt)$/i;
  const SKIP_DIRS = new Set(['node_modules', '.git', '.obsidian', '.trash', 'dist', 'build']);
  const canOpenFolders = 'showDirectoryPicker' in window;

  const WELCOME = `# Welcome to kaccha chittha

Your rough notebook. Everything here is plain **markdown**.

## What you can do

- **New note** — saved in this browser, under *My Notes*
- **Open folder** — pick any folder of \`.md\` files and edit them right on disk
- **Import .md** (or drag files onto the window) — copy files into *My Notes*
- Rename a note by clicking its name at the top

## Shortcuts

| Keys | Action |
| --- | --- |
| ⌘/Ctrl + S | Save now (it also autosaves) |
| ⌘/Ctrl + E | Switch Write / Split / Read |

- [x] Make a notes app
- [ ] Write something

> Notes in *My Notes* live in this browser only. For files you want backed up or synced, use **Open folder**.
`;

  // ---------- Tiny IndexedDB key/value store ----------
  const kv = (() => {
    let dbp;
    const open = () => dbp ??= new Promise((resolve, reject) => {
      const req = indexedDB.open('kaccha-chittha', 1);
      req.onupgradeneeded = () => req.result.createObjectStore('kv');
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
    const run = async (mode, fn) => {
      const db = await open();
      return new Promise((resolve, reject) => {
        const tx = db.transaction('kv', mode);
        const req = fn(tx.objectStore('kv'));
        tx.oncomplete = () => resolve(req.result);
        tx.onerror = () => reject(tx.error);
      });
    };
    return {
      get: (k) => run('readonly', (s) => s.get(k)),
      set: (k, v) => run('readwrite', (s) => s.put(v, k)),
    };
  })();

  const prefs = {
    get(k, fallback) { try { const v = localStorage.getItem('kc:' + k); return v === null ? fallback : JSON.parse(v); } catch { return fallback; } },
    set(k, v) { try { localStorage.setItem('kc:' + k, JSON.stringify(v)); } catch { /* storage unavailable */ } },
  };

  // ---------- Sources: where notes live ----------
  class LocalSource {
    constructor() { this.id = 'local'; this.name = 'My Notes'; this.kind = 'local'; this.ready = true; this.notes = {}; }
    async load() {
      this.notes = (await kv.get('notes')) || {};
      if (!Object.keys(this.notes).length && !prefs.get('welcomed', false)) {
        this.notes['Welcome.md'] = { content: WELCOME, updated: Date.now() };
        prefs.set('welcomed', true);
        await this.persist();
      }
    }
    persist() { return kv.set('notes', this.notes); }
    paths() { return Object.keys(this.notes).sort(byPath); }
    async exists(p) { return p in this.notes; }
    async read(p) { if (!(p in this.notes)) throw new Error('Note not found'); return this.notes[p].content; }
    async stat(p) { return this.notes[p]?.updated ?? 0; }
    async write(p, content) { this.notes[p] = { content, updated: Date.now() }; await this.persist(); }
    async remove(p) { delete this.notes[p]; await this.persist(); }
    async rename(from, to) { this.notes[to] = this.notes[from]; delete this.notes[from]; await this.persist(); }
    async refresh() {}
    async asset() { return null; }
  }

  class FolderSource {
    constructor(handle, id) { this.handle = handle; this.id = id; this.name = handle.name; this.kind = 'folder'; this.ready = false; this.files = []; }
    async checkPermission(ask = false) {
      const opts = { mode: 'readwrite' };
      let s = await this.handle.queryPermission(opts);
      if (s !== 'granted' && ask) s = await this.handle.requestPermission(opts);
      this.ready = s === 'granted';
      return this.ready;
    }
    async refresh() {
      if (!this.ready) return;
      const found = [];
      const walk = async (dir, prefix, depth) => {
        if (depth > 10) return;
        for await (const [name, h] of dir.entries()) {
          if (name.startsWith('.') || SKIP_DIRS.has(name)) continue;
          if (h.kind === 'directory') await walk(h, prefix + name + '/', depth + 1);
          else if (NOTE_EXT.test(name)) found.push(prefix + name);
        }
      };
      await walk(this.handle, '', 0);
      this.files = found.sort(byPath);
    }
    paths() { return this.files; }
    async locate(path, create = false) {
      const parts = path.split('/');
      const name = parts.pop();
      let dir = this.handle;
      for (const seg of parts) dir = await dir.getDirectoryHandle(seg, { create });
      return [dir, name];
    }
    async fileHandle(path, create = false) {
      const [dir, name] = await this.locate(path, create);
      return dir.getFileHandle(name, { create });
    }
    async exists(p) { try { await this.fileHandle(p); return true; } catch { return false; } }
    async read(p) { return (await (await this.fileHandle(p)).getFile()).text(); }
    async stat(p) { return (await (await this.fileHandle(p)).getFile()).lastModified; }
    async write(p, content) {
      const w = await (await this.fileHandle(p, true)).createWritable();
      await w.write(content);
      await w.close();
      if (!this.files.includes(p)) { this.files.push(p); this.files.sort(byPath); }
    }
    async remove(p) {
      const [dir, name] = await this.locate(p);
      await dir.removeEntry(name);
      this.files = this.files.filter((f) => f !== p);
    }
    async rename(from, to) {
      const h = await this.fileHandle(from);
      const [toDir, toName] = await this.locate(to, true);
      const [fromDir] = await this.locate(from);
      if (typeof h.move === 'function') {
        if (await fromDir.isSameEntry(toDir)) await h.move(toName);
        else await h.move(toDir, toName);
        this.files = this.files.filter((f) => f !== from);
        this.files.push(to); this.files.sort(byPath);
      } else {
        await this.write(to, await this.read(from));
        await this.remove(from);
      }
    }
    async asset(path) {
      try { return URL.createObjectURL(await (await this.fileHandle(path)).getFile()); } catch { return null; }
    }
  }

  // ---------- State ----------
  const local = new LocalSource();
  const state = {
    sources: [local],
    current: null,          // { source, path }
    dirty: false,
    lastStamp: null,
    open: new Set(prefs.get('openDirs', [])),
    assetUrls: new Map(),
  };
  const sourceById = (id) => state.sources.find((s) => s.id === id);

  // ---------- Elements ----------
  const el = {
    app: $('#app'), tree: $('#tree'), search: $('#search'), editor: $('#editor'), preview: $('#preview'),
    workspace: $('#workspace'), title: $('#title'), crumb: $('#crumb'), where: $('#where'),
    count: $('#count'), status: $('#status'), toast: $('#toast'), fileInput: $('#fileInput'),
    dialog: $('#dialog'), dropzone: $('#dropzone'),
  };

  const ICON = {
    chev: '<svg class="chev" viewBox="0 0 24 24"><path d="M9 6l6 6-6 6"/></svg>',
    file: '<svg viewBox="0 0 24 24"><path d="M7 3.5h7l4 4V20a.5.5 0 0 1-.5.5h-10A.5.5 0 0 1 7 20z"/><path d="M14 3.5V8h4"/></svg>',
    plus: '<svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>',
    refresh: '<svg viewBox="0 0 24 24"><path d="M19 12a7 7 0 1 1-2.05-4.95M19 4v4h-4"/></svg>',
    close: '<svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></svg>',
  };

  // ---------- Helpers ----------
  let toastTimer;
  function toast(msg) {
    el.toast.textContent = msg;
    el.toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.toast.classList.remove('show'), 2600);
  }

  function setStatus(text, isError = false) {
    el.status.textContent = text;
    el.status.classList.toggle('error', isError);
  }

  function ask({ title, text = '', value = null, ok = 'OK', danger = false }) {
    const d = el.dialog;
    const input = $('#dialogInput');
    $('#dialogTitle').textContent = title;
    $('#dialogText').textContent = text;
    $('#dialogOk').textContent = ok;
    $('#dialogOk').classList.toggle('danger', danger);
    $('#dialogOk').classList.toggle('primary', !danger);
    input.hidden = value === null;
    input.value = value ?? '';
    d.returnValue = '';
    d.showModal();
    if (value !== null) {
      input.focus();
      const dot = input.value.lastIndexOf('.');
      input.setSelectionRange(0, dot > 0 ? dot : input.value.length);
    }
    return new Promise((resolve) => {
      d.addEventListener('close', () => {
        if (d.returnValue !== 'ok') return resolve(null);
        resolve(value === null ? true : input.value.trim());
      }, { once: true });
    });
  }

  function cleanPath(raw) {
    return raw.replace(/\\/g, '/').split('/').map((s) => s.trim()).filter((s) => s && s !== '.' && s !== '..').join('/');
  }
  const withExt = (p) => (NOTE_EXT.test(p) ? p : p + '.md');
  const baseName = (p) => p.split('/').pop();
  const dirName = (p) => p.split('/').slice(0, -1).join('/');
  const stripExt = (n) => n.replace(NOTE_EXT, '');

  function resolveRel(fromPath, rel) {
    const parts = dirName(fromPath).split('/').filter(Boolean);
    for (const seg of rel.split('/')) {
      if (seg === '..') parts.pop();
      else if (seg && seg !== '.') parts.push(seg);
    }
    return parts.join('/');
  }

  async function uniquePath(source, path) {
    if (!(await source.exists(path))) return path;
    const ext = path.match(NOTE_EXT)?.[0] ?? '';
    const stem = path.slice(0, path.length - ext.length);
    for (let i = 2; ; i++) {
      const p = `${stem} ${i}${ext}`;
      if (!(await source.exists(p))) return p;
    }
  }

  // ---------- Sidebar tree ----------
  function buildTree(paths) {
    const root = { dirs: new Map(), files: [] };
    for (const p of paths) {
      const parts = p.split('/');
      let node = root;
      for (const seg of parts.slice(0, -1)) {
        if (!node.dirs.has(seg)) node.dirs.set(seg, { dirs: new Map(), files: [] });
        node = node.dirs.get(seg);
      }
      node.files.push(p);
    }
    return root;
  }

  function makeRow(cls, html, label, depth) {
    const b = document.createElement('button');
    b.className = 'row ' + cls;
    b.style.paddingLeft = 8 + depth * 14 + 'px';
    b.innerHTML = html;
    const span = document.createElement('span');
    span.className = 'name';
    span.textContent = label;
    b.append(span);
    return b;
  }

  function renderNode(source, node, prefix, depth, filtering, into) {
    const dirs = [...node.dirs.keys()].sort(byPath);
    for (const name of dirs) {
      const dirPath = prefix + name;
      const key = source.id + ':' + dirPath;
      const isOpen = filtering || state.open.has(key);
      const row = makeRow('dir' + (isOpen ? ' open' : ''), ICON.chev, name, depth);
      row.addEventListener('click', () => {
        state.open.has(key) ? state.open.delete(key) : state.open.add(key);
        prefs.set('openDirs', [...state.open]);
        renderTree();
      });
      into.append(row);
      if (isOpen) renderNode(source, node.dirs.get(name), dirPath + '/', depth + 1, filtering, into);
    }
    for (const p of node.files) {
      const active = state.current?.source === source && state.current.path === p;
      const row = makeRow('file' + (active ? ' active' : ''), ICON.file, stripExt(baseName(p)), depth);
      row.title = p;
      row.addEventListener('click', () => { openNote(source, p); el.app.classList.remove('nav-open'); });
      into.append(row);
    }
  }

  function headButton(icon, title, onClick) {
    const b = document.createElement('button');
    b.className = 'icon-btn';
    b.title = title;
    b.setAttribute('aria-label', title);
    b.innerHTML = icon;
    b.addEventListener('click', (e) => { e.stopPropagation(); onClick(); });
    return b;
  }

  function renderTree() {
    const q = el.search.value.trim().toLowerCase();
    const frag = document.createDocumentFragment();
    for (const source of state.sources) {
      const box = document.createElement('div');
      box.className = 'source';
      const head = document.createElement('div');
      head.className = 'source-head';
      const label = document.createElement('span');
      label.className = 'label';
      label.textContent = source.name;
      label.title = source.name;
      head.append(label);
      if (source.ready) head.append(headButton(ICON.plus, `New note in ${source.name}`, () => newNote(source)));
      if (source.kind === 'folder') {
        if (source.ready) head.append(headButton(ICON.refresh, 'Reload folder', async () => { await source.refresh(); renderTree(); toast('Folder reloaded'); }));
        head.append(headButton(ICON.close, 'Close folder (files stay on disk)', () => closeFolder(source)));
      }
      box.append(head);

      if (!source.ready) {
        const b = document.createElement('button');
        b.className = 'btn reconnect';
        b.textContent = 'Allow access to reopen';
        b.addEventListener('click', () => reconnect(source));
        box.append(b);
      } else {
        const paths = source.paths().filter((p) => !q || p.toLowerCase().includes(q));
        if (!paths.length) {
          const e = document.createElement('div');
          e.className = 'empty-src';
          e.textContent = q ? 'No matches' : 'No notes yet';
          box.append(e);
        } else {
          renderNode(source, buildTree(paths), '', 0, !!q, box);
        }
      }
      frag.append(box);
    }
    el.tree.replaceChildren(frag);
  }

  // ---------- Editor ----------
  function showEmpty(isEmpty) {
    el.workspace.classList.toggle('is-empty', isEmpty);
    el.title.disabled = isEmpty;
    $('#download').disabled = isEmpty;
    $('#delete').disabled = isEmpty;
  }

  function updateHeader() {
    const c = state.current;
    if (!c) {
      el.title.value = '';
      el.crumb.textContent = '';
      el.where.textContent = '';
      el.count.textContent = '';
      document.title = 'Kaccha Chittha';
      return;
    }
    const dir = dirName(c.path);
    el.title.value = stripExt(baseName(c.path));
    el.crumb.textContent = dir ? `${c.source.name} / ${dir.replaceAll('/', ' / ')} /` : `${c.source.name} /`;
    el.where.textContent = c.source.kind === 'folder' ? `On disk · ${c.source.name}/${c.path}` : 'Saved in this browser';
    document.title = `${stripExt(baseName(c.path))} · Kaccha Chittha`;
  }

  function updateCount() {
    const text = el.editor.value;
    const words = (text.match(/\S+/g) || []).length;
    el.count.textContent = `${words.toLocaleString()} word${words === 1 ? '' : 's'}`;
  }

  function clearAssets() {
    for (const url of state.assetUrls.values()) if (url) URL.revokeObjectURL(url);
    state.assetUrls.clear();
  }

  const isExternal = (href) => /^([a-z][a-z0-9+.-]*:|\/\/)/i.test(href);

  let previewTimer;
  function renderPreview() {
    clearTimeout(previewTimer);
    const text = el.editor.value;
    if (!window.marked || !window.DOMPurify) {
      el.preview.textContent = text;
      el.preview.style.whiteSpace = 'pre-wrap';
      return;
    }
    el.preview.innerHTML = DOMPurify.sanitize(marked.parse(text, { gfm: true }));
    const c = state.current;
    if (!c) return;
    for (const img of el.preview.querySelectorAll('img')) {
      const src = img.getAttribute('src');
      if (!src || isExternal(src) || src.startsWith('data:') || src.startsWith('#')) continue;
      const path = resolveRel(c.path, decodeURIComponent(src.split(/[?#]/)[0]));
      img.removeAttribute('src');
      const apply = (url) => { if (url) img.src = url; };
      if (state.assetUrls.has(path)) apply(state.assetUrls.get(path));
      else c.source.asset(path).then((url) => { state.assetUrls.set(path, url); apply(url); });
    }
  }
  const schedulePreview = () => { clearTimeout(previewTimer); previewTimer = setTimeout(renderPreview, 120); };

  async function openNote(source, path) {
    if (!(await save())) return;
    try {
      const text = await source.read(path);
      clearAssets();
      state.current = { source, path };
      state.dirty = false;
      state.lastStamp = await source.stat(path);
      el.editor.value = text;
      el.editor.scrollTop = 0;
      el.preview.scrollTop = 0;
      showEmpty(false);
      updateHeader();
      updateCount();
      renderPreview();
      setStatus('');
      renderTree();
      prefs.set('last', { source: source.id, path });
    } catch (err) {
      toast(`Couldn't open ${baseName(path)}: ${err.message}`);
    }
  }

  function closeNote() {
    state.current = null;
    state.dirty = false;
    clearAssets();
    el.editor.value = '';
    el.preview.innerHTML = '';
    showEmpty(true);
    updateHeader();
    setStatus('');
    renderTree();
    prefs.set('last', null);
  }

  let saveTimer;
  function scheduleSave() {
    state.dirty = true;
    setStatus('Editing…');
    clearTimeout(saveTimer);
    saveTimer = setTimeout(save, 700);
  }

  async function save() {
    clearTimeout(saveTimer);
    const c = state.current;
    if (!c || !state.dirty) return true;
    state.dirty = false;
    setStatus('Saving…');
    try {
      await c.source.write(c.path, el.editor.value);
      state.lastStamp = await c.source.stat(c.path);
      if (!state.dirty) setStatus('Saved');
      return true;
    } catch (err) {
      state.dirty = true;
      setStatus('Not saved', true);
      toast(`Couldn't save: ${err.message}`);
      return false;
    }
  }

  // ---------- Actions ----------
  async function newNote(source = state.current?.source ?? local) {
    if (!source.ready) source = local;
    const startDir = state.current?.source === source ? dirName(state.current.path) : '';
    const suggested = await uniquePath(source, withExt((startDir ? startDir + '/' : '') + 'Untitled'));
    const name = await ask({
      title: `New note in ${source.name}`,
      text: 'Use slashes to put it in a subfolder, e.g. ideas/todo',
      value: suggested,
      ok: 'Create',
    });
    if (!name) return;
    const path = withExt(cleanPath(name));
    if (!path || path === '.md') return;
    if (await source.exists(path)) { toast('A note with that name already exists'); return; }
    try {
      await source.write(path, `# ${stripExt(baseName(path))}\n\n`);
      await openNote(source, path);
      el.editor.focus();
      el.editor.setSelectionRange(el.editor.value.length, el.editor.value.length);
    } catch (err) {
      toast(`Couldn't create note: ${err.message}`);
    }
  }

  async function renameCurrent() {
    const c = state.current;
    if (!c) return;
    const name = cleanPath(el.title.value.replaceAll('/', '-'));
    const oldExt = c.path.match(NOTE_EXT)?.[0] ?? '.md';
    const dir = dirName(c.path);
    const to = (dir ? dir + '/' : '') + (NOTE_EXT.test(name) ? name : name + oldExt);
    if (!name || to === c.path) { updateHeader(); return; }
    if (await c.source.exists(to)) { toast('A note with that name already exists'); updateHeader(); return; }
    if (!(await save())) return;
    try {
      await c.source.rename(c.path, to);
      if (state.current === c) {
        state.current = { source: c.source, path: to };
        state.lastStamp = await c.source.stat(to);
        prefs.set('last', { source: c.source.id, path: to });
        updateHeader();
      }
      renderTree();
      toast('Renamed');
    } catch (err) {
      toast(`Couldn't rename: ${err.message}`);
      updateHeader();
    }
  }

  async function deleteCurrent() {
    const c = state.current;
    if (!c) return;
    const onDisk = c.source.kind === 'folder';
    const ok = await ask({
      title: `Delete “${stripExt(baseName(c.path))}”?`,
      text: onDisk ? 'This permanently deletes the file from your disk.' : 'This removes the note from this browser.',
      ok: 'Delete',
      danger: true,
    });
    if (!ok) return;
    try {
      clearTimeout(saveTimer);
      await c.source.remove(c.path);
      closeNote();
      toast('Deleted');
    } catch (err) {
      toast(`Couldn't delete: ${err.message}`);
    }
  }

  function downloadCurrent() {
    const c = state.current;
    if (!c) return;
    const blob = new Blob([el.editor.value], { type: 'text/markdown' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = baseName(c.path);
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  }

  async function persistFolders() {
    await kv.set('folders', state.sources.filter((s) => s.kind === 'folder').map((s) => ({ id: s.id, handle: s.handle })));
  }

  async function openFolder() {
    if (!canOpenFolders) {
      toast('Opening folders needs Chrome, Edge, Arc or Brave. Use Import .md instead.');
      return;
    }
    let handle;
    try {
      handle = await window.showDirectoryPicker({ id: 'kaccha-chittha', mode: 'readwrite' });
    } catch (err) {
      if (err.name !== 'AbortError') toast(`Couldn't open folder: ${err.message}`);
      return;
    }
    for (const s of state.sources) {
      if (s.kind === 'folder' && await s.handle.isSameEntry(handle)) {
        await reconnect(s);
        toast(`${s.name} is already open`);
        return;
      }
    }
    const source = new FolderSource(handle, 'f' + Date.now().toString(36));
    if (!(await source.checkPermission(true))) { toast('Permission was not granted'); return; }
    await source.refresh();
    state.sources.push(source);
    await persistFolders();
    renderTree();
    toast(`Opened ${source.name} · ${source.files.length} note${source.files.length === 1 ? '' : 's'}`);
    el.app.classList.add('nav-open');
  }

  async function reconnect(source) {
    try {
      if (await source.checkPermission(true)) {
        await source.refresh();
        renderTree();
        const last = prefs.get('last', null);
        if (!state.current && last?.source === source.id && source.files.includes(last.path)) openNote(source, last.path);
      }
    } catch (err) {
      toast(`Couldn't access folder: ${err.message}`);
    }
  }

  async function closeFolder(source) {
    if (state.current?.source === source) {
      if (!(await save())) return;
      closeNote();
    }
    state.sources = state.sources.filter((s) => s !== source);
    await persistFolders();
    renderTree();
  }

  async function importFiles(files) {
    const notes = [...files].filter((f) => NOTE_EXT.test(f.name));
    if (!notes.length) { toast('No .md files found'); return; }
    let last;
    for (const f of notes) {
      last = await uniquePath(local, f.name);
      await local.write(last, await f.text());
    }
    renderTree();
    toast(`Imported ${notes.length} note${notes.length === 1 ? '' : 's'} into My Notes`);
    if (notes.length === 1) openNote(local, last);
  }

  function setMode(mode) {
    el.workspace.dataset.mode = mode;
    document.querySelectorAll('.segmented button').forEach((b) => b.classList.toggle('on', b.dataset.mode === mode));
    prefs.set('mode', mode);
    if (mode !== 'edit') renderPreview();
  }

  function toggleTheme() {
    const dark = document.documentElement.dataset.theme
      ? document.documentElement.dataset.theme === 'dark'
      : matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.dataset.theme = dark ? 'light' : 'dark';
    prefs.set('theme', document.documentElement.dataset.theme);
  }

  // ---------- Events ----------
  el.editor.addEventListener('input', () => { scheduleSave(); schedulePreview(); updateCount(); });

  el.editor.addEventListener('keydown', (e) => {
    if (e.key === 'Tab' && !e.metaKey && !e.ctrlKey && !e.altKey) {
      e.preventDefault();
      const { selectionStart: s, selectionEnd: end, value } = el.editor;
      const lineStart = value.lastIndexOf('\n', s - 1) + 1;
      if (e.shiftKey) {
        if (value.startsWith('  ', lineStart)) {
          el.editor.setRangeText('', lineStart, lineStart + 2, 'preserve');
        }
      } else if (s === end) {
        el.editor.setRangeText('  ', s, end, 'end');
      } else {
        const block = value.slice(lineStart, end).replace(/^/gm, '  ');
        el.editor.setRangeText(block, lineStart, end, 'select');
      }
      el.editor.dispatchEvent(new Event('input'));
    }
  });

  el.title.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') { e.preventDefault(); el.editor.focus(); }
    if (e.key === 'Escape') { updateHeader(); el.editor.focus(); }
  });
  el.title.addEventListener('blur', renameCurrent);

  el.search.addEventListener('input', renderTree);
  el.search.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { el.search.value = ''; renderTree(); }
    if (e.key === 'Enter') el.tree.querySelector('.row.file')?.click();
  });

  el.preview.addEventListener('click', (e) => {
    const a = e.target.closest('a[href]');
    if (!a) return;
    const href = a.getAttribute('href');
    if (href.startsWith('#')) return;
    e.preventDefault();
    if (isExternal(href)) { window.open(href, '_blank', 'noopener'); return; }
    const c = state.current;
    if (!c) return;
    const target = resolveRel(c.path, decodeURIComponent(href.split(/[?#]/)[0]));
    const candidates = [target, withExt(target)];
    const hit = candidates.find((p) => c.source.paths().includes(p));
    if (hit) openNote(c.source, hit);
    else toast(`No note at ${target}`);
  });

  $('#dialogCancel').addEventListener('click', () => el.dialog.close('cancel'));
  $('#newNote').addEventListener('click', () => newNote());
  $('#openFolder').addEventListener('click', openFolder);
  $('#importFiles').addEventListener('click', () => el.fileInput.click());
  el.fileInput.addEventListener('change', () => { importFiles(el.fileInput.files); el.fileInput.value = ''; });
  $('#download').addEventListener('click', downloadCurrent);
  $('#delete').addEventListener('click', deleteCurrent);
  $('#theme').addEventListener('click', toggleTheme);
  $('#openSidebar').addEventListener('click', () => el.app.classList.add('nav-open'));
  $('#closeSidebar').addEventListener('click', () => el.app.classList.remove('nav-open'));
  $('#scrim').addEventListener('click', () => el.app.classList.remove('nav-open'));
  document.querySelectorAll('.segmented button').forEach((b) => b.addEventListener('click', () => setMode(b.dataset.mode)));
  document.querySelector('[data-action="new"]').addEventListener('click', () => newNote());
  document.querySelector('[data-action="folder"]').addEventListener('click', openFolder);

  const MODES = ['edit', 'split', 'preview'];
  document.addEventListener('keydown', (e) => {
    const mod = e.metaKey || e.ctrlKey;
    if (!mod || e.altKey) return;
    const k = e.key.toLowerCase();
    if (k === 's') { e.preventDefault(); save().then((ok) => ok && state.current && toast('Saved')); }
    if (k === 'e') {
      e.preventDefault();
      const i = MODES.indexOf(el.workspace.dataset.mode);
      setMode(MODES[(i + 1) % MODES.length]);
    }
  });

  // Drag & drop .md files to import
  let dragDepth = 0;
  const hasFiles = (e) => [...(e.dataTransfer?.types || [])].includes('Files');
  window.addEventListener('dragenter', (e) => { if (hasFiles(e)) { dragDepth++; el.dropzone.classList.add('show'); } });
  window.addEventListener('dragleave', (e) => { if (hasFiles(e) && --dragDepth <= 0) { dragDepth = 0; el.dropzone.classList.remove('show'); } });
  window.addEventListener('dragover', (e) => { if (hasFiles(e)) e.preventDefault(); });
  window.addEventListener('drop', (e) => {
    if (!hasFiles(e)) return;
    e.preventDefault();
    dragDepth = 0;
    el.dropzone.classList.remove('show');
    importFiles(e.dataTransfer.files);
  });

  // Pick up edits made outside the app (e.g. in VS Code) when you come back
  window.addEventListener('focus', async () => {
    for (const s of state.sources) if (s.kind === 'folder' && s.ready) await s.refresh().catch(() => {});
    renderTree();
    const c = state.current;
    if (!c || state.dirty) return;
    try {
      const stamp = await c.source.stat(c.path);
      if (stamp !== state.lastStamp) {
        const pos = el.editor.selectionStart;
        el.editor.value = await c.source.read(c.path);
        el.editor.setSelectionRange(pos, pos);
        state.lastStamp = stamp;
        updateCount();
        renderPreview();
        toast('Reloaded — the file changed outside the app');
      }
    } catch {
      toast(`${baseName(c.path)} was moved or deleted outside the app`);
    }
  });

  window.addEventListener('beforeunload', (e) => {
    if (state.dirty) { save(); e.preventDefault(); }
  });
  document.addEventListener('visibilitychange', () => { if (document.hidden) save(); });

  // ---------- Boot ----------
  async function boot() {
    const theme = prefs.get('theme', null);
    if (theme) document.documentElement.dataset.theme = theme;
    setMode(prefs.get('mode', 'split'));
    $('#fsHint').hidden = canOpenFolders;
    showEmpty(true);

    try { await local.load(); } catch (err) { toast(`Browser storage is unavailable: ${err.message}`); }

    if (canOpenFolders) {
      const saved = (await kv.get('folders').catch(() => null)) || [];
      for (const { id, handle } of saved) {
        const s = new FolderSource(handle, id);
        try { if (await s.checkPermission(false)) await s.refresh(); } catch { s.ready = false; }
        state.sources.push(s);
      }
    }
    renderTree();

    const last = prefs.get('last', null);
    const src = last && sourceById(last.source);
    if (src?.ready && src.paths().includes(last.path)) openNote(src, last.path);
    else if (local.paths().includes('Welcome.md') && local.paths().length === 1) openNote(local, 'Welcome.md');
  }

  boot();
})();
