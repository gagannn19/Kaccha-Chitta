# useCallback

*Remember a FUNCTION*

```jsx
function Parent() {
  const [count, setCount] = useState(0);

  const handleDelete = useCallback((id) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }, []);                       // same function every render

  return <List onDelete={handleDelete} />;   // List is React.memo
}
```

| Hook | Remembers | Returns |
|---|---|---|
| **useMemo(fn, deps)** | result of fn | a value |
| **useCallback(fn, deps)** | fn itself | a function |

---
[← useMemo](../level-10-performance/03-usememo.md) | [Level 10 index](README.md) | [All levels](../README.md) | [Lazy Loading & Code Splitting →](../level-10-performance/05-lazy-loading-code-splitting.md)
