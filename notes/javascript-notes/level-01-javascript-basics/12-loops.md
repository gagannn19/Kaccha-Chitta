# Loops

*Repeat code*

```js
for (let i = 1; i <= 3; i++) {
  console.log(i);   // 1 2 3
}

let n = 3;
while (n > 0) {
  console.log(n);   // 3 2 1
  n--;
}

do {
  console.log("runs once");
} while (false);
```

```js
const fruits = ["apple", "mango"];
for (const f of fruits) {
  console.log(f);   // values
}

const user = { name: "Aman", age: 22 };
for (const key in user) {
  console.log(key, user[key]);
}

// break  -> stop the loop
// continue -> skip this round
```

- **for...of** - values of arrays / strings.  **for...in** - keys of objects

---
[← Conditionals](../level-01-javascript-basics/11-conditionals.md) | [Level 1 index](README.md) | [All levels](../README.md) | [Strings →](../level-01-javascript-basics/13-strings.md)
