# Sync vs Async

```js
// Synchronous - line by line, waits
console.log("1");
console.log("2");
console.log("3");
// 1 2 3
```

```js
// Asynchronous - doesn't wait
console.log("1");
setTimeout(() => console.log("2"), 0);
console.log("3");
// 1 3 2
```

- JS has only **ONE call stack** - it can't wait for slow work (timers, network)
- So slow work is handed to the **browser** and the result comes back later

> **Example :** You order food (async) and keep chatting with friends. The waiter brings it when it's ready.

---
[← Practice Set 7](../level-07-dom-events/09-practice-set-7.md) | [Level 8 index](README.md) | [All levels](../README.md) | [Web APIs →](../level-08-asynchronous-javascript/02-web-apis.md)
