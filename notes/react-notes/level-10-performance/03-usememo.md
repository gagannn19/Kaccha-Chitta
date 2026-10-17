# useMemo

*Remember a CALCULATED VALUE*

```jsx
function ProductList({ products, query }) {
  const filtered = useMemo(() => {
    console.log("filtering...");                 // heavy work
    return products.filter((p) => p.name.includes(query));
  }, [products, query]);                         // recalculate only if these change

  return filtered.map((p) => <ProductCard key={p.id} product={p} />);
}
```

- Skips expensive calculations on re-renders
- Keeps the **same object / array reference** so memo children don't re-render

> **Chain :** Memoization from JS Level 5 - now as a hook.

---
[← React.memo](../level-10-performance/02-react-memo.md) | [Level 10 index](README.md) | [All levels](../README.md) | [useCallback →](../level-10-performance/04-usecallback.md)
