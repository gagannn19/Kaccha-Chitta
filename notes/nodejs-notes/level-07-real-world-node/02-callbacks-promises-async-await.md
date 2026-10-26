# Callbacks → Promises → async/await

*Same task, 3 styles*

```js
// 1. Callback
fs.readFile("a.txt", "utf-8", (err, data) => {
  if (err) return console.log(err);
  console.log(data);
});

// 2. Promise
fs.promises.readFile("a.txt", "utf-8")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// 3. async / await ✅ (most readable, inside an async function)
const data = await fs.promises.readFile("a.txt", "utf-8");
```

**Old callback function → promise :**

```js
const util = require("util");
const readFileP = util.promisify(fs.readFile);
```

---
[← Environment Variables](../level-07-real-world-node/01-environment-variables.md) | [Level 7 index](README.md) | [All levels](../README.md) | [Error Handling →](../level-07-real-world-node/03-error-handling.md)
