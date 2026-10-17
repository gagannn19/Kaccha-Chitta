# What is React?

*A JavaScript library for building user interfaces*

- Made by Meta (Facebook). Used by Netflix, Instagram, Airbnb, Swiggy...
- **Component based** - build small pieces (Navbar, Card, Button) and join them like LEGO
- **Declarative** - you describe WHAT the UI should look like, React figures out HOW to update the DOM
- It is a **library**, not a framework - it only handles the UI (routing, data etc. come from other packages)

```mermaid
flowchart LR
  N0["Navbar"]
  N1["+ ProductCard x 10"]
  N2["+ Footer"]
  N3["= Page"]
  N0 --> N1
  N1 --> N2
  N2 --> N3
```

---
[Level 1 index](README.md) | [All levels](../README.md) | [Why React? →](../level-01-react-basics/02-why-react.md)
