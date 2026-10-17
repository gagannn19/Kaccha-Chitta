# Symbols & Extending Built-ins

<sub>Level 7 : Under the Hood</sub>

> **Easy definition:** **well-known Symbols** (`Symbol.iterator`, `Symbol.toPrimitive`...) are special method names that let your own classes **plug into built-in JavaScript syntax** like `for...of`, spread, `+` and template strings.

(Mixins are covered in [Level 4](../level-4-inheritance/03-types-of-inheritance.md), composition in [Level 6](../level-6-advanced/01-composition-and-relationships.md).)

## Make your class work with `for...of` and spread

```js
class Playlist {
  #songs = [];
  add(song) { this.#songs.push(song); return this; }      // chaining
  *[Symbol.iterator]() { yield* this.#songs; }            // makes it work with for...of and ...
  get [Symbol.toStringTag]() { return "Playlist"; }       // custom Object.prototype.toString tag
  toJSON() { return { count: this.#songs.length }; }      // controls JSON.stringify
}

const p = new Playlist().add("Song A").add("Song B");
for (const s of p) console.log(s);
console.log([...p], String(p), JSON.stringify(p));
```
**Output:**
```
Song A
Song B
[ 'Song A', 'Song B' ] [object Playlist] {"count":2}
```

## Control conversion to number / string

```js
class Money {
  constructor(rs) { this.rs = rs; }
  [Symbol.toPrimitive](hint) {                 // hint: "number", "string" or "default"
    return hint === "string" ? `₹${this.rs}` : this.rs;
  }
}
const price = new Money(250);
console.log(price + 50, `${price}`, price * 2);
```
**Output:**
```
300 ₹250 500
```

| Hook | Used by |
|---|---|
| `[Symbol.iterator]()` | `for...of`, spread `[...x]`, `Array.from`, destructuring |
| `[Symbol.toPrimitive](hint)` / `valueOf` / `toString` | `+`, `<`, template strings |
| `[Symbol.hasInstance]` | `instanceof` |
| `[Symbol.dispose]()` | `using` declarations |
| `toJSON()` | `JSON.stringify` |

## Extending built-in classes

```js
class Stack extends Array {
  peek() { return this[this.length - 1]; }
}
const st = new Stack();
st.push(10, 20, 30);
console.log(st.peek(), st.length, Array.isArray(st));
console.log(st.map(x => x * 2) instanceof Stack);    // built-in methods return a Stack too
```
**Output:**
```
30 3 true
true
```
Most common real use, **custom errors**:
```js
class ValidationError extends Error {
  constructor(field) {
    super(`${field} is invalid`);
    this.name = "ValidationError";
    this.field = field;
  }
}

try {
  throw new ValidationError("email");
} catch (e) {
  if (e instanceof ValidationError) console.log(e.field, "→", e.message);
  console.log(String(e));
}
```
**Output:**
```
email → email is invalid
ValidationError: email is invalid
```

## 🧠 Interview answer

> **"Well-known symbols let objects customize how built-in language features treat them. For example, defining `[Symbol.iterator]` makes a class iterable with `for...of` and spread, and `[Symbol.toPrimitive]` controls conversion to numbers and strings. Built-in classes like `Array` and `Error` can be extended with `extends`; custom error classes are the most common real-world use."**

## 🎯 Memory trick

> **Symbols = sockets 🔌 in the language: give your class the right plug and `for...of`, `+` and `${}` just work.**

---
[← Encapsulation Patterns](05-encapsulation-patterns.md) · [Level 7](README.md) · [Home](../README.md) · [Level 7 : Interview & Revision Questions →](interview-questions.md)
