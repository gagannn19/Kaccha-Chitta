# How React Starts

*index.html → main.jsx → App*

```jsx
<!-- index.html -->
<body>
  <div id="root"></div>
  <script type="module"
    src="/src/main.jsx"></script>
</body>
```

```jsx
// main.jsx
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

createRoot(document.getElementById("root"))
  .render(<App />);
```

- React takes control of the empty **#root** div and draws your whole app inside it

---
[← Setup with Vite](../level-01-react-basics/05-setup-with-vite.md) | [Level 1 index](README.md) | [All levels](../README.md) | [JSX →](../level-01-react-basics/07-jsx.md)
