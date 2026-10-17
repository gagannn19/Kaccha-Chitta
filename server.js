// Tiny local server for kaccha chittha — no dependencies.
// Serves the site and lets it read/write the markdown files in ./notes,
// pushing live updates to the browser when files change on disk.
//
//   node server.js        →  http://localhost:5173

const http = require('node:http');
const fs = require('node:fs');
const fsp = fs.promises;
const path = require('node:path');

const PORT = Number(process.env.PORT) || 5173;
const ROOT = __dirname;
const NOTES = path.join(ROOT, 'notes');
const NOTE_EXT = /\.(md|markdown|mdown|mkd|txt)$/i;
const SKIP_DIRS = new Set(['node_modules', '.git', '.obsidian', '.trash']);
const MAX_BODY = 10 * 1024 * 1024;

const TYPES = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json', '.md': 'text/markdown; charset=utf-8', '.txt': 'text/plain; charset=utf-8',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.gif': 'image/gif', '.webp': 'image/webp',
  '.svg': 'image/svg+xml', '.ico': 'image/x-icon', '.pdf': 'application/pdf', '.mp4': 'video/mp4', '.mp3': 'audio/mpeg',
};

class HttpError extends Error {
  constructor(status, message) { super(message); this.status = status; }
}

// Resolve a path inside ./notes, refusing anything that escapes it.
function inNotes(rel, { note = false } = {}) {
  if (typeof rel !== 'string' || !rel) throw new HttpError(400, 'Missing path');
  const abs = path.resolve(NOTES, rel);
  if (!abs.startsWith(NOTES + path.sep)) throw new HttpError(400, 'Path is outside the notes folder');
  if (abs.split(path.sep).some((seg) => seg.startsWith('.'))) throw new HttpError(400, 'Hidden paths are not allowed');
  if (note && !NOTE_EXT.test(abs)) throw new HttpError(400, 'Only markdown/text files can be edited');
  return abs;
}

async function listNotes(dir, prefix = '') {
  const out = [];
  for (const ent of await fsp.readdir(dir, { withFileTypes: true })) {
    if (ent.name.startsWith('.') || SKIP_DIRS.has(ent.name)) continue;
    if (ent.isDirectory()) out.push(...await listNotes(path.join(dir, ent.name), prefix + ent.name + '/'));
    else if (ent.isFile() && NOTE_EXT.test(ent.name)) out.push(prefix + ent.name);
  }
  return out;
}

async function collections() {
  await fsp.mkdir(NOTES, { recursive: true });
  const dirs = (await fsp.readdir(NOTES, { withFileTypes: true }))
    .filter((d) => d.isDirectory() && !d.name.startsWith('.'));
  return Promise.all(dirs.map(async (d) => ({ name: d.name, files: await listNotes(path.join(NOTES, d.name)) })));
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let size = 0;
    const chunks = [];
    req.on('data', (c) => {
      size += c.length;
      if (size > MAX_BODY) { reject(new HttpError(413, 'Note is too large')); req.destroy(); return; }
      chunks.push(c);
    });
    req.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
    req.on('error', reject);
  });
}

const send = (res, status, body, type = 'application/json') => {
  res.writeHead(status, { 'Content-Type': type, 'Cache-Control': 'no-store' });
  res.end(type === 'application/json' ? JSON.stringify(body) : body);
};

// ---------- Live updates (Server-Sent Events) ----------
const clients = new Set();
let pending = new Set();
let flushTimer;
function broadcast(rel) {
  pending.add(rel);
  clearTimeout(flushTimer);
  flushTimer = setTimeout(() => {
    const data = `data: ${JSON.stringify({ paths: [...pending] })}\n\n`;
    pending = new Set();
    for (const res of clients) res.write(data);
  }, 150);
}

// ---------- notes/index.json: the note list for static hosting (e.g. Vercel) ----------
const MANIFEST = path.join(NOTES, 'index.json');
async function writeManifest() {
  const cols = (await collections()).map((c) => ({ name: c.name, files: c.files.sort() }))
    .sort((a, b) => a.name.localeCompare(b.name));
  const json = JSON.stringify(cols, null, 2) + '\n';
  const old = await fsp.readFile(MANIFEST, 'utf8').catch(() => '');
  if (json !== old) await fsp.writeFile(MANIFEST, json, 'utf8');
}

