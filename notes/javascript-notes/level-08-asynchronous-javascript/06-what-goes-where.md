# What goes where?

- **Microtask Queue** (first)
- Promise .then / .catch / .finally
- async / await (code after await)
- queueMicrotask()
- MutationObserver

- **Callback (Task) Queue**
- setTimeout / setInterval
- DOM events (click, scroll)
- Everything else

> **Starvation :** If microtasks keep adding more microtasks, the callback queue waits forever. This is called **Starvation**.

---
[← Event Loop : Step by Step (2)](../level-08-asynchronous-javascript/05-event-loop-step-by-step-2.md) | [Level 8 index](README.md) | [All levels](../README.md) | [Trust Issues with setTimeout →](../level-08-asynchronous-javascript/07-trust-issues-with-settimeout.md)
