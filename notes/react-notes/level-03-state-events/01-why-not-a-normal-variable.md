# Why not a normal variable?

```jsx
function Counter() {
  let count = 0;
  return <button onClick={() => { count++; console.log(count); }}>{count}</button>;
}
// console shows 1, 2, 3... but the screen always shows 0
```

- Changing a normal variable does **NOT re-render** the component
- And on every render, **let count = 0** runs again and resets it
- We need a value that React **remembers** and that **triggers a re-render** → **state**

---
[← Build These](../level-02-props/08-build-these.md) | [Level 3 index](README.md) | [All levels](../README.md) | [useState →](../level-03-state-events/02-usestate.md)
