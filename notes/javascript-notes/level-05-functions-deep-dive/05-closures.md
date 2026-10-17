# Closures

*A function + the variables around it = closure*

```js
function outer() {
  let count = 0;
  function inner() {
    count++;
    console.log(count);
  }
  return inner;
}
const fn = outer();   // outer is finished
fn();   // 1
fn();   // 2   count is remembered!
```

fn = innerbackpack (closure)count : 2

- When inner is returned, it carries a **backpack** of its outer variables
- Even after outer() finished, inner can still read & change **count**

---
[← Higher-Order Functions](../level-05-functions-deep-dive/04-higher-order-functions.md) | [Level 5 index](README.md) | [All levels](../README.md) | [How a Closure Forms →](../level-05-functions-deep-dive/06-how-a-closure-forms.md)
