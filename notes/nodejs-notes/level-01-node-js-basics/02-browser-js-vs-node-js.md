# Browser JS vs Node.js

*Same language, different place*

| Browser JS | Node.js |
|---|---|
| Runs in the browser | Runs on computer / server |
| Has `window`, `document` (DOM) | **No** `window`, **no** DOM |
| Cannot read your files | **Can** read / write files |
| Used for UI (frontend) | Used for servers (backend) |
| Global object : `window` | Global object : `global` |

```js
console.log(window);   // ✅ browser   ❌ Node : ReferenceError
console.log(global);   // ❌ browser   ✅ Node
```

> `globalThis` works in **both**.

---
[← What is Node.js?](../level-01-node-js-basics/01-what-is-node-js.md) | [Level 1 index](README.md) | [All levels](../README.md) | [Install & Run →](../level-01-node-js-basics/03-install-run.md)
