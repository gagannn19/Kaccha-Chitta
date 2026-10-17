# Pattern 5 : Don't Be Fooled

```cpp
for (int i = 0; i < n; i++) {
    if (i == 5) break;          // stops after 6 rounds -> O(1)
}

int j = 0;
for (int i = 0; i < n; i++) {
    while (j < n && arr[j] < arr[i]) j++;    // j NEVER resets
}
// j moves at most n times IN TOTAL -> O(n), not O(n²)   (two pointers)

for (int i = 0; i < n; i++)
    s = s + "a";                // string copy each time -> O(n²) !
v.insert(v.begin(), x);         // inside a loop -> O(n²)
```

---
[← Pattern 4 : Mixed Loops](../level-08-how-to-find-time-complexity/04-pattern-4-mixed-loops.md) | [Level 8 index](README.md) | [All levels](../README.md) | [Recursion : Method →](../level-08-how-to-find-time-complexity/06-recursion-method.md)
