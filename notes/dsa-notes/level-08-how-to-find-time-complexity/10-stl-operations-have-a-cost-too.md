# STL Operations Have a Cost Too

```cpp
for (int i = 0; i < n; i++)
    st.insert(arr[i]);          // set insert O(log n)  ->  total O(n log n)

for (int i = 0; i < n; i++)
    if (find(v.begin(), v.end(), x) != v.end())   // find is O(n) -> O(n²)

sort(v.begin(), v.end());       // O(n log n)
for (...) binary_search(...);   // n x O(log n) -> O(n log n)
```

> **Trap :** A one-line STL call is not O(1)! Know the cost of every method you use (see Level 5 cheat sheet).

---
[← Master Theorem (shortcut)](../level-08-how-to-find-time-complexity/09-master-theorem-shortcut.md) | [Level 8 index](README.md) | [All levels](../README.md) | [What is Space Complexity? →](../level-09-space-complexity/01-what-is-space-complexity.md)
