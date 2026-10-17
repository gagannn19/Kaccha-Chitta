# Why Keys?

*A key tells React WHICH item is which*

```
Before
ul
├── li key=1 : Aman
└── li key=2 : Neha
```

```
After adding Raj at the top
ul
├── li key=3 : Raj *
├── li key=1 : Aman
└── li key=2 : Neha
(* = changed)
```

- With keys, React sees only **key=3** is new → inserts 1 item
- Without keys it would re-draw ALL items

- Keys must be **unique among siblings** and **stable** (use the id from your data)
- Avoid **index** as key if items can be added, removed or re-ordered - state gets mixed up

---
[← Rendering Lists](../level-04-lists-forms/01-rendering-lists.md) | [Level 4 index](README.md) | [All levels](../README.md) | [Filter & Search a List →](../level-04-lists-forms/03-filter-search-a-list.md)
