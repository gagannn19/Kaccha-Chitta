# Which Container?

*Complexity cheat sheet*

| Container | Access | Insert / Delete | Search | Use when |
|---|---|---|---|---|
| **vector** | O(1) | end O(1), middle O(n) | O(n) | default choice |
| **deque** | O(1) | both ends O(1) | O(n) | sliding window |
| **stack / queue** | top / front O(1) | O(1) | - | LIFO / FIFO, BFS |
| **priority_queue** | top O(1) | O(log n) | - | min / max fast |
| **set / map** | - | O(log n) | O(log n) | sorted + unique |
| **unordered_*** | - | O(1) avg | O(1) avg | fast lookup, counting |

---
[← unordered_set & unordered_map](../level-05-stl-containers/06-unordered-set-unordered-map.md) | [Level 5 index](README.md) | [All levels](../README.md) | [sort & Custom Comparators →](../level-06-stl-algorithms/01-sort-custom-comparators.md)
