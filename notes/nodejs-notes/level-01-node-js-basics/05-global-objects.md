# Global Objects 🌍

*Things you can use anywhere, without importing*

> 💡 **Global objects** are built into Node. They're **ready to use** in every file, so you don't need `require` or `import`.

## 🌐 `global`

The **main global object** in Node, like `window` in the browser.

```js
global.name = "Gagan";
console.log(name);   // Gagan  (works anywhere)
```

## 📁 `__dirname` & `__filename`

```js
// file: /home/user/project/app.js
console.log(__dirname);   // /home/user/project         → folder
console.log(__filename);  // /home/user/project/app.js  → full file path
```

> ⚠️ These two work only in **CommonJS** files (Level 2).

## ⏱️ Timers

```js
setTimeout(() => console.log("after 1s"), 1000);    // runs once

const id = setInterval(() => console.log("tick"), 1000); // runs again & again
clearInterval(id);                                  // stops it
```

## ⚙️ `process`

Info about the **running Node program**.

### 📥 `process.argv`: input from the terminal

> 💡 **`process.argv`** is an **array** of every word you typed to run the file.

```bash
node app.js gagan 25
```

```js
// app.js
console.log(process.argv);
// [
//   '/usr/local/bin/node',   → [0] Path of Node.js ... means the location where the Node.js executable is installed on your system.
//   '/project/app.js',       → [1] path of your file
//   'gagan',                 → [2] 1st value you passed
//   '25'                     → [3] 2nd value you passed
// ]
```

- 👉 Your own values start from **index 2**.
- ⚠️ Every value is a **string**, so `'25'` is not the number `25`.

```js
// node add.js 5 10
const a = Number(process.argv[2]);  // 5
const b = Number(process.argv[3]);  // 10
console.log(a + b);                 // 15  (without Number → "510")
```

✂️ Tip: skip the first two with `slice(2)`.

```js
const args = process.argv.slice(2);  // ['5', '10']
```

### 🔐 `process.env`: settings from outside the code

> 💡 **`process.env`** is an **object** holding **environment variables**: settings like ports or secret keys that live **outside** your code.

```bash
PORT=4000 node server.js     # set a variable just for this run
```

```js
// server.js
console.log(process.env.PORT);   // '4000'  (also a string)
console.log(process.env.HOME);   // '/Users/gagan'  (set by your system)

const port = process.env.PORT || 3000;  // use 3000 if PORT is not set
```

- 🔑 Keep **passwords & API keys** here, **not** inside the code.
- ❓ A variable that isn't set → `undefined`.
- 📄 Real projects keep these in a `.env` file (Level 7).

### 🆚 argv vs env

| | `process.argv` | `process.env` |
|---|---|---|
| Type | 📋 array | 🗂️ object |
| Set by | words after `node app.js` | variables before the command / system |
| Read with | `process.argv[2]` | `process.env.PORT` |
| Used for | small inputs (name, number) | config & secrets |

> 👉 More `process` features in the next chapter.

## 📌 Quick List

| Global | What it does |
|---|---|
| 🌐 `global` | the global object |
| 🖨️ `console` | prints output |
| 📁 `__dirname` | current **folder** path |
| 📄 `__filename` | current **file** path |
| ⏱️ `setTimeout` / `setInterval` | run code later / again & again |
| ⚙️ `process` | info about the running program |

---
[← REPL](../level-01-node-js-basics/04-repl.md) | [Level 1 index](README.md) | [All levels](../README.md) | [process Object →](../level-01-node-js-basics/06-process-object.md)
