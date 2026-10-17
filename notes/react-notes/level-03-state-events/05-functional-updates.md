# Functional Updates

*Use the previous value safely*

```js
function handleClick() {
  setCount((prev) => prev + 1);   // 0 -> 1
  setCount((prev) => prev + 1);   // 1 -> 2
  setCount((prev) => prev + 1);   // 2 -> 3
}
// After click : 3
```

- Pass a function → React gives you the **latest** value
- Use it whenever the new state depends on the old state (counters, toggles)

```js
setIsOpen((prev) => !prev);   // toggle
```

---
[← State is a Snapshot](../level-03-state-events/04-state-is-a-snapshot.md) | [Level 3 index](README.md) | [All levels](../README.md) | [State with Objects →](../level-03-state-events/06-state-with-objects.md)
