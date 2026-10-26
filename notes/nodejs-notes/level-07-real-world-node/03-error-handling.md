# Error Handling

*Don't let the app crash*

```js
// 1. try / catch with async/await (inside an async function)
try {
  const data = await fs.promises.readFile("no.txt");
} catch (err) {
  console.log("File not found:", err.message);
}

// 2. error-first callbacks
fs.readFile("no.txt", (err, data) => {
  if (err) return console.log(err.message);
});

// 3. last safety net (log & exit)
process.on("uncaughtException", (err) => {
  console.log("Crash:", err.message);
  process.exit(1);
});
```

> An **uncaught error stops the whole server** for **all** users.

---
[← Callbacks → Promises → async/await](../level-07-real-world-node/02-callbacks-promises-async-await.md) | [Level 7 index](README.md) | [All levels](../README.md) | [Project Structure →](../level-07-real-world-node/04-project-structure.md)
