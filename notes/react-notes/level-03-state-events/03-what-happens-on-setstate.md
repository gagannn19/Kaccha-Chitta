# What Happens on setState?

*The render cycle*

```mermaid
flowchart LR
  N0["Trigger (setCount(1) is called)"]
  N1["Render (React calls Counter() again, count = 1)"]
  N2["Diff (new Virtual DOM vs old)"]
  N3["Commit (only the changed text updates in the real DOM)"]
  N0 --> N1
  N1 --> N2
  N2 --> N3
```

- Each render is a **snapshot** - the function runs again top to bottom with the new state
- Re-rendering a component also re-renders **its children**

---
[← useState](../level-03-state-events/02-usestate.md) | [Level 3 index](README.md) | [All levels](../README.md) | [State is a Snapshot →](../level-03-state-events/04-state-is-a-snapshot.md)
