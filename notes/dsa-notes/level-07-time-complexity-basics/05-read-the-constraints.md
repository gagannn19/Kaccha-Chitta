# Read the Constraints

*~108 simple operations per second - guess the needed complexity*

| If n is up to | You need about | Typical approach |
|---|---|---|
| n ≤ 10 | O(n!) / O(2n) | try all permutations / recursion |
| n ≤ 20 | O(2n) | subsets, bitmask |
| n ≤ 500 | O(n3) | 3 nested loops, Floyd-Warshall |
| n ≤ 5000 | O(n2) | 2 nested loops, simple DP |
| n ≤ 106 | O(n log n) or O(n) | sort, binary search, hashing, two pointers |
| n ≤ 1018 | O(log n) or O(1) | math, binary search on answer |

> **Trick :** Look at n first - it tells you which solution passes and which gets TLE.

---
[← Common Complexities](../level-07-time-complexity-basics/04-common-complexities.md) | [Level 7 index](README.md) | [All levels](../README.md) | [Pattern 1 : Single & Sequential Loops →](../level-08-how-to-find-time-complexity/01-pattern-1-single-sequential-loops.md)
