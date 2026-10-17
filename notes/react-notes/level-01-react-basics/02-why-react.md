# Why React?

*Problem with plain JavaScript (vanilla DOM)*

```js
// Vanilla JS - YOU update the DOM by hand
let count = 0;
btn.addEventListener("click", () => {
  count++;
  span.innerText = count;     // don't forget!
  badge.innerText = count;    // and this one!
});
```

```jsx
// React - change data, UI updates itself
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}
```

> **Big idea :** In React : UI = f(state). Change the state → React re-draws the UI for you.

---
[← What is React?](../level-01-react-basics/01-what-is-react.md) | [Level 1 index](README.md) | [All levels](../README.md) | [SPA - Single Page Application →](../level-01-react-basics/03-spa-single-page-application.md)
