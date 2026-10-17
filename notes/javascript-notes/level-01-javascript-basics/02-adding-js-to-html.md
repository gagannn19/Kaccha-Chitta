# Adding JS to HTML

```jsx
<!-- 1. Inline (avoid) -->
<button onclick="alert('Hi')">Click</button>

<!-- 2. Internal -->
<script> console.log("Hello"); </script>

<!-- 3. External (best) -->
<script src="app.js" defer></script>
```

- **defer** - downloads the file while HTML loads, runs it after HTML is ready
- Without defer, put the script just before **&lt;/body&gt;**

---
[← What is JavaScript?](../level-01-javascript-basics/01-what-is-javascript.md) | [Level 1 index](README.md) | [All levels](../README.md) | [Console & Comments →](../level-01-javascript-basics/03-console-comments.md)
