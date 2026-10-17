# Useful Algorithms

```cpp
reverse(v.begin(), v.end());
*max_element(v.begin(), v.end());           // largest value
*min_element(v.begin(), v.end());
accumulate(v.begin(), v.end(), 0LL);        // sum (0LL to avoid overflow)
count(v.begin(), v.end(), 3);               // how many 3s
find(v.begin(), v.end(), 3);                // iterator (v.end() if not found)
fill(v.begin(), v.end(), 0);
swap(a, b);
__gcd(a, b);   gcd(a, b);   lcm(a, b);       // gcd / lcm (C++17)
v.erase(unique(v.begin(), v.end()), v.end());   // remove duplicates (sort first!)
```

---
[← sort & Custom Comparators](../level-06-stl-algorithms/01-sort-custom-comparators.md) | [Level 6 index](README.md) | [All levels](../README.md) | [Binary Search Functions →](../level-06-stl-algorithms/03-binary-search-functions.md)
