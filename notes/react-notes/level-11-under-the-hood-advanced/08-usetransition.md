# useTransition

*Keep typing smooth during heavy updates*

```jsx
const [isPending, startTransition] = useTransition();

function handleChange(e) {
  setQuery(e.target.value);              // urgent - update input now
  startTransition(() => {
    setFilteredList(bigFilter(e.target.value));   // can wait
  });
}
{isPending && <p>Updating...</p>}
```

---
[← Higher-Order Components](../level-11-under-the-hood-advanced/07-higher-order-components.md) | [Level 11 index](README.md) | [All levels](../README.md) | [New in React 19 →](../level-11-under-the-hood-advanced/09-new-in-react-19.md)
