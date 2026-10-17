# Pattern 2 : Nested Loops

*Multiply*

```cpp
for (int i = 0; i < n; i++)
    for (int j = 0; j < n; j++)
        // O(1)
// n * n = O(n²)

for (int i = 0; i < n; i++)
    for (int j = 0; j < m; j++)
// O(n * m)
```

```cpp
for (int i = 0; i < n; i++)
    for (int j = i; j < n; j++)
        // O(1)
// i=0: n, i=1: n-1 ... i=n-1: 1
// n + (n-1) + ... + 1 = n(n+1)/2
// = O(n²)
```

■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ ■ (half a square is still a square → O(n2))

---
[← Pattern 1 : Single & Sequential Loops](../level-08-how-to-find-time-complexity/01-pattern-1-single-sequential-loops.md) | [Level 8 index](README.md) | [All levels](../README.md) | [Pattern 3 : Halving or Doubling →](../level-08-how-to-find-time-complexity/03-pattern-3-halving-or-doubling.md)
