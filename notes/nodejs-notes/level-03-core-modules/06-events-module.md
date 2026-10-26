# events Module

*Make your own events : emit & listen*

```js
const EventEmitter = require("events");
const shop = new EventEmitter();

// 1. listen
shop.on("order", (item) => {
  console.log("New order:", item);
});

// 2. emit (fire)
shop.emit("order", "Pizza"); // New order: Pizza
```

- `.on(name, fn)` → listen (runs every time)
- `.once(name, fn)` → listen only **one** time
- `.emit(name, data)` → fire the event

> Many Node things (servers, streams) are built on EventEmitter.

---
[← os Module](../level-03-core-modules/05-os-module.md) | [Level 3 index](README.md) | [All levels](../README.md) | [Practice Set 3 →](../level-03-core-modules/07-practice-set-3.md)
