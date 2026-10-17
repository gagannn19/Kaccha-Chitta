# The Event Loop

*Who decides when a callback runs?*

Call Stack Web APIs (timers, fetch, DOM events)↓ when done Microtask Queue (promises - HIGH priority)Callback Queue (setTimeout, events) Event Loop (Is the Call Stack empty? Yes → push next callback (microtasks first))

> **Key idea :** The event loop is a gatekeeper. It only lets callbacks in when the stack is EMPTY.

---
[← Web APIs](../level-08-asynchronous-javascript/02-web-apis.md) | [Level 8 index](README.md) | [All levels](../README.md) | [Event Loop : Step by Step (1) →](../level-08-asynchronous-javascript/04-event-loop-step-by-step-1.md)
