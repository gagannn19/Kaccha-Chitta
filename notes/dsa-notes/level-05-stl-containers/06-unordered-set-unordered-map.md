# unordered_set & unordered_map

*Hash table - faster, but NOT sorted*

```cpp
unordered_map<int, int> freq;     // average O(1) insert / find / erase
for (int x : arr) freq[x]++;

unordered_set<int> seen;
if (seen.count(x)) cout << "duplicate";
seen.insert(x);
```

|  | set / map | unordered_set / map |
|---|---|---|
| Inside | Red-Black tree | Hash table |
| Order | sorted | no order |
| insert / find | O(log n) | O(1) average, O(n) worst |
| lower_bound | yes | no |

---
[← map](../level-05-stl-containers/05-map.md) | [Level 5 index](README.md) | [All levels](../README.md) | [Which Container? →](../level-05-stl-containers/07-which-container.md)
