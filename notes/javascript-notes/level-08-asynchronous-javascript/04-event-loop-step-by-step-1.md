# Event Loop : Step by Step (1)

```js
console.log("Start");
setTimeout(function cbT() { console.log("Timeout"); }, 0);
Promise.resolve().then(function cbP() { console.log("Promise"); });
console.log("End");
```

| Step | Call Stack | Web APIs | Microtask Q | Callback Q | Console |
|---|---|---|---|---|---|
| 1. log Start | log(), GEC | - | - | - | Start |
| 2. setTimeout registers cbT | GEC | cbT 0ms | - | - | Start |
| 3. timer done, promise resolved | GEC | - | cbP | cbT | Start |

---
[← The Event Loop](../level-08-asynchronous-javascript/03-the-event-loop.md) | [Level 8 index](README.md) | [All levels](../README.md) | [Event Loop : Step by Step (2) →](../level-08-asynchronous-javascript/05-event-loop-step-by-step-2.md)
