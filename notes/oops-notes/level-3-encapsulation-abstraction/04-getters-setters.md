# Getters & Setters

<sub>Level 3 : Encapsulation & Abstraction</sub>

> **Easy definition:** getters and setters give **controlled access to a property**. A **getter** (`get`) runs when you **read** the property; a **setter** (`set`) runs when you **change** it. Outside code still uses normal property syntax.

```text
          #name (private)
               ↓
      ┌────────┴────────┐
   get name()        set name(v)
      ↓                  ↓
  user.name        user.name = "Rahul"
   (read)          (change, with checks)
```

```js
class User {
  #name;
  constructor(name) { this.#name = name; }

  get name() {                        // runs on: user.name
    return this.#name;
  }
  set name(value) {                   // runs on: user.name = "..."
    if (value.length < 3) { console.log("Name too short"); return; }
    this.#name = value;
  }
}

const user = new User("Gagan");
console.log(user.name);     // getter (no brackets!)
user.name = "Rahul";        // setter
console.log(user.name);
user.name = "Al";           // setter rejects it
console.log(user.name);
```
**Output:**
```
Gagan
Rahul
Name too short
Rahul
```
> 💡 Name the getter/setter like the property (`get name()`, `set name()`), not `get getName()`. Then using it reads naturally: `user.name`, `user.name = "x"`.

## Computed (derived) properties

A getter can **calculate** a value instead of storing it:

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

## You don't need both

| You write | Result from outside |
|---|---|
| getter only | **read-only** property (assigning is ignored, or a `TypeError` in strict mode) |
| setter only | write-only (rare) |
| both | read and change, with control |

## Common mistake: infinite loop

```js
class Bad {
  set name(v) { this.name = v; }      // calls the setter again... and again...
}
try { new Bad().name = "x"; } catch (e) { console.log(e.constructor.name); }
```
**Output:**
```
RangeError
```
Store the value in a **different** field (`#name` or `_name`).

Getters/setters also work in object literals: `const p = { first: "Gagan", last: "Sharma", get fullName() { return `${this.first} ${this.last}`; } };`

## 🧠 Interview answer

> **"Getters and setters provide controlled access to a property. A getter runs when the property is read and a setter runs when it's assigned, so we can validate values, compute derived values, or make a property read-only, while callers still use simple property syntax. They're often used together with private fields for encapsulation."**

## 🎯 Memory trick

> **Getter = reading the display 👀, setter = pressing the button with a safety check ✅.**

---
[← Access Modifiers](03-access-modifiers.md) · [Level 3](README.md) · [Home](../README.md) · [Abstraction →](05-abstraction.md)
