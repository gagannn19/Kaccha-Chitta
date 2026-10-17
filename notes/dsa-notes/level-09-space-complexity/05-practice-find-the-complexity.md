# Practice : Find the Complexity

*Answers on the next slide*

```cpp
// 1
for (int i = 0; i < n; i++)
    for (int j = 0; j < i * i; j++) { }

// 2
for (int i = n; i > 0; i /= 2)
    for (int j = 0; j < i; j++) { }

// 3
void f(int n) { if (n <= 0) return; f(n - 1); f(n - 1); }

// 4
sort(v.begin(), v.end());
for (int x : v) mp[x]++;            // mp is a map
```

---
[← Example : Two Sum, Both Ways](../level-09-space-complexity/04-example-two-sum-both-ways.md) | [Level 9 index](README.md) | [All levels](../README.md) | [Answers →](../level-09-space-complexity/06-answers.md)
