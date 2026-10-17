# JSX

*HTML-like syntax inside JavaScript*

```jsx
const name = "Gagan";
const element = <h1 className="title">Hello, {name}!</h1>;

// JSX is converted by the compiler into plain JS:
const element2 = React.createElement("h1", { className: "title" }, "Hello, ", name, "!");
```

- JSX is NOT HTML - it is syntax sugar for **React.createElement()**
- Browsers don't understand JSX. **Vite / Babel** converts it before it runs

---
[← How React Starts](../level-01-react-basics/06-how-react-starts.md) | [Level 1 index](README.md) | [All levels](../README.md) | [JSX Rules →](../level-01-react-basics/08-jsx-rules.md)
