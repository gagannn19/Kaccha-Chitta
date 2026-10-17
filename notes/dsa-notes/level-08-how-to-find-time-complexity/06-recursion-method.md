# Recursion : Method

*Time = (number of calls) x (work per call)*

```cpp
int fact(int n) {
    if (n <= 1) return 1;        // base case
    return n * fact(n - 1);      // 1 call, O(1) work
}
// calls : fact(n) -> fact(n-1) -> ... -> fact(1)  =  n calls
// T(n) = T(n-1) + O(1)  ->  O(n)
```

```
CALL STACK (top first)
Step 1 : fact(4)
   fact(4)
Step 2 : calls fact(3)
   fact(3) | fact(4)
Step 3 : ...
   fact(1) | fact(2) | fact(3) | fact(4)
Step 4 : returns up
   fact(4)
```

---
[← Pattern 5 : Don't Be Fooled](../level-08-how-to-find-time-complexity/05-pattern-5-don-t-be-fooled.md) | [Level 8 index](README.md) | [All levels](../README.md) | [Recursion Tree : Fibonacci →](../level-08-how-to-find-time-complexity/07-recursion-tree-fibonacci.md)
