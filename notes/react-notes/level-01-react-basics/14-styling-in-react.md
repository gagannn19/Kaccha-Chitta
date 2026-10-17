# Styling in React

```jsx
import "./App.css";                       // 1. normal CSS file
<div className="card active">...</div>

<div style={{ backgroundColor: "black", padding: "10px" }}>  // 2. inline (object)

import styles from "./Card.module.css";  // 3. CSS Modules (scoped)
<div className={styles.card}>...</div>

<div className={isActive ? "btn active" : "btn"}>   // 4. dynamic class
```

> **Also :** Tailwind CSS is also very popular with React : className="p-4 bg-black text-white".

---
[← Fragments](../level-01-react-basics/13-fragments.md) | [Level 1 index](README.md) | [All levels](../README.md) | [Conditional Rendering →](../level-01-react-basics/15-conditional-rendering.md)
