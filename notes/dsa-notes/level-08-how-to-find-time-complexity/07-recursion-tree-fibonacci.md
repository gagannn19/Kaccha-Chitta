# Recursion Tree : Fibonacci

*2 calls each time → the tree doubles*

```cpp
int fib(int n) {
    if (n <= 1) return n;
    return fib(n-1) + fib(n-2);
}
// level 0 : 1 call
// level 1 : 2 calls
// level 2 : 4 calls
// ... depth n
// total ≈ 2^n  ->  O(2^n)
```

```
fib(4)
├── fib(3)
│   ├── fib(2)
│   │   ├── fib(1)
│   │   └── fib(0)
│   └── fib(1)
└── fib(2)
    ├── fib(1)
    └── fib(0)
```

> **Fix :** fib(2) is calculated again and again. Store results (memoization / DP) → O(n). Same idea as memoize in your JS notes!

---
[← Recursion : Method](../level-08-how-to-find-time-complexity/06-recursion-method.md) | [Level 8 index](README.md) | [All levels](../README.md) | [Divide & Conquer →](../level-08-how-to-find-time-complexity/08-divide-conquer.md)
