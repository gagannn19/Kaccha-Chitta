# Derived State

*Don't store what you can calculate*

```js
const [items, setItems] = useState([]);
const [total, setTotal] = useState(0);        // DON'T - can go out of sync

const total = items.reduce((s, i) => s + i.price, 0);   // DO - calculate on render
const doneCount = todos.filter((t) => t.done).length;
```

> **Rule :** Keep the minimum state. Everything else, calculate from it.

---
[← Lifting State Up](../level-03-state-events/10-lifting-state-up.md) | [Level 3 index](README.md) | [All levels](../README.md) | [Build These →](../level-03-state-events/12-build-these.md)
