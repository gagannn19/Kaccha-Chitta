# window & this

*What JS creates even for an empty file*

Even if your JS file is **completely empty**, JS still creates a Global EC with 2 things in it :

| Memory | Value |
|---|---|
| **window** | the global object - { setTimeout, console, alert, ... } |
| **this** | points to **window** |

## window

*A big object full of ready-made things the browser gives you*

```js
// these are all the same
console.log("hi");
window.console.log("hi");

alert("hello");
window.alert("hello");
```

- That's why you can use `console`, `setTimeout`, `alert` without creating them

## var vs let on window

```js
var x = 10;
console.log(window.x);   // 10         var at the top level becomes a property of window

let y = 20;
console.log(window.y);   // undefined  let / const do NOT attach to window
```

## this

```js
console.log(this);            // window
console.log(this === window); // true
```

- At the top level (not inside any function), **this** points to **window**

> ## Global Object

The global object has different names in different environments:

- **Browser:** `window`

- **Node.js:** `global`

- **Everywhere:** `globalThis`


---
[← undefined vs not defined](../level-03-how-javascript-works/08-undefined-vs-not-defined.md) | [Level 3 index](README.md) | [All levels](../README.md) | [Practice Set 3 →](../level-03-how-javascript-works/10-practice-set-3.md)
