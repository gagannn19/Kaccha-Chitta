# Binary Search Functions

*Work ONLY on sorted ranges - O(log n)*

```cpp
vector<int> v = {1, 3, 3, 5, 8};
binary_search(v.begin(), v.end(), 5);        // true

auto lb = lower_bound(v.begin(), v.end(), 3);   // first element >= 3  -> index 1
auto ub = upper_bound(v.begin(), v.end(), 3);   // first element >  3  -> index 3
int idx = lb - v.begin();                       // iterator -> index
int howMany3 = ub - lb;                         // 2
```

1 (0)3 (1 ← lower)3 (2)5 (3 ← upper)8 (4)

---
[← Useful Algorithms](../level-06-stl-algorithms/02-useful-algorithms.md) | [Level 6 index](README.md) | [All levels](../README.md) | [Permutations & Lambdas →](../level-06-stl-algorithms/04-permutations-lambdas.md)
