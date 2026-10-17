# priority_queue

*A heap - always gives the biggest (or smallest) first*

```cpp
priority_queue<int> maxHeap;                              // biggest on top
maxHeap.push(5); maxHeap.push(1); maxHeap.push(8);
maxHeap.top();      // 8
maxHeap.pop();      // removes 8                 push / pop : O(log n), top : O(1)

priority_queue<int, vector<int>, greater<int>> minHeap;  // smallest on top
minHeap.push(5); minHeap.push(1);
minHeap.top();      // 1

priority_queue<pair<int,int>> pq;    // compares by first, then second
```

> **Used for :** Top K elements, Dijkstra, merge K sorted lists, median of a stream.

---
[← queue & deque](../level-05-stl-containers/02-queue-deque.md) | [Level 5 index](README.md) | [All levels](../README.md) | [set & multiset →](../level-05-stl-containers/04-set-multiset.md)
