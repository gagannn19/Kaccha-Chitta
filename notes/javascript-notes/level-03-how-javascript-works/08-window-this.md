# window & this

*What JS creates even for an empty file*

**Global EC**

| Memory | Value |
|---|---|
| window | { setTimeout, console, ... } |
| this | → window |

*Code :* empty file

```js
var x = 10;
console.log(window.x);   // 10   var at global level attaches to window
let y = 20;
console.log(window.y);   // undefined   let/const don't attach
```

- Browser global object = **window**,  Node.js = **global**,  anywhere = **globalThis**
- At global level : **this === window**

---
[← undefined vs not defined](../level-03-how-javascript-works/07-undefined-vs-not-defined.md) | [Level 3 index](README.md) | [All levels](../README.md) | [Practice Set 3 →](../level-03-how-javascript-works/09-practice-set-3.md)
