# Sync vs Async fs

*Sync waits. Async does not.*

```js
// SYNC → blocks : nothing else runs until file is read
const data = fs.readFileSync("big.txt", "utf-8");
console.log(data);

// ASYNC → does not block : callback runs when ready
fs.readFile("big.txt", "utf-8", (err, data) => {
  if (err) return console.log(err);
  console.log(data);
});
console.log("I run first!");
```

- **Sync** → OK for small scripts / startup
- **Async** → use in **servers** (so other users don't wait)
- Callback style : **error first** → `(err, data)`

---
[← fs : Read & Write Files](../level-03-core-modules/02-fs-read-write-files.md) | [Level 3 index](README.md) | [All levels](../README.md) | [fs/promises →](../level-03-core-modules/04-fs-promises.md)
