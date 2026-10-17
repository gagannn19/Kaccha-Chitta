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
user["age"];        // 22         bracket notation
user.city = "Agra"; // add
delete user.age;    // remove
user.greet();       // Hi, I am Aman
```

- **Object.keys(user)**, **Object.values(user)**, **Object.entries(user)**

---
[← More Array Methods](../level-02-functions-arrays-objects/05-more-array-methods.md) | [Level 2 index](README.md) | [All levels](../README.md) | [Destructuring →](../level-02-functions-arrays-objects/07-destructuring.md)
