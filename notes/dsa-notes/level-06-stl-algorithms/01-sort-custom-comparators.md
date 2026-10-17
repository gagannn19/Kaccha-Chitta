# sort & Custom Comparators

```cpp
vector<int> v = {5, 2, 8, 1};
sort(v.begin(), v.end());                  // ascending   O(n log n)
sort(v.begin(), v.end(), greater<int>());  // descending
sort(v.rbegin(), v.rend());                // descending (trick)

// custom : sort students by marks DESC, then name ASC
sort(st.begin(), st.end(), [](const Student &a, const Student &b) {
    if (a.marks != b.marks) return a.marks > b.marks;
    return a.name < b.name;
});
```

> **Rule :** The comparator returns true if a should come BEFORE b. Never return true for equal elements (use >, not >=).

---
[← Which Container?](../level-05-stl-containers/07-which-container.md) | [Level 6 index](README.md) | [All levels](../README.md) | [Useful Algorithms →](../level-06-stl-algorithms/02-useful-algorithms.md)
