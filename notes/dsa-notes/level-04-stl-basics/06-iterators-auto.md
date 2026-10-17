# Iterators & auto

*A pointer-like object to move through a container*

```cpp
vector<int> v = {10, 20, 30};
//                 ^begin()        ^end() is AFTER the last element

for (auto it = v.begin(); it != v.end(); it++) {
    cout << *it << " ";             // * gives the value
}

for (int x : v) cout << x;          // range-for : copy of each element
for (int &x : v) x *= 2;            // reference : changes the vector
for (auto &[key, val] : mp) { }     // with maps (C++17)
```

10 (begin())20 ()30 () (end())

---
[← 2D vector](../level-04-stl-basics/05-2d-vector.md) | [Level 4 index](README.md) | [All levels](../README.md) | [stack →](../level-05-stl-containers/01-stack.md)
