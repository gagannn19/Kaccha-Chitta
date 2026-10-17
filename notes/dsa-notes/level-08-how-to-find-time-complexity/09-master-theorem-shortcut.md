# Master Theorem (shortcut)

*For T(n) = a T(n/b) + O(nd)*

| Compare | Result | Example |
|---|---|---|
| a < bd | O(nd) | T(n) = T(n/2) + O(n) → O(n) |
| a = bd | O(nd log n) | merge sort : 2T(n/2) + O(n) → O(n log n) binary search : T(n/2) + O(1) → O(log n) |
| a > bd | O(nlogb a) | T(n) = 4T(n/2) + O(n) → O(n2) |

> **Letters :** a = number of recursive calls, b = how much the input shrinks, d = power of the extra work.

---
[← Divide & Conquer](../level-08-how-to-find-time-complexity/08-divide-conquer.md) | [Level 8 index](README.md) | [All levels](../README.md) | [STL Operations Have a Cost Too →](../level-08-how-to-find-time-complexity/10-stl-operations-have-a-cost-too.md)
