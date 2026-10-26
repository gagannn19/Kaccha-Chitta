# nextTick vs setImmediate

*Who runs first?*

```js
console.log("1 start");

setTimeout(() => console.log("4 timeout"), 0);
setImmediate(() => console.log("5 immediate"));
Promise.resolve().then(() => console.log("3 promise"));
process.nextTick(() => console.log("2 nextTick"));

console.log("1 end");
```

Order :

1. Normal code (`start`, `end`)
2. `process.nextTick` → **highest** priority
3. Promises (`.then`)
4. `setTimeout` (timers phase)
5. `setImmediate` (check phase)

> `setTimeout 0` vs `setImmediate` order can change in the main file. Inside an I/O callback, **setImmediate is always first**.

---
[← Event Loop in Node](../level-04-how-node-js-works/04-event-loop-in-node.md) | [Level 4 index](README.md) | [All levels](../README.md) | [Practice Set 4 →](../level-04-how-node-js-works/06-practice-set-4.md)
