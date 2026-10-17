# JavaScript inside JSX

*Use { } to put any JS expression*

```jsx
const user = { name: "Aman", age: 22 };
const items = ["Pen", "Book"];

<p>{user.name}</p>                       // Aman
<p>{2 + 3}</p>                           // 5
<p>{user.age >= 18 ? "Adult" : "Minor"}</p>
<p>{items.length} items</p>
<p>{new Date().getFullYear()}</p>
```

> **Rule :** Only EXPRESSIONS (things that give a value). No if / for statements inside { }.

---
[← JSX Rules](../level-01-react-basics/08-jsx-rules.md) | [Level 1 index](README.md) | [All levels](../README.md) | [Components →](../level-01-react-basics/10-components.md)
