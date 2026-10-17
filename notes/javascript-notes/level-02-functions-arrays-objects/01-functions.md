# Functions

*A reusable block of code*

```js
function add(a, b = 0) {   // a, b = parameters, b has a default
  return a + b;
}
add(2, 3);   // 5    2, 3 = arguments
add(2);      // 2

const square = (n) => n * n;   // arrow function
const greet = () => {
  console.log("Hi");
};
```

- **return** sends a value back and stops the function
- No return? The function gives **undefined**

---
[← Practice Set 1](../level-01-javascript-basics/14-practice-set-1.md) | [Level 2 index](README.md) | [All levels](../README.md) | [Arrow Functions →](../level-02-functions-arrays-objects/02-arrow-functions.md)
