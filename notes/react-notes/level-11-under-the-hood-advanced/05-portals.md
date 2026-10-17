# Portals

*Render a child into a different DOM node*

```jsx
import { createPortal } from "react-dom";

function Modal({ children, onClose }) {
  return createPortal(
    <div className="overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.body                       // rendered here, outside #root
  );
}
```

- Used for modals, tooltips, toasts - so parent CSS (overflow: hidden, z-index) can't clip them
- Events still bubble through the **React tree**, not the DOM tree

---
[← Error Boundaries](../level-11-under-the-hood-advanced/04-error-boundaries.md) | [Level 11 index](README.md) | [All levels](../README.md) | [Composition Patterns →](../level-11-under-the-hood-advanced/06-composition-patterns.md)
