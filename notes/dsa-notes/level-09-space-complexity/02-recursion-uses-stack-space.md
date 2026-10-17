# Recursion Uses Stack Space

```cpp
int fact(int n) {
    if (n <= 1) return 1;
    return n * fact(n - 1);
}
// max n calls waiting on the stack
// at the same time -> O(n) space
```

```cpp
int fib(int n) {
    if (n <= 1) return n;
    return fib(n-1) + fib(n-2);
}
// O(2^n) TIME but only O(n) SPACE :
// the stack holds one path at a time
// (max depth = n)
```

> **Rule :** Space of recursion = maximum depth of the call stack, NOT the total number of calls.

---
[← What is Space Complexity?](../level-09-space-complexity/01-what-is-space-complexity.md) | [Level 9 index](README.md) | [All levels](../README.md) | [Time vs Space Trade-off →](../level-09-space-complexity/03-time-vs-space-trade-off.md)
