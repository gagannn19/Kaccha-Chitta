# Destructuring Props

*Cleaner way to read props*

```jsx
function UserCard({ name, age = 18, isAdmin }) {   // destructure + default value
  return (
    <div>
      <h2>{name} {isAdmin && "(Admin)"}</h2>
      <p>Age : {age}</p>
    </div>
  );
}

<UserCard name="Aman" isAdmin />    // isAdmin alone = true
```

---
[← One-Way Data Flow](../level-02-props/02-one-way-data-flow.md) | [Level 2 index](README.md) | [All levels](../README.md) | [Props are Read-Only →](../level-02-props/04-props-are-read-only.md)
