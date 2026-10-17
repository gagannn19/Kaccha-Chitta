# React.memo

*Skip re-render if props didn't change*

```jsx
const ProductCard = React.memo(function ProductCard({ product }) {
  console.log("render", product.name);
  return <div>{product.name}</div>;
});

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <ProductCard product={laptop} />    {/* won't re-render on click */}
    </>
  );
}
```

> **Catch :** memo compares props with ===. A new object / array / function each render breaks it. That's why we need useMemo & useCallback.

---
[← When does a component re-render?](../level-10-performance/01-when-does-a-component-re-render.md) | [Level 10 index](README.md) | [All levels](../README.md) | [useMemo →](../level-10-performance/03-usememo.md)
