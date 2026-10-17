# set & multiset

*Sorted & unique (balanced BST inside)*

```cpp
set<int> s = {5, 1, 3, 1};     // {1, 3, 5}  - duplicates removed, sorted
s.insert(4);                    // O(log n)
s.erase(3);                     // O(log n)
s.count(5);                     // 1 or 0     - is it present?
s.find(5) != s.end();           // also checks presence
*s.begin();                     // smallest   *s.rbegin(); -> largest
s.lower_bound(4);               // iterator to first element >= 4

multiset<int> ms = {1, 1, 2};   // sorted, duplicates ALLOWED
ms.erase(ms.find(1));           // remove ONE copy (ms.erase(1) removes all)
```

---
[← priority_queue](../level-05-stl-containers/03-priority-queue.md) | [Level 5 index](README.md) | [All levels](../README.md) | [map →](../level-05-stl-containers/05-map.md)
