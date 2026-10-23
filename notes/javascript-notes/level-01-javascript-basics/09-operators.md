# Operators

*Symbols that do work on values*

```js
let sum = 5 + 2;
//  5 and 2 are operands, + is the operator
```

---

## 1. ➕ Arithmetic

*Do maths*

| Operator | Meaning | Example | Result |
|---|---|---|---|
| `+` | add | `5 + 2` | `7` |
| `-` | subtract | `5 - 2` | `3` |
| `*` | multiply | `5 * 2` | `10` |
| `/` | divide | `5 / 2` | `2.5` |
| `%` | remainder | `5 % 2` | `1` |
| `**` | power | `2 ** 3` | `8` |

```js
"5" + 2   // "52"  <- + with a string joins (concatenation)
"5" - 2   // 3     <- -, *, / turn the string into a number
"a" * 2   // NaN   <- can't turn "a" into a number
10 / 0    // Infinity
```

- `%` is handy to check even / odd → `n % 2 === 0` means even
- Maths order is the same as school: `**` first, then `* / %`, then `+ -`
- Use `( )` to control the order → `(2 + 3) * 4` is `20`, `2 + 3 * 4` is `14`

---

## 2. 📝 Assignment

*Store a value in a variable*

```js
let x = 10;
x += 5;   // x = x + 5   -> 15
x -= 3;   // x = x - 3   -> 12
x *= 2;   // x = x * 2   -> 24
x /= 4;   // x = x / 4   -> 6
x %= 4;   // x = x % 4   -> 2
x **= 3;  // x = x ** 3  -> 8
```

- `=` means **store**, not "equal to" (for comparing use `===`)
- `x += 5` is just a short way of writing `x = x + 5`

---

## 3. 🔼 Increment / Decrement

*Add or subtract 1*

```js
let a = 5;
a++;  // 6  (add 1)
a--;  // 5  (subtract 1)
```

**Prefix vs Postfix** - matters only when you use the value right away

```js
let b = 5;
console.log(b++);  // 5  <- postfix: gives old value, then adds 1 (b is now 6)

let c = 5;
console.log(++c);  // 6  <- prefix: adds 1 first, then gives new value
```

---

## 4. ⚖️ Comparison

*Always gives `true` / `false`*

| Operator | Meaning | Example | Result |
|---|---|---|---|
| `>` | greater than | `5 > 3` | `true` |
| `<` | less than | `5 < 3` | `false` |
| `>=` | greater or equal | `5 >= 5` | `true` |
| `<=` | less or equal | `5 <= 4` | `false` |
| `==` | equal (converts type) | `5 == "5"` | `true` |
| `===` | strict equal (no conversion) | `5 === "5"` | `false` |
| `!=` | not equal (converts type) | `5 != "5"` | `false` |
| `!==` | strict not equal | `5 !== "5"` | `true` |

```js
"apple" < "banana"  // true  <- strings compare letter by letter
"10" < "9"          // true  <- both strings, so "1" vs "9"
NaN === NaN         // false <- NaN is not equal to anything, even itself
```

> More on this in [== vs ===](../level-01-javascript-basics/10-vs.md)

---

## 5. 🔗 Logical

*Combine or flip conditions*

| Operator | Name | Rule | Example | Result |
|---|---|---|---|---|
| `&&` | AND | both must be true | `true && false` | `false` |
| `\|\|` | OR | any one true | `true \|\| false` | `true` |
| `!` | NOT | flips it | `!true` | `false` |

```js
let age = 20;
age > 18 && age < 60   // true  (both true)
age < 18 || age > 60   // false (none true)
!(age > 18)            // false
```

**Short-circuit** - JS stops as soon as it knows the answer, and returns that **value** (not always true / false)

```js
"Hi" && "Bye"   // "Bye"    <- && returns first falsy, or the last value
0 && "Bye"      // 0

"" || "Guest"   // "Guest"  <- || returns first truthy value
"Aman" || "Guest" // "Aman"
```

- `!!value` turns any value into `true` / `false` → `!!"hi"` is `true`

---

## 6. ❓ Nullish Coalescing `??`

*Default value only for `null` / `undefined`*

```js
null ?? "default"       // "default"
undefined ?? "default"  // "default"
0 ?? 10                 // 0   <- 0 is kept
0 || 10                 // 10  <- || treats 0 as falsy
```

- Use `??` when `0` or `""` are valid values you want to keep

---

## 7. 🔀 Ternary

*Short if / else in one line*

```js
// condition ? valueIfTrue : valueIfFalse
let age = 20;
let msg = age >= 18 ? "Adult" : "Minor";  // "Adult"
```

---

## 8. 🏷️ typeof

*Tells the type of a value* (see [typeof](../level-01-javascript-basics/07-typeof.md))

```js
typeof 42      // "number"
typeof "hi"    // "string"
```

---

> **Rule :** Always use `===` and `!==` to avoid surprises.

---
[← Truthy & Falsy](../level-01-javascript-basics/08-truthy-falsy.md) | [Level 1 index](README.md) | [All levels](../README.md) | [== vs === →](../level-01-javascript-basics/10-vs.md)
