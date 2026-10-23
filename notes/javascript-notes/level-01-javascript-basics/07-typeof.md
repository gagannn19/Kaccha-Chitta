# typeof

*Check the type of a value*

```js
typeof "hi";          // "string"
typeof 42;            // "number"
typeof true;          // "boolean"
typeof undefined;     // "undefined"
typeof null;          // "object"   <- famous JS bug
typeof [1, 2];        // "object"
typeof function(){};  // "function"
```

---

## `typeof null` → "object"

- JavaScript was created in 1995.
- In its early implementation, a mistake caused `typeof null` to return `"object"`.
- This is called a **historical bug**.
- JavaScript kept this behavior to avoid breaking older programs.

---

## `typeof [1, 2]` → "object"

**Arrays are objects**

- In JavaScript, an array is a special kind of object.
- `[1, 2]` works like `{ 0: 1, 1: 2 }` underneath.
- The indexes (0, 1, 2...) are the array's keys.
- Keys are stored as strings, so `arr[0]` and `arr["0"]` give the same value. JavaScript quietly converts `0` into `"0"` before it looks up the key.
- What makes an array special: it has a `length` property and built-in methods like `push`, `pop`, `map` and `filter`.

**How to check if something is an array**

- `typeof` can't tell an array from a normal object (both give `"object"`).
- Use `Array.isArray()` instead:

```js
Array.isArray([1, 2]);    // true
Array.isArray({ a: 1 });  // false
```

---

## `typeof function(){}` → "function"

- A function is also an object underneath, with one extra hidden compartment that holds its code.

```js
function greet(name) {
  return "Hi " + name;
}
```

Underneath, it's roughly:

```js
greet = {
  name: "greet",        // the function's name
  length: 1,            // how many parameters it takes
  [hidden code box]: return "Hi " + name
}
```

- We can read the normal compartments:

```js
greet.name     // "greet"
greet.length   // 1
```

- Calling it with `()` (e.g. `greet("Gagan")`) runs the code in the hidden box.
- The hidden code box is officially called `[[Call]]`. Any object with `[[Call]]` is a function.
- `typeof` gives it a separate label, `"function"`, so we can check whether something can be called.
- Because it's an object, a function can have properties too:

```js
greet.count = 5;   // works fine
```

---
[← Symbol & BigInt](../level-01-javascript-basics/06-symbol-bigint.md) | [Level 1 index](README.md) | [All levels](../README.md) | [Truthy & Falsy →](../level-01-javascript-basics/08-truthy-falsy.md)
