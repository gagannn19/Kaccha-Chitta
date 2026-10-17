# State is a Snapshot

*setState doesn't change the value right away*

```js
const [count, setCount] = useState(0);

function handleClick() {
  setCount(count + 1);
  setCount(count + 1);
  setCount(count + 1);
  console.log(count);      // 0  - still the old snapshot
}
// After click : 1  (not 3!)  - all three said "0 + 1"
```

> **Batching :** React batches updates - it waits till the handler finishes, then re-renders once.

---
[← What Happens on setState?](../level-03-state-events/03-what-happens-on-setstate.md) | [Level 3 index](README.md) | [All levels](../README.md) | [Functional Updates →](../level-03-state-events/05-functional-updates.md)
