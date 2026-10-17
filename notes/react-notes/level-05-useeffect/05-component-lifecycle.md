# Component Lifecycle

*useEffect covers all 3 phases*

```mermaid
flowchart LR
  N0["Mount (component appears effect runs first time useEffect(fn, []))"]
  N1["Update (state / props change cleanup old, run new useEffect(fn, [dep]))"]
  N2["Unmount (component removed cleanup runs return () => ...)"]
  N0 --> N1
  N1 --> N2
```

> **Old way :** In class components these were componentDidMount, componentDidUpdate & componentWillUnmount.

---
[← Cleanup Function](../level-05-useeffect/04-cleanup-function.md) | [Level 5 index](README.md) | [All levels](../README.md) | [Fetching Data →](../level-05-useeffect/06-fetching-data.md)
