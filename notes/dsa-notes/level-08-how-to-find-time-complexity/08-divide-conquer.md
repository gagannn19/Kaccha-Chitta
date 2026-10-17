# Divide & Conquer

```cpp
// Binary search
// T(n) = T(n/2) + O(1)
// one half each time -> O(log n)

// Merge sort
// T(n) = 2T(n/2) + O(n)
// log n levels, O(n) merge work
// on each level -> O(n log n)
```

```
n (work n)
├── n/2
│   ├── n/4
│   └── n/4
└── n/2
    ├── n/4
    └── n/4
```

> **Why n log n :** Each level of the merge sort tree does n total work, and there are log n levels.

---
[← Recursion Tree : Fibonacci](../level-08-how-to-find-time-complexity/07-recursion-tree-fibonacci.md) | [Level 8 index](README.md) | [All levels](../README.md) | [Master Theorem (shortcut) →](../level-08-how-to-find-time-complexity/09-master-theorem-shortcut.md)
