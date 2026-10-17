# Rules of Hooks

- **1.** Call hooks only at the **top level** - not inside if, loops or nested functions
- **2.** Call hooks only from **React components** or **custom hooks**

```js
if (isLoggedIn) {
  const [name, setName] = useState("");   // WRONG
}
```

> **Why :** React remembers hooks by their ORDER. A hook inside an if can change that order between renders and mix up state.

---
[← useState vs useReducer](../level-06-useref-usereducer/06-usestate-vs-usereducer.md) | [Level 7 index](README.md) | [All levels](../README.md) | [What is a Custom Hook? →](../level-07-custom-hooks/02-what-is-a-custom-hook.md)
