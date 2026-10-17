# undefined vs not defined

```js
var x;
console.log(x);   // undefined      memory exists, no value yet
console.log(y);   // ReferenceError: y is not defined   no memory at all
```

- **undefined**
- A special value & a placeholder
- Variable exists in memory

- **not defined**
- An error
- Variable was never declared

> **Note :** Never write x = undefined yourself. Use null when you want 'empty on purpose'.

---
[← Hoisting : 3 Cases](../level-03-how-javascript-works/06-hoisting-3-cases.md) | [Level 3 index](README.md) | [All levels](../README.md) | [window & this →](../level-03-how-javascript-works/08-window-this.md)
