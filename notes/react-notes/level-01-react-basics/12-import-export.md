# Import & Export

*Each component in its own file*

```jsx
// Button.jsx - default export
export default function Button() {
  return <button>Click</button>;
}

// utils.js - named exports
export const add = (a, b) => a + b;
export const PI = 3.14;
```

```jsx
// App.jsx
import Button from "./Button";          // any name
import { add, PI } from "./utils";     // exact names

function App() {
  return <Button />;
}
```

> **Rule :** One default export per file. As many named exports as you want.

---
[← Component Tree](../level-01-react-basics/11-component-tree.md) | [Level 1 index](README.md) | [All levels](../README.md) | [Fragments →](../level-01-react-basics/13-fragments.md)
