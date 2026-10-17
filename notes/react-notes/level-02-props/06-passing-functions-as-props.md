# Passing Functions as Props

*How a child talks back to the parent*

```jsx
function Parent() {
  function handleLike(name) {
    console.log(name + " liked!");
  }
  return <Child onLike={handleLike} />;
}
```

```jsx
function Child({ onLike }) {
  return (
    <button onClick={() => onLike("Aman")}>
      Like
    </button>
  );
}
```

```mermaid
flowchart LR
  N0["Parent (gives function ↓)"]
  N1["Child (calls it on click)"]
  N2["Parent (runs it ↑)"]
  N0 --> N1
  N1 --> N2
```

---
[← children Prop](../level-02-props/05-children-prop.md) | [Level 2 index](README.md) | [All levels](../README.md) | [Prop Drilling →](../level-02-props/07-prop-drilling.md)
