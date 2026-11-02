# process Object ⚙️

*Info & control of the running program*

> 💡 **`process`** is a global object that tells you about the **program that is running right now**, and lets you **control** it (like stopping it).

## 📥 `process.argv` & 🔐 `process.env`

```js
// node app.js gagan
console.log(process.argv[2]);    // 'gagan'  → value from the terminal
console.log(process.env.PORT);   // setting from outside the code
```

> 👉 Explained in detail in the [previous chapter](05-global-objects.md).

## 💻 `process.platform`: which OS?

```js
console.log(process.platform);
// 'darwin' → macOS
// 'win32'  → Windows
// 'linux'  → Linux
```

```js
if (process.platform === "win32") {
  console.log("You are on Windows");
}
```

## 📂 `process.cwd()`: where did you run it from?

> 💡 **cwd** = **C**urrent **W**orking **D**irectory: the folder your **terminal** is in.

```bash
cd /Users/gagan
node project/app.js
```

```js
console.log(process.cwd());   // /Users/gagan          → terminal's folder
console.log(__dirname);       // /Users/gagan/project  → file's folder
```

## 🛑 `process.exit()`: stop the program

```js
console.log("Start");
process.exit(0);         // stops here
console.log("End");      // ❌ never runs
```

| Code | Meaning |
|---|---|
| ✅ `0` | finished **successfully** |
| ❌ `1` | stopped because of an **error** |

```js
// node greet.js
if (!process.argv[2]) {
  console.log("Please give a name!");
  process.exit(1);       // stop with error
}
console.log("Hi " + process.argv[2]);
```

## 📌 Quick List

| Property | What it gives |
|---|---|
| 📥 `process.argv` | terminal inputs (array) |
| 🔐 `process.env` | environment variables (object) |
| 💻 `process.platform` | your operating system |
| 📂 `process.cwd()` | folder you ran the command from |
| 🛑 `process.exit(code)` | stops the program |

---
[← Global Objects](../level-01-node-js-basics/05-global-objects.md) | [Level 1 index](README.md) | [All levels](../README.md) | [Practice Set 1 →](../level-01-node-js-basics/07-practice-set-1.md)
