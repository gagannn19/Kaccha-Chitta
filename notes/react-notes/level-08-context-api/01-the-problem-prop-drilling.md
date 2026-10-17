# The Problem : Prop Drilling

```
App (user)
└── Layout ← user
    └── Header ← user
        └── Avatar ← user
```

```
UserContext.Provider (user)
└── Layout
    └── Header
        └── Avatar ← useContext
```

- **Left** : every level passes user down.  **Right** : Avatar takes it directly from Context

> **Example :** Context is like a Wi-Fi router : any device in the house can connect, no cable through every room.

---
[← Build These](../level-07-custom-hooks/07-build-these.md) | [Level 8 index](README.md) | [All levels](../README.md) | [Using Context : 3 Steps →](../level-08-context-api/02-using-context-3-steps.md)
