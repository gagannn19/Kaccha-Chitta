# Pointers

*A variable that stores an ADDRESS*

```cpp
int x = 10;
int *p = &x;        // & = "address of",  p stores x's address
cout << p;          // 0x7ffe... (address)
cout << *p;         // 10        (* = "value at" - dereference)
*p = 20;            // changes x to 20

int &r = x;         // reference = another NAME for x (no address math)
r = 30;             // x is 30
```

**Stack**

| Variable | Value |
|---|---|
| x | 30 (address 0x100) |
| p | 0x100 → points to x |
| r | just another name of x |

**Heap**

| Address | Object |
|---|---|

---
[← Practice Set 2](../level-02-functions-arrays-strings/05-practice-set-2.md) | [Level 3 index](README.md) | [All levels](../README.md) | [Stack vs Heap Memory →](../level-03-pointers-memory-structs/02-stack-vs-heap-memory.md)
