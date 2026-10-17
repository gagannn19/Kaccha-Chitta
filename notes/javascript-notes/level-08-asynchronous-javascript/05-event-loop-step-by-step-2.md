# Event Loop : Step by Step (2)

```js
console.log("Start");
setTimeout(function cbT() { console.log("Timeout"); }, 0);
Promise.resolve().then(function cbP() { console.log("Promise"); });
console.log("End");
```

| Step | Call Stack | Web APIs | Microtask Q | Callback Q | Console |
|---|---|---|---|---|---|
| 4. log End, GEC leaves | - | - | cbP | cbT | Start End |
| 5. stack empty → microtask first | cbP | - | - | cbT | Start End Promise |
| 6. then callback queue | cbT | - | - | - | Start End Promise Timeout |

---
[← Event Loop : Step by Step (1)](../level-08-asynchronous-javascript/04-event-loop-step-by-step-1.md) | [Level 8 index](README.md) | [All levels](../README.md) | [What goes where? →](../level-08-asynchronous-javascript/06-what-goes-where.md)
