# fs : Read & Write Files

*fs = File System*

```js
const fs = require("fs");

// write (creates file / replaces content)
fs.writeFileSync("note.txt", "Hello");

// add to end
fs.appendFileSync("note.txt", " World");

// read
const data = fs.readFileSync("note.txt", "utf-8");
console.log(data); // Hello World

// delete
fs.unlinkSync("note.txt");
```

> Without `"utf-8"` you get a **Buffer** (raw bytes), not text.

---
[← path Module](../level-03-core-modules/01-path-module.md) | [Level 3 index](README.md) | [All levels](../README.md) | [Sync vs Async fs →](../level-03-core-modules/03-sync-vs-async-fs.md)
