# Common useEffect Mistakes

```js
useEffect(() => {
  setCount(count + 1);       // no array -> render -> effect -> setState -> render... INFINITE LOOP
});

useEffect(() => {
  fetchData(query);          // uses query but []  -> stale data, never refetches
}, []);

useEffect(() => {
  setFullName(first + " " + last);   // not needed! just calculate during render
}, [first, last]);
```

> **Tip :** You might not need an effect. If it can be calculated from props / state - just calculate it.

---
[← async inside useEffect](../level-05-useeffect/07-async-inside-useeffect.md) | [Level 5 index](README.md) | [All levels](../README.md) | [StrictMode Runs Effects Twice →](../level-05-useeffect/09-strictmode-runs-effects-twice.md)
