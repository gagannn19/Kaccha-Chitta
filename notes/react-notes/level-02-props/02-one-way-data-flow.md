# One-Way Data Flow

*Props always flow DOWN, from parent to child*

```
App (user = 'Aman')
├── Navbar ← user
│   └── Avatar ← user
└── Main
```

- Data goes **down** like a waterfall ↓
- A child can NOT change the parent's data directly
- This makes bugs easy to trace

---
[← Props](../level-02-props/01-props.md) | [Level 2 index](README.md) | [All levels](../README.md) | [Destructuring Props →](../level-02-props/03-destructuring-props.md)
