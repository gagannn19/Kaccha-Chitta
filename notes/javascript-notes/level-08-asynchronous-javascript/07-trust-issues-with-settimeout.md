# Trust Issues with setTimeout

*setTimeout(cb, 5000) means AT LEAST 5s, not exactly*

```js
console.log("Start");
setTimeout(() => console.log("Callback"), 5000);

const start = Date.now();
while (Date.now() < start + 10000) {}   // blocks the stack for 10s
console.log("End");
// Start ... (10s) ... End  Callback   <- ran after 10s, not 5s
```

```
Timer finishes at 5s but stack is busy till 10s
events | |                                                  
wait   |                          ==========================
runs   |                                                   O
       | 0s        2s        4s        6s        8s        10s       
```

> **Rule 1 :** Never block the main thread.

---
[← What goes where?](../level-08-asynchronous-javascript/06-what-goes-where.md) | [Level 8 index](README.md) | [All levels](../README.md) | [Callback Hell →](../level-08-asynchronous-javascript/08-callback-hell.md)
