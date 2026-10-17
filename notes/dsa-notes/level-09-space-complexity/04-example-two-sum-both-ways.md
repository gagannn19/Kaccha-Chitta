# Example : Two Sum, Both Ways

```cpp
// Brute force : O(n²) time, O(1) space
for (int i = 0; i < n; i++)
    for (int j = i + 1; j < n; j++)
        if (a[i] + a[j] == target)
            return {i, j};
```

```cpp
// Hashing : O(n) time, O(n) space
unordered_map<int,int> seen;
for (int i = 0; i < n; i++) {
    int need = target - a[i];
    if (seen.count(need))
        return {seen[need], i};
    seen[a[i]] = i;
}
```

> **How to answer :** In interviews : give brute force first, state its complexity, then optimise and state the new complexity.

---
[← Time vs Space Trade-off](../level-09-space-complexity/03-time-vs-space-trade-off.md) | [Level 9 index](README.md) | [All levels](../README.md) | [Practice : Find the Complexity →](../level-09-space-complexity/05-practice-find-the-complexity.md)
