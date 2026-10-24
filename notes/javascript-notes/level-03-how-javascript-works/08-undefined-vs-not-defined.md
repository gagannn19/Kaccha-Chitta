# undefined vs not defined

*Look similar, mean very different things*

```js
var x;
console.log(x);   // undefined                         memory exists, no value yet
console.log(y);   // ReferenceError: y is not defined  no memory at all
```

| | **undefined** | **not defined** |
|---|---|---|
| What is it? | a special **value** (placeholder) | an **error** |
| In memory? | yes, variable exists | no, never declared |

> **Note :** Never write `x = undefined` yourself. Use **null** when you want 'empty on purpose'.

---
[← Hoisting : 3 Cases](../level-03-how-javascript-works/07-hoisting-3-cases.md) | [Level 3 index](README.md) | [All levels](../README.md) | [window & this →](../level-03-how-javascript-works/09-window-this.md)
