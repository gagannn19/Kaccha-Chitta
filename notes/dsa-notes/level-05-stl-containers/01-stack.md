# stack

*Last In, First Out (LIFO)*

```cpp
stack<int> st;
st.push(1);
st.push(2);
st.push(3);
st.top();      // 3
st.pop();      // removes 3
st.size();     // 2
st.empty();    // false
```

```
CALL STACK (top first)
Step 1 : push 1,2,3
   3 | 2 | 1
Step 2 : pop()
   2 | 1
```

> **Used for :** Uses : undo, balanced brackets, next greater element, DFS. All operations O(1).

---
[← Iterators & auto](../level-04-stl-basics/06-iterators-auto.md) | [Level 5 index](README.md) | [All levels](../README.md) | [queue & deque →](../level-05-stl-containers/02-queue-deque.md)
