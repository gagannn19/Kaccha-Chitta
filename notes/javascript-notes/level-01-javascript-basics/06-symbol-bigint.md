# Symbol & BigInt

## Symbol

*A unique, one-of-a-kind value*

```js
const id1 = Symbol("id");
const id2 = Symbol("id");

id1 === id2;      // false  <- every Symbol is unique
typeof id1;       // "symbol"
id1.description;  // "id"  (just a label)
```

- Created with `Symbol()` - no `new` keyword
- The text inside is only a label, it does not make it equal to another
- Mostly used as a **unique object key** that won't clash with other keys

```js
const id = Symbol("id");
const user = { name: "Aman", id : 999,  [id]: 101 };

user.id; // 999
user[id];  // 101
Object.keys(user);  // ["name", "id"]  <- symbol key is hidden
```

## BigInt

*For whole numbers too big for Number*

```js
Number.MAX_SAFE_INTEGER;  // 9007199254740991  <- Number is only safe up to here
9007199254740991 + 2;     // 9007199254740992  <- wrong!

9007199254740991n + 2n;   // 9007199254740993n <- correct
typeof 10n;               // "bigint"
BigInt(50);               // 50n
```

- Add **n** at the end of a number, or use `BigInt()`
- Only whole numbers - no decimals (`5n / 2n` gives `2n`)
- Can't mix with normal numbers

```js
10n + 5;          // TypeError
10n + BigInt(5);  // 15n
10n == 10;        // true  (=== gives false)
```

---
[← Data Types](../level-01-javascript-basics/05-data-types.md) | [Level 1 index](README.md) | [All levels](../README.md) | [typeof →](../level-01-javascript-basics/07-typeof.md)
