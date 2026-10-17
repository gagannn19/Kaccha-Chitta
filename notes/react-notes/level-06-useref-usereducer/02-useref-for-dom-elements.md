# useRef for DOM Elements

*Focus an input, scroll, measure size*

```jsx
function SearchBox() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();          // focus on page load
  }, []);

  return (
    <>
      <input ref={inputRef} />
      <button onClick={() => inputRef.current.select()}>Select all</button>
    </>
  );
}
```

---
[← useRef](../level-06-useref-usereducer/01-useref.md) | [Level 6 index](README.md) | [All levels](../README.md) | [useRef for Values →](../level-06-useref-usereducer/03-useref-for-values.md)
