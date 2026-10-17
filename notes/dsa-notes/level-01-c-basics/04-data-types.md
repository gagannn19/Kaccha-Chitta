# Data Types

| Type | Size | Range / use |
|---|---|---|
| **int** | 4 bytes | about -2.1 x 109 to 2.1 x 109 |
| **long long** | 8 bytes | about ±9.2 x 1018 - use for big sums & products |
| **double** | 8 bytes | decimals (~15 digits precision) |
| **char** | 1 byte | single character 'a' (stored as a number, 'a' = 97) |
| **bool** | 1 byte | true / false |
| **string** | - | text "hello" (from STL) |

```cpp
int a = 100000, b = 100000;
long long wrong = a * b;              // OVERFLOW - multiplied as int first
long long right = 1LL * a * b;        // 10000000000
```

---
[← Input & Output](../level-01-c-basics/03-input-output.md) | [Level 1 index](README.md) | [All levels](../README.md) | [Operators & Type Casting →](../level-01-c-basics/05-operators-type-casting.md)
