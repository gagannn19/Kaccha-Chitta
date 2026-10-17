# Stack vs Heap Memory

- **Stack**
- Local variables & function calls
- Automatic - freed when function ends
- Fast but small (~1-8 MB)
- Too deep recursion → stack overflow

- **Heap**
- Memory you ask for with new
- YOU must free it with delete
- Bigger but slower
- Forget delete → memory leak

```cpp
int *arr = new int[n];      // n ints on the heap
delete[] arr;               // free it

vector<int> v(n);           // vector manages heap memory for you - no delete needed
```

---
[← Pointers](../level-03-pointers-memory-structs/01-pointers.md) | [Level 3 index](README.md) | [All levels](../README.md) | [Structs & Classes →](../level-03-pointers-memory-structs/03-structs-classes.md)
