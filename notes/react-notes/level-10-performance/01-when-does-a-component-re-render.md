# When does a component re-render?

```
App (state changed)
├── Header re-renders
└── List re-renders
    ├── Item re-renders
    └── Item re-renders
```

- 1. Its own **state** changes
- 2. Its **parent** re-renders
- 3. A **context** it uses changes

> **Rule :** Re-render is usually cheap. Optimise only when something is actually slow (measure with React DevTools Profiler).

---
[← Build These](../level-09-react-router/08-build-these.md) | [Level 10 index](README.md) | [All levels](../README.md) | [React.memo →](../level-10-performance/02-react-memo.md)
