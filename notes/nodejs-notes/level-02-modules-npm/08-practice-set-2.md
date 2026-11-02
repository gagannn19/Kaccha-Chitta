# Practice Set 2

**Q1 :** Make `greet.js` that exports a `greet(name)` function. Use it in `app.js`

<details><summary>💡 Answer</summary>

```js
// greet.js
function greet(name) {
  return "Hello " + name;
}
module.exports = greet;
```

```js
// app.js
const greet = require("./greet");
console.log(greet("Gagan"));   // Hello Gagan
```

</details>

**Q2 :** Do Q1 again using `import` / `export`

<details><summary>💡 Answer</summary>

```js
// greet.mjs
export function greet(name) {
  return "Hello " + name;
}
```

```js
// app.mjs
import { greet } from "./greet.mjs";
console.log(greet("Gagan"));   // Hello Gagan
```

> Or keep `.js` files and add `"type": "module"` in `package.json`.

</details>

**Q3 :** Create a project with `npm init -y` and install `nodemon` as a dev dependency

<details><summary>💡 Answer</summary>

```bash
npm init -y
npm install nodemon --save-dev    # or: npm i -D nodemon
```

</details>

**Q4 :** Add a `start` script and run it

<details><summary>💡 Answer</summary>

```json
// package.json
"scripts": {
  "start": "nodemon app.js"
}
```

```bash
npm start
```

</details>

**Q5 :** Why should `node_modules` not go on GitHub?

<details><summary>💡 Answer</summary>

- 📦 It's **very big** (thousands of files).
- 🔁 Anyone can rebuild it with `npm install` using `package.json`.

So add it to `.gitignore` :

```
node_modules
```

</details>

---
[← nodemon](../level-02-modules-npm/07-nodemon.md) | [Level 2 index](README.md) | [All levels](../README.md) | [path Module →](../level-03-core-modules/01-path-module.md)
