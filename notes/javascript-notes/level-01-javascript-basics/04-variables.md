# Variables

*A labelled box to store a value*

```js
let age = 25;          // can change later
const name = "Gagan";  // cannot be re-assigned
var city = "Agra";     // old way - avoid

age = 26;     // OK
name = "Raj"; // TypeError: Assignment to constant variable
```

- Use **const** by default, **let** when the value will change, generally avoid **var** in modern JavaScript.
- Names : start with a letter, $ or _ , use camelCase (`userName`), case sensitive
```js
let userName = "Gagan";
let _age = 25;
let $price = 100;
```

> **Coming up :** Why is var bad? We'll see the full reason in Level 4.


---
[← Console & Comments](../level-01-javascript-basics/03-console-comments.md) | [Level 1 index](README.md) | [All levels](../README.md) | [Data Types →](../level-01-javascript-basics/05-data-types.md)
