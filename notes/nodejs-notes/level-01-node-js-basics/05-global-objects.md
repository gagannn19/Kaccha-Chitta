# Global Objects

*Things you can use anywhere, without importing*

```js
console.log(__dirname);   // folder of this file
console.log(__filename);  // full path of this file
console.log(process.argv);// command-line arguments
console.log(process.env); // environment variables

setTimeout(() => console.log("after 1s"), 1000);
```

- `global` → the global object (like `window` in browser)
- `process` → info about the running Node program
- `console`, `setTimeout`, `setInterval` → also global

> `__dirname` & `__filename` work only in **CommonJS** files (Level 2).

---
[← REPL](../level-01-node-js-basics/04-repl.md) | [Level 1 index](README.md) | [All levels](../README.md) | [process Object →](../level-01-node-js-basics/06-process-object.md)
