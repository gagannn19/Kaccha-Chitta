# Permutations & Lambdas

```cpp
string s = "abc";
do {
    cout << s << " ";             // abc acb bac bca cab cba
} while (next_permutation(s.begin(), s.end()));     // start from sorted!

auto square = [](int x) { return x * x; };      // lambda = small inline function
square(5);                                      // 25

int k = 3;
auto addK = [k](int x) { return x + k; };       // [k] captures k by value
auto inc = [&k]() { k++; };                     // [&k] captures by reference
```

---
[← Binary Search Functions](../level-06-stl-algorithms/03-binary-search-functions.md) | [Level 6 index](README.md) | [All levels](../README.md) | [Practice Set 3 →](../level-06-stl-algorithms/05-practice-set-3.md)
