# Pattern 4 : Mixed Loops

```cpp
for (int i = 0; i < n; i++)        // n
    for (int j = 1; j < n; j *= 2) // log n
        // O(1)
// O(n log n)
```

```cpp
for (int i = 1; i <= n; i++)
    for (int j = 1; j <= n; j += i)
        // O(1)
// inner runs n/1 + n/2 + n/3 + ... + n/n
// = n(1 + 1/2 + ... + 1/n)  (harmonic)
// = O(n log n)
```

> **Method :** Always ask : how many times does the INNER loop run for each value of i? Then add them up.

---
[← Pattern 3 : Halving or Doubling](../level-08-how-to-find-time-complexity/03-pattern-3-halving-or-doubling.md) | [Level 8 index](README.md) | [All levels](../README.md) | [Pattern 5 : Don't Be Fooled →](../level-08-how-to-find-time-complexity/05-pattern-5-don-t-be-fooled.md)
