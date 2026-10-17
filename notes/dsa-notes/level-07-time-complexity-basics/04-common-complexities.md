# Common Complexities

*From fastest to slowest*

| Big O | Name | n = 10 | n = 1000 | n = 106 | Example |
|---|---|---|---|---|---|
| **O(1)** | constant | 1 | 1 | 1 | arr[i], push_back |
| **O(log n)** | logarithmic | 3 | 10 | 20 | binary search |
| **O(n)** | linear | 10 | 1000 | 106 | one loop |
| **O(n log n)** | linearithmic | 33 | 104 | 2 x 107 | sort, merge sort |
| **O(n2)** | quadratic | 100 | 106 | 1012 ✗ | nested loops |
| **O(2n)** | exponential | 1024 | ✗ | ✗ | all subsets |
| **O(n!)** | factorial | 3.6 x 106 | ✗ | ✗ | all permutations |

> **Order :** O(1) &lt; O(log n) &lt; O(n) &lt; O(n log n) &lt; O(n<sup>2</sup>) &lt; O(n<sup>3</sup>) &lt; O(2<sup>n</sup>) &lt; O(n!)

---
[← Big O, Omega & Theta](../level-07-time-complexity-basics/03-big-o-omega-theta.md) | [Level 7 index](README.md) | [All levels](../README.md) | [Read the Constraints →](../level-07-time-complexity-basics/05-read-the-constraints.md)
