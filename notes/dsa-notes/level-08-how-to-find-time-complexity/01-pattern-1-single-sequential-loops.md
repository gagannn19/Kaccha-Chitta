# Pattern 1 : Single & Sequential Loops

```cpp
for (int i = 0; i < n; i++) {
    // O(1) work
}
// O(n)

for (int i = 0; i < n; i += 2) { }
// n/2 rounds -> still O(n)
```

```cpp
for (int i = 0; i < n; i++) { }   // n
for (int j = 0; j < m; j++) { }   // m
// one AFTER another -> ADD
// O(n + m)

for (int i = 0; i < 100; i++) { }
// fixed 100 -> O(1)
```

> **Golden rule :** Loops one after another → ADD.  Loops one inside another → MULTIPLY.

---
[← Read the Constraints](../level-07-time-complexity-basics/05-read-the-constraints.md) | [Level 8 index](README.md) | [All levels](../README.md) | [Pattern 2 : Nested Loops →](../level-08-how-to-find-time-complexity/02-pattern-2-nested-loops.md)
