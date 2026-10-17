# 2D vector

```cpp
int n = 3, m = 4;
vector<vector<int>> grid(n, vector<int>(m, 0));    // 3 x 4 filled with 0
grid[1][2] = 5;

vector<vector<int>> adj(n);         // adjacency list for graphs
adj[0].push_back(1);                // edge 0 -> 1

for (auto &row : grid) {
    for (int x : row) cout << x << " ";
    cout << "\n";
}
```

---
[← How vector Grows](../level-04-stl-basics/04-how-vector-grows.md) | [Level 4 index](README.md) | [All levels](../README.md) | [Iterators & auto →](../level-04-stl-basics/06-iterators-auto.md)
