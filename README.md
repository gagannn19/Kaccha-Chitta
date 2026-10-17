# kaccha chittha

A personal markdown notebook that runs in the browser. There's no build step and no backend.

## Run it

```sh
python3 -m http.server 5173
```

Then open http://localhost:5173 in Chrome, Edge, Arc or Brave.

## What it does

- **My Notes** are saved in this browser (IndexedDB).
- **Open folder** lets you pick any folder on disk. Its `.md` files show up as a tree, and your edits are saved straight back to those files. Open folders are remembered, so after a restart you click "Allow access to reopen" once.
- **Import .md** (or drag files onto the window) copies files into My Notes.
- Write / Split / Read views, autosave, rename by clicking the title, a download button, and dark mode.
- Relative links (`[x](other.md)`) and images (`![](img/a.png)`) work inside opened folders.
- If you edit a file in another editor, the app reloads it when you switch back.

Files: `index.html`, `style.css`, `app.js`.
