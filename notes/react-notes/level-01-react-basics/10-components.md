# Components

*A function that returns JSX*

```jsx
function Greeting() {
  return <h1>Hello!</h1>;
}

function App() {
  return (
    <div>
      <Greeting />
      <Greeting />
    </div>
  );
}
```

- Name must start with a **Capital letter** - `<greeting />` is treated as an HTML tag
- Write once, use anywhere - like a function you can call again and again

---
[← JavaScript inside JSX](../level-01-react-basics/09-javascript-inside-jsx.md) | [Level 1 index](README.md) | [All levels](../README.md) | [Component Tree →](../level-01-react-basics/11-component-tree.md)
