# vector

*A dynamic array - grows automatically*

```cpp
vector<int> v;                  // empty
vector<int> a(5);               // 5 zeros
vector<int> b(5, -1);           // 5 times -1
vector<int> c = {4, 2, 7};

v.push_back(10);                // add at end          O(1) amortized
v.emplace_back(20);             // same, builds in place
v.pop_back();                   // remove last          O(1)
v.size();  v.empty();  v.clear();
v.front(); v.back(); v[0];      // access               O(1)
v.insert(v.begin() + 1, 99);    // insert at index 1    O(n)
v.erase(v.begin());             // remove first         O(n)
```

---
[← pair](../level-04-stl-basics/02-pair.md) | [Level 4 index](README.md) | [All levels](../README.md) | [How vector Grows →](../level-04-stl-basics/04-how-vector-grows.md)