if (process.argv.includes('--manifest')) {
  writeManifest().then(() => console.log('wrote notes/index.json'), (err) => { console.error(err); process.exit(1); });
  return;
}

let manifestTimer;
fs.mkdirSync(NOTES, { recursive: true });
fs.watch(NOTES, { recursive: true }, (_event, file) => {
  if (!file) return broadcast('');
  const rel = file.split(path.sep).join('/');
  if (rel === 'index.json' || rel.split('/').some((s) => s.startsWith('.'))) return;
  broadcast(rel);
  clearTimeout(manifestTimer);
  manifestTimer = setTimeout(() => writeManifest().catch(console.error), 300);
});
writeManifest().catch(console.error);

// ---------- API ----------
async function handleApi(req, res, url) {
  const p = url.searchParams.get('p');
  const route = `${req.method} ${url.pathname}`;

  switch (route) {
    case 'GET /api/collections':
      return send(res, 200, await collections());

    case 'GET /api/file': {
      const abs = inNotes(p, { note: true });
      const [text, st] = await Promise.all([fsp.readFile(abs, 'utf8'), fsp.stat(abs)]);
      res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'no-store', 'X-Mtime': String(st.mtimeMs) });
      return res.end(text);
    }

    case 'GET /api/stat': {
      const st = await fsp.stat(inNotes(p, { note: true }));
      return send(res, 200, { mtime: st.mtimeMs });
    }

    case 'PUT /api/file': {
      const abs = inNotes(p, { note: true });
      const text = await readBody(req);
      await fsp.mkdir(path.dirname(abs), { recursive: true });
      await fsp.writeFile(abs, text, 'utf8');
      return send(res, 200, { mtime: (await fsp.stat(abs)).mtimeMs });
    }

    case 'DELETE /api/file':
      await fsp.unlink(inNotes(p, { note: true }));
      return send(res, 200, { ok: true });

    case 'POST /api/rename': {
      const { from, to } = JSON.parse(await readBody(req));
      const src = inNotes(from, { note: true });
      const dst = inNotes(to, { note: true });
      if (fs.existsSync(dst)) throw new HttpError(409, 'A note with that name already exists');
      await fsp.mkdir(path.dirname(dst), { recursive: true });
      await fsp.rename(src, dst);
      return send(res, 200, { mtime: (await fsp.stat(dst)).mtimeMs });
    }

    case 'GET /api/events':
      res.writeHead(200, { 'Content-Type': 'text/event-stream', 'Cache-Control': 'no-store', Connection: 'keep-alive' });
      res.write(': connected\n\n');
      clients.add(res);
      req.on('close', () => clients.delete(res));
      return;

    default:
      throw new HttpError(404, 'Unknown API route');
  }
}

// ---------- Static files ----------
async function handleStatic(req, res, url) {
  const rel = decodeURIComponent(url.pathname === '/' ? '/index.html' : url.pathname);
  const abs = path.resolve(ROOT, '.' + rel);
  if (!abs.startsWith(ROOT + path.sep) || rel.split('/').some((s) => s.startsWith('.'))) throw new HttpError(404, 'Not found');
  const st = await fsp.stat(abs).catch(() => null);
  if (!st || !st.isFile()) throw new HttpError(404, 'Not found');
  res.writeHead(200, { 'Content-Type': TYPES[path.extname(abs).toLowerCase()] || 'application/octet-stream', 'Cache-Control': 'no-cache' });
  fs.createReadStream(abs).pipe(res);
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, 'http://localhost');
  try {
    if (url.pathname.startsWith('/api/')) await handleApi(req, res, url);
    else if (req.method === 'GET' || req.method === 'HEAD') await handleStatic(req, res, url);
    else throw new HttpError(405, 'Method not allowed');
  } catch (err) {
    const status = err.status || (err.code === 'ENOENT' ? 404 : err instanceof SyntaxError ? 400 : 500);
    if (status === 500) console.error(err);
    if (!res.headersSent) send(res, status, err.message || 'Error', 'text/plain; charset=utf-8');
    else res.end();
  }
});

// Personal use: only reachable from this computer.
server.listen(PORT, '127.0.0.1', () => {
  console.log(`kaccha chittha → http://localhost:${PORT}`);
  console.log(`notes folder   → ${NOTES}`);
});
