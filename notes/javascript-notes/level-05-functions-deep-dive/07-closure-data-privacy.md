# Closure : Data Privacy

*Hide data so nobody can change it by mistake*

```js
function createCounter() {
  let count = 0;                 // private
  return {
    increment: () => ++count,
    decrement: () => --count,
    get: () => count,
  };
}
const c1 = createCounter();
c1.increment();  c1.increment();
c1.get();        // 2
const c2 = createCounter();   // separate count
c2.get();        // 0
count;           // ReferenceError - can't touch it
```

```text
Each call to createCounter() = new EC = new backpack

c1 ─► { increment, decrement, get }  🎒 count : 2
c2 ─► { increment, decrement, get }  🎒 count : 0

Global EC : count ❌ not here → only the functions can reach it
```

---
[← How a Closure Forms](../level-05-functions-deep-dive/06-how-a-closure-forms.md) | [Level 5 index](README.md) | [All levels](../README.md) | [setTimeout + Closure →](../level-05-functions-deep-dive/08-settimeout-closure.md)
