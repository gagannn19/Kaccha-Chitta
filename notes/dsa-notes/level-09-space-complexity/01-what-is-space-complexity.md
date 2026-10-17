# What is Space Complexity?

- **Total space** = input space + extra (auxiliary) space
- Usually we report **auxiliary space** - the extra memory YOUR algorithm creates
- Count : new arrays / vectors / maps + recursion stack depth

```cpp
int sum = 0;
for (int x : arr) sum += x;
// only 1 variable -> O(1) space
```

```cpp
vector<int> copy(n);
map<int,int> freq;      // up to n keys
// -> O(n) space
```

---
[← STL Operations Have a Cost Too](../level-08-how-to-find-time-complexity/10-stl-operations-have-a-cost-too.md) | [Level 9 index](README.md) | [All levels](../README.md) | [Recursion Uses Stack Space →](../level-09-space-complexity/02-recursion-uses-stack-space.md)
