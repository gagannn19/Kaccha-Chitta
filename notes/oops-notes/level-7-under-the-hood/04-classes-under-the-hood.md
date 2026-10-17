# ES6 Classes Under the Hood

<sub>Level 7 : Under the Hood</sub>

A JS `class` is **syntactic sugar** over a constructor function + prototype. But it adds real features too. Here is everything a class can contain:

```js
class User {
  static role = "guest";                    // static field (on User itself)
  static #created = 0;                      // private static
  #password;                                // private field
  name;                                     // public field (own property of each object)

  static {                                  // static block: runs once when the class is defined
    console.log("class User is ready");
  }
  constructor(name, password) {
    this.name = name;
    this.#password = password;
    User.#created++;
  }
  #hash(s) { return [...s].reverse().join(""); }       // private method
  check(pw) { return this.#hash(pw) === this.#hash(this.#password); }
  get initials() { return this.name[0].toUpperCase(); }   // getter
  set nickname(v) { this.name = v.trim(); }               // setter
  static get created() { return User.#created; }
  static isUser(x) { return #password in x; }             // brand check
}

const u = new User("gagan", "secret");
console.log(typeof User);
console.log(Object.getOwnPropertyNames(User.prototype));   // methods live on the prototype
console.log(Object.keys(u));                               // only public fields are own props
console.log(u.check("secret"), u.initials);
u.nickname = "  Ravi ";
console.log(u.name, User.created, User.isUser(u), User.isUser({}));
```
**Output:**
```
class User is ready
function
[ 'constructor', 'check', 'initials', 'nickname' ]
[ 'name' ]
true G
Ravi 1 true false
```

![extends creates two chains](../images/class-extends.svg)

## Where does each member go?

| Member | Stored on | Shared? |
|---|---|---|
| `method() {}`, `get x()`, `set x()` | `User.prototype` | ✅ one copy for all objects |
| `name;` / `name = "x";` (field) | each object | ❌ per object |
| `fn = () => {}` (arrow field) | each object | ❌ per object (but `this` is bound) |
| `static x`, `static m()` | `User` (the function itself) | ✅, and inherited by child classes |
| `#private` | hidden inside each object | not reachable from outside, not even by children |

## class vs constructor function: real differences

```js
try { new Early(); } catch (e) { console.log(e.constructor.name + ":", e.message); }
class Early {}                                  // classes are NOT usable before this line (TDZ)

try { Early(); } catch (e) { console.log(e.constructor.name + ":", e.message); }

function OldStyle() {}
OldStyle.prototype.m = function () {};
class NewStyle { m() {} }
console.log(Object.keys(OldStyle.prototype), "vs", Object.keys(NewStyle.prototype));  // class methods are non-enumerable
```
**Output:**
```
ReferenceError: Cannot access 'Early' before initialization
TypeError: Class constructor Early cannot be invoked without 'new'
[ 'm' ] vs []
```

| | `function` constructor | `class` |
|---|---|---|
| hoisting | fully hoisted | hoisted but in **TDZ** (can't use before the line) |
| call without `new` | runs (bug) | `TypeError` |
| strict mode | only if you write `"use strict"` | always |
| methods enumerable (`for...in`) | yes | no |
| `#private`, `static {}` blocks, fields | ❌ | ✅ |
| `super` | manual (`Parent.call(this)`) | ✅ built in |

## Getters & setters with validation

```js
class Temperature {
  #celsius = 0;
  get fahrenheit() { return this.#celsius * 9 / 5 + 32; }   // computed property
  set celsius(v) {
    if (typeof v !== "number") throw new TypeError("celsius must be a number");
    this.#celsius = v;
  }
  get celsius() { return this.#celsius; }
}

const t = new Temperature();
t.celsius = 100;                       // looks like a property, runs the setter
console.log(t.celsius, t.fahrenheit);
try { t.celsius = "hot"; } catch (e) { console.log(e.message); }
```
**Output:**
```
100 212
celsius must be a number
```
⚠️ A setter that does `this.celsius = v` (same name, no `#`) calls itself forever → `RangeError: Maximum call stack size exceeded`. Store the value in a different field (`#celsius` / `_celsius`).

## Other class facts

- **Class expressions** exist: `const Animal = class { ... };` (classes are values: pass them, return them, make mixins).
- `this.constructor.name` gives the class name at run time.
- `#x in obj` checks if `obj` was made by this class (works even with no getter).
- `private` in TypeScript ≠ `#private`: TS `private` is removed at compile time and can be bypassed with `obj["x"]`; `#x` is enforced by the JS engine.

## 🧠 Interview answer

> **"ES6 classes are mainly syntactic sugar over JavaScript's prototype system: the constructor becomes the function, methods are stored on `ClassName.prototype`, and static members on the class itself. Classes also add real features and safety: they must be called with `new`, are in the temporal dead zone before their declaration, always run in strict mode, have non-enumerable methods, and support `#private` members, fields and static blocks."**

## 🎯 Memory trick

> **class = a nicer wrapper 🎁 around function + prototype, with a few extra locks 🔒.**

---
[← Prototypes & the Prototype Chain](03-prototypes.md) · [Level 7](README.md) · [Home](../README.md) · [Encapsulation Patterns →](05-encapsulation-patterns.md)
