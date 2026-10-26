# Event Loop in Node

*Checks again and again : "any callback ready to run?"*

The event loop goes round in **phases** :

```
 ┌──► 1. Timers        → setTimeout, setInterval
 │    2. Pending       → some system callbacks
 │    3. Poll          → I/O callbacks (fs, network)
 │    4. Check         → setImmediate
 └─── 5. Close         → close events (socket.on('close'))
```

- Your normal code runs **first** (call stack).
- Then the loop runs ready callbacks phase by phase.
- When nothing is left to do, the program **ends**.

---
[← libuv & Thread Pool](../level-04-how-node-js-works/03-libuv-thread-pool.md) | [Level 4 index](README.md) | [All levels](../README.md) | [nextTick vs setImmediate →](../level-04-how-node-js-works/05-nexttick-vs-setimmediate.md)
