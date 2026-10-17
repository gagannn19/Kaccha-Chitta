# pair

*Two values together*

```cpp
pair<int, string> p = {1, "Aman"};
p.first;      // 1
p.second;     // "Aman"

pair<int, int> q = make_pair(3, 4);
auto [x, y] = q;                          // structured binding (C++17)

vector<pair<int,int>> v = {{3,1}, {1,5}, {1,2}};
sort(v.begin(), v.end());   // {1,2} {1,5} {3,1} - by first, then second
```

---
[← What is STL?](../level-04-stl-basics/01-what-is-stl.md) | [Level 4 index](README.md) | [All levels](../README.md) | [vector →](../level-04-stl-basics/03-vector.md)
