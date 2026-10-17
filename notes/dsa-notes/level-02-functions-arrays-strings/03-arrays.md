# Arrays

*Fixed size, same type, stored side by side in memory*

```cpp
int arr[5] = {10, 20, 30, 40, 50};
arr[0];                       // 10  (index starts at 0)
int n = sizeof(arr) / sizeof(arr[0]);    // 5

int grid[3][4];               // 2D array - 3 rows, 4 columns
grid[1][2] = 7;

for (int i = 0; i < n; i++) cout << arr[i] << " ";
```

10 (index 0)20 (index 1)30 (index 2)40 (index 3)50 (index 4)

> **Danger :** arr[5] here is out of bounds - C++ does NOT stop you. It reads garbage or crashes. Prefer vector (Level 4).

---
[← Pass by Value vs Reference](../level-02-functions-arrays-strings/02-pass-by-value-vs-reference.md) | [Level 2 index](README.md) | [All levels](../README.md) | [Strings →](../level-02-functions-arrays-strings/04-strings.md)
