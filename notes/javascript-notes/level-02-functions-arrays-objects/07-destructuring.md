# Destructuring

*Unpack values into variables*

```js
const arr = [1, 2, 3];
const [a, b] = arr;
// a = 1, b = 2

const [x, , z] = arr;
// skip -> x = 1, z = 3

let p = 1, q = 2;
[p, q] = [q, p];  // swap
```

```js
const user = { name: "Aman", age: 22 };
const { name, age } = user;

const { name: n } = user;   // rename
const { city = "Agra" } = user; // default

function show({ name }) {
  console.log(name);
}
show(user);   // Aman
```

---
[← Objects](../level-02-functions-arrays-objects/06-objects.md) | [Level 2 index](README.md) | [All levels](../README.md) | [Spread & Rest →](../level-02-functions-arrays-objects/08-spread-rest.md)
