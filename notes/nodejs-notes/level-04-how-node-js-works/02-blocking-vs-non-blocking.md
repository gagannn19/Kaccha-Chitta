# Blocking vs Non-Blocking

*Don't make others wait*

```js
// BLOCKING ❌
const data = fs.readFileSync("big.txt");
console.log("Done reading");
console.log("Next task");    // waits for the file

// NON-BLOCKING ✅
fs.readFile("big.txt", () => console.log("Done reading"));
console.log("Next task");    // runs immediately
```

Output of non-blocking :

```
Next task
Done reading
```

- **I/O** = Input/Output (files, database, network) → slow
- Node gives slow I/O to the background and keeps going.

---
[← Single Threaded](../level-04-how-node-js-works/01-single-threaded.md) | [Level 4 index](README.md) | [All levels](../README.md) | [libuv & Thread Pool →](../level-04-how-node-js-works/03-libuv-thread-pool.md)
