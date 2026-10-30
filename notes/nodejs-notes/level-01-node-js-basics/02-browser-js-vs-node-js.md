# Browser JS vs Node.js ⚖️

*Same language, different place*

| | 🌐 Browser JS | 🟢 Node.js |
|---|---|---|
| 📍 Runs in | the browser | computer / server |
| 🧱 DOM | has `window`, `document` | **no** `window`, **no** DOM |
| 📁 Files | ❌ cannot read your files | ✅ can read / write files |
| 🎯 Used for | UI (frontend) | servers (backend) |
| 🌍 Global object | `window` | `global` |

## 🔍 In simple words

- 🌐 **Browser JS** can change the **HTML & CSS** of a page, but **cannot** freely touch files on your computer.
- 🟢 **Node.js** runs JS **outside the browser** and can **read, create, modify and delete** files on your computer.

## 🌍 The global object

```js
console.log(window);     // ✅ browser   ❌ Node : ReferenceError
console.log(global);     // ❌ browser   ✅ Node
console.log(globalThis); // ✅ both
```

> 💡 **`globalThis`** gives the global object **anywhere**, browser or Node.

---
[← What is Node.js?](../level-01-node-js-basics/01-what-is-node-js.md) | [Level 1 index](README.md) | [All levels](../README.md) | [Install & Run →](../level-01-node-js-basics/03-install-run.md)
