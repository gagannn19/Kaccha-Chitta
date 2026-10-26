# CommonJS : require

*The old (default) way : require & module.exports*

```js
// math.js
function add(a, b) { return a + b; }
function sub(a, b) { return a - b; }

module.exports = { add, sub };
```

```js
// app.js
const { add, sub } = require("./math");

console.log(add(2, 3)); // 5
```

- `module.exports` → what this file gives out
- `require()` → take something from another file
- `./` means **your own file**. No `./` means built-in or npm package.

---
[← What is a Module?](../level-02-modules-npm/01-what-is-a-module.md) | [Level 2 index](README.md) | [All levels](../README.md) | [ES Modules : import →](../level-02-modules-npm/03-es-modules-import.md)
