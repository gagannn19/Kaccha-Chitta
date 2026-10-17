# children Prop

*Whatever you put between the tags*

```jsx
function Card({ children, title }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      {children}
    </div>
  );
}

<Card title="Profile">
  <img src="me.png" alt="me" />
  <p>Frontend Developer</p>
</Card>
```

> **Use :** Great for reusable wrappers : Card, Modal, Layout, Button.

---
[← Props are Read-Only](../level-02-props/04-props-are-read-only.md) | [Level 2 index](README.md) | [All levels](../README.md) | [Passing Functions as Props →](../level-02-props/06-passing-functions-as-props.md)
