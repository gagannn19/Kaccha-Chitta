# Currying

*Turn f(a, b, c) into f(a)(b)(c)*

```js
function multiply(a) {
  return function (b) {
    return a * b;            // closure remembers a
  };
}
const double = multiply(2);
const triple = multiply(3);
double(5);   // 10
triple(5);   // 15

const add = (a) => (b) => (c) => a + b + c;
add(1)(2)(3);   // 6
```

---
[← Uses of Closures](../level-05-functions-deep-dive/10-uses-of-closures.md) | [Level 5 index](README.md) | [All levels](../README.md) | [Memoization →](../level-05-functions-deep-dive/12-memoization.md)
