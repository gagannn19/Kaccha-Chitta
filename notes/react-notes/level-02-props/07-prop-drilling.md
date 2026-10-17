# Prop Drilling

*Passing props through components that don't need them*

```
App (theme)
└── Layout ← theme
    └── Sidebar ← theme
        └── Button ← theme ✓ uses it
```

- Layout & Sidebar don't use theme - they just pass it down
- Deep trees = messy code
- Solution : **Context API** (Level 8)

---
[← Passing Functions as Props](../level-02-props/06-passing-functions-as-props.md) | [Level 2 index](README.md) | [All levels](../README.md) | [Build These →](../level-02-props/08-build-these.md)
