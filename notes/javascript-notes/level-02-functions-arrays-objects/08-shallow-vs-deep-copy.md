# Shallow vs Deep Copy

*How to copy an object safely*

```js
const user = {
  name: "Aman",              // top-level property
  address: { city: "Agra" }  // nested object
};
```

## Shallow copy

*Copies only the **top level***

```js
const shallow = { ...user };

shallow.name = "Raj";            // user.name is still "Aman"  (safe)
shallow.address.city = "Delhi";  // user.address.city is "Delhi" too!
```

- **name** → the value is copied
- **address** → only the **reference** is copied, so both point to the same nested object

## Deep copy

*Copies **every level***

```js
const deep = structuredClone(user);
deep.address.city = "Mumbai";    // user is safe
```

| | Nested objects | How |
|---|---|---|
| **Shallow** | still shared | spread `{...obj}`, `Object.assign()` |
| **Deep** | fully separate | `structuredClone()`, `JSON.parse(JSON.stringify(obj))` |

> **Note :** `JSON.parse(JSON.stringify(obj))` drops `undefined`, functions and symbols, and breaks on circular references. Prefer **structuredClone()**.

**Circular reference** - an object that points back to itself

```js
const obj = {};
obj.self = obj;
```

---
[← Primitive vs Reference](../level-02-functions-arrays-objects/07-primitive-vs-reference.md) | [Level 2 index](README.md) | [All levels](../README.md) | [Practice Set 2 →](../level-02-functions-arrays-objects/09-practice-set-2.md)
