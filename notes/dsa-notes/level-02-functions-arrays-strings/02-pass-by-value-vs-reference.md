# Pass by Value vs Reference

```cpp
void byValue(int x) {
    x = 100;           // changes a COPY
}
void byRef(int &x) {
    x = 100;           // changes the ORIGINAL
}
int a = 5;
byValue(a);   // a is still 5
byRef(a);     // a is now 100
```

**Stack**

| Variable | Value |
|---|---|
| a (main) | 5 → 100 |
| x (byValue) | copy of a |
| x (byRef) | → same box as a |

**Heap**

| Address | Object |
|---|---|

> **Tip :** Pass big things (vector, string) as const reference : void print(const vector&lt;int&gt; &v). No copy = faster, const = safe.

---
[← Functions](../level-02-functions-arrays-strings/01-functions.md) | [Level 2 index](README.md) | [All levels](../README.md) | [Arrays →](../level-02-functions-arrays-strings/03-arrays.md)
