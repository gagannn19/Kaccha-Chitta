# Destructuring

*Unpack values into variables*

## Array destructuring

*Picks by **position***

```js
const arr = [1, 2, 3];
const [a, b] = arr;      // a = 1, b = 2

const [x, , z] = arr;    // skip one -> x = 1, z = 3

let p = 1, q = 2;
[p, q] = [q, p];         // swap -> p = 2, q = 1
```

## Object destructuring

*Picks by **key name***

```js
const user = { name: "Aman", age: 22 };

const { name, age } = user;
// same as -> const name = user.name;  const age = user.age;
```

> **Note :** `const name, age = user;` won't work. The **{ }** tells JavaScript you are pulling properties out of an object.

**Rename** - take `name` but store it in a variable called `n`

```js
const { name: n } = user;
console.log(n);          // "Aman"   same as -> const n = user.name;
```

**Default value** - used when the property is missing or `undefined`

```js
const { city = "Agra" } = user;
console.log(city);       // "Agra"   (user has no city)
```

**In function parameters**

```js
function show({ name }) {
  console.log(name);
}
show(user);              // "Aman"
```

How it works :
1. `show(user)` passes the user object to the function.
2. `{ name }` pulls the `name` property out of it.
3. `console.log(name)` prints `"Aman"`.

---
[← Objects](../level-02-functions-arrays-objects/04-objects.md) | [Level 2 index](README.md) | [All levels](../README.md) | [Spread & Rest →](../level-02-functions-arrays-objects/06-spread-rest.md)
