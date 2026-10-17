# map

*Key : value pairs, sorted by key*

```cpp
map<string, int> marks;
marks["Aman"] = 85;             // insert / update   O(log n)
marks["Neha"] = 92;
marks.count("Raj");             // 0 - not present
marks["Raj"];                   // CAREFUL - creates Raj with value 0!
marks.erase("Aman");

for (auto &[name, m] : marks)   // iterates in SORTED key order
    cout << name << " " << m << "\n";

// frequency count - most common pattern
map<int, int> freq;
for (int x : arr) freq[x]++;
```

---
[← set & multiset](../level-05-stl-containers/04-set-multiset.md) | [Level 5 index](README.md) | [All levels](../README.md) | [unordered_set & unordered_map →](../level-05-stl-containers/06-unordered-set-unordered-map.md)
