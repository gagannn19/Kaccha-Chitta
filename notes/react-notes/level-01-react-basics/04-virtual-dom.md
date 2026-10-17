# Virtual DOM

*A lightweight JS copy of the real DOM*

```
Old Virtual DOM
div
├── h1
├── p : count 0
└── button
```

```
New Virtual DOM
div
├── h1
├── p : count 1 *
└── button
(* = changed)
```

- **Diffing** - React compares old vs new
- **Only the changed node** - (the p) is updated in the real DOM

> **Why :** Touching the real DOM is slow. Comparing JS objects is fast. So React does the cheap work first.

---
[← SPA - Single Page Application](../level-01-react-basics/03-spa-single-page-application.md) | [Level 1 index](README.md) | [All levels](../README.md) | [Setup with Vite →](../level-01-react-basics/05-setup-with-vite.md)
