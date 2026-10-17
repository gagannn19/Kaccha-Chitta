# What is a Custom Hook?

*A function starting with 'use' that uses other hooks*

```js
// useToggle.js
import { useState } from "react";

export function useToggle(initial = false) {
  const [on, setOn] = useState(initial);
  const toggle = () => setOn((p) => !p);
  return [on, toggle];
}
```

```jsx
// any component
function Menu() {
  const [open, toggleOpen] = useToggle();
  return (
    <>
      <button onClick={toggleOpen}>Menu</button>
      {open && <Dropdown />}
    </>
  );
}
```

> **Note :** Each component that calls a custom hook gets its OWN separate state.

---
[← Rules of Hooks](../level-07-custom-hooks/01-rules-of-hooks.md) | [Level 7 index](README.md) | [All levels](../README.md) | [useFetch →](../level-07-custom-hooks/03-usefetch.md)
