# Objects

*Data as key : value pairs*

```js
const user = {
  name: "Aman",
  age: 22,
  greet() {
    console.log("Hi, I am " + this.name);
  },
};
user.name;          // "Aman"     dot notation
user["age"];        // 22         bracket notation using String key
let a = "name";
user[a]             // "Aman".    bracket notation using Variable key
user.city = "Agra"; // add
delete user.age;    // remove
user.greet();       // Hi, I am Aman
```

* Object.keys(user) → Returns an array of property names.
* Object.values(user) → Returns an array of property values.
* Object.entries(user) → Returns an array of key-value pairs, where each pair is also an array.

---
[← Arrays](../level-02-functions-arrays-objects/03-arrays.md) | [Level 2 index](README.md) | [All levels](../README.md) | [Destructuring →](../level-02-functions-arrays-objects/05-destructuring.md)
