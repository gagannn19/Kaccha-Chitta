# kaccha chittha

A personal markdown notebook that runs in the browser, backed by a tiny Node server with no dependencies.

## Run it

```sh
npm start        # or: node server.js
```

Then open http://localhost:5173.

## Where notes live

- **`notes/<folder>/`**: each folder inside `notes/` shows up as its own section in the sidebar. For example, `notes/html-notes` shows up as **HTML Notes**. Edits on the website are written straight to those `.md` files. Changes you make to the files in any other editor show up on the website live. To add a new collection, drop another folder into `notes/`.
- **My Notes**: quick notes saved in this browser only (IndexedDB).
- **Open folder** (Chrome, Edge, Arc, Brave): edit any other folder on your disk in place.
- **Import .md** (or drag files onto the window): copies files into My Notes.

## Features

Write / Split / Read views, autosave, ⌘S / ⌘E, rename by clicking the title, a filter box, a download button, and dark mode. Relative links (`[x](other.md)`, `[y](level-2/)`) and images (`![](../images/a.png)`) work.

## Live site (Vercel)

https://kaccha-chitta-one.vercel.app shows the `notes/` collections **read-only**. Static hosting can't run `server.js`, so it reads the list of notes from `notes/index.json`. The server keeps that file up to date, and `npm run build` regenerates it on deploy. To change notes, edit them on localhost, then commit and push.

The server only listens on `127.0.0.1`, so it's reachable from this computer only.

Files: `index.html`, `style.css`, `app.js`, `server.js`.
