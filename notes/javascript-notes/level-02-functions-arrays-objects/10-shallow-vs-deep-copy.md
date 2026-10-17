# Shallow vs Deep Copy

*How to copy an object safely*

```js
const user = { name: "Aman", address: { city: "Agra" } };

const shallow = { ...user };          // copies only the top level
shallow.address.city = "Delhi";       // user.address.city is "Delhi" too!

const deep = structuredClone(user);   // copies every level
deep.address.city = "Mumbai";         // user is safe
```

- **Shallow** - nested objects are still shared (spread, Object.assign)
- **Deep** - fully separate copy (structuredClone, JSON.parse(JSON.stringify(obj)))

---
[← Primitive vs Reference](../level-02-functions-arrays-objects/09-primitive-vs-reference.md) | [Level 2 index](README.md) | [All levels](../README.md) | [Practice Set 2 →](../level-02-functions-arrays-objects/11-practice-set-2.md)
