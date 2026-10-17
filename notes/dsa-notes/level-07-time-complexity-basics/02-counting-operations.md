# Counting Operations

```cpp
int sum = 0;                    // 1
for (int i = 0; i < n; i++) {   // runs n times
    sum += arr[i];              // 1 per round  ->  n
}
cout << sum;                    // 1
// total = n + 2  ->  O(n)
```

- Count how many times the **most repeated line** runs
- **Drop constants** : 3n + 5 → O(n),   n/2 → O(n)
- **Keep the biggest term** : n<sup>2</sup> + n + 100 → O(n<sup>2</sup>)

---
[← What is Time Complexity?](../level-07-time-complexity-basics/01-what-is-time-complexity.md) | [Level 7 index](README.md) | [All levels](../README.md) | [Big O, Omega & Theta →](../level-07-time-complexity-basics/03-big-o-omega-theta.md)
