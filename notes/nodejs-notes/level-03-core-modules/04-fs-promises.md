# fs/promises

*Async fs with async / await (cleanest)*

```js
const fs = require("fs/promises");

async function main() {
  try {
    await fs.writeFile("a.txt", "Hi");
    const text = await fs.readFile("a.txt", "utf-8");
    console.log(text);

    await fs.mkdir("logs", { recursive: true }); // make folder
    const files = await fs.readdir(".");         // list folder
    console.log(files);
  } catch (err) {
    console.log("Error:", err.message);
  }
}
main();
```

> **Best choice** for new code.

---
[← Sync vs Async fs](../level-03-core-modules/03-sync-vs-async-fs.md) | [Level 3 index](README.md) | [All levels](../README.md) | [os Module →](../level-03-core-modules/05-os-module.md)
