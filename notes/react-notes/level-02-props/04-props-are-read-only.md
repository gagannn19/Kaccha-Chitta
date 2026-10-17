# Props are Read-Only

```jsx
function Card({ title }) {
  title = "Changed";     // DON'T - never modify props
  return <h2>{title}</h2>;
}
```

- A component must act like a **pure function** for its props - same props → same UI
- Need data that changes? That's **state** (Level 3)

> **Example :** Props are like a gift - you can use it, but you can't change what's inside the box.

---
[← Destructuring Props](../level-02-props/03-destructuring-props.md) | [Level 2 index](README.md) | [All levels](../README.md) | [children Prop →](../level-02-props/05-children-prop.md)
