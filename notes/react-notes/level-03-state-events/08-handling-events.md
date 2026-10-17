# Handling Events

```jsx
function Buttons() {
  function handleClick(e) {
    console.log("clicked", e.target);
  }
  return (
    <>
      <button onClick={handleClick}>Pass the function</button>
      <button onClick={() => alert("Hi")}>Inline arrow</button>
      <button onClick={() => deleteItem(5)}>With an argument</button>
      <button onClick={handleClick()}>WRONG - runs on every render</button>
    </>
  );
}
```

- Give React a **function**, don't **call** it. Need arguments? Wrap in an arrow

---
[← State with Arrays](../level-03-state-events/07-state-with-arrays.md) | [Level 3 index](README.md) | [All levels](../README.md) | [Common Events →](../level-03-state-events/09-common-events.md)
