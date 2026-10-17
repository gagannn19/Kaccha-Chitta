# Setup

*npm install react-router-dom*

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />      {/* 404 */}
      </Routes>
    </BrowserRouter>
  );
}
```

> **SPA :** The URL changes but the page never reloads - React just swaps the component.

---
[← Build These](../level-08-context-api/05-build-these.md) | [Level 9 index](README.md) | [All levels](../README.md) | [Link & NavLink →](../level-09-react-router/02-link-navlink.md)
