# libuv & Thread Pool

*The helper behind the scenes*

```
 Your JS code (1 thread)
        │
        ▼
     V8 engine
        │
        ▼
     libuv  ──►  Thread pool (4 helper threads)
                 file system, crypto, zip
        │
        ▼
     OS (network work)
```

- **V8** → runs your JS
- **libuv** → a C library that does the slow async work and has the **event loop**
- **Thread pool** → 4 hidden helper threads (by default) for heavy tasks

> So Node is single-threaded **for your JS**, but uses helpers in the background.

---
[← Blocking vs Non-Blocking](../level-04-how-node-js-works/02-blocking-vs-non-blocking.md) | [Level 4 index](README.md) | [All levels](../README.md) | [Event Loop in Node →](../level-04-how-node-js-works/04-event-loop-in-node.md)
