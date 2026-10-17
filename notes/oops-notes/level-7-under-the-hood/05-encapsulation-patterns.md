# Encapsulation Patterns in JavaScript

<sub>Level 7 : Under the Hood</sub>

`#private` is new (2022). JavaScript developers hid data for years using **closures**, and you'll still see these patterns everywhere (React hooks are closures too).

## 1. Closures + factory functions

A **closure** = a function that remembers the variables of the place where it was created, even after that outer function has finished.

```js
function createAccount() {
  let balance = 0;                       // private: only the inner functions can see it
  return {
    deposit(amt) { if (amt > 0) balance += amt; },
    getBalance() { return balance; },
  };
}

const acc = createAccount();
acc.deposit(500);
console.log(acc.getBalance(), acc.balance);   // 500 undefined
```
**Output:**
```
500 undefined
```
Every call to `createAccount()` makes a separate `balance`. No `this`, no `new`, so no "lost `this`" bugs.

## 2. Module pattern (IIFE)

An **IIFE** (Immediately Invoked Function Expression) runs once and returns only the public part. This was the "module" before ES modules existed.

```js
const Bank = (function () {            // IIFE runs once, its variables stay private
  let balance = 0;
  function log(msg) { console.log("[bank]", msg); }   // private helper

  return {                             // only this object is public
    deposit(amt) { balance += amt; log(`+${amt}`); },
    get balance() { return balance; },
  };
})();

Bank.deposit(100);
Bank.deposit(50);
console.log(Bank.balance);
```
**Output:**
```
[bank] +100
[bank] +50
150
```
Today **ES modules** do the same job: anything you don't `export` from a file is private to that file.

## 3. WeakMap for private data

```js
const _private = new WeakMap();        // object → its private data

class Person {
  constructor(name, salary) {
    this.name = name;
    _private.set(this, { salary });    // stored outside the object
  }
  getSalary() { return _private.get(this).salary; }
}

const p = new Person("Gagan", 50000);
console.log(p.getSalary(), p.salary, Object.keys(p));
```
**Output:**
```
50000 undefined [ 'name' ]
```
`WeakMap` keys are held weakly, so when `p` is garbage collected its private data goes too (no memory leak).

> `Symbol` keys (`const secret = Symbol()`) only *hide* a property from `Object.keys`/`JSON`; anyone can still find it with `Object.getOwnPropertySymbols()`. Not real privacy.

## 4. Property descriptors: `Object.defineProperty`

Each property has hidden settings: `writable`, `enumerable`, `configurable` (plus `value`, or `get`/`set`).

```js
const car = { brand: "Tata" };
Object.defineProperty(car, "vin", {
  value: "MH12AB1234",
  writable: false,      // can't change the value
  enumerable: false,    // hidden from Object.keys / for...in / JSON
  configurable: false,  // can't delete or redefine it
});

car.vin = "FAKE";       // ignored (TypeError in strict mode)
delete car.vin;         // ignored
console.log(car.vin, Object.keys(car), JSON.stringify(car));
console.log(Object.getOwnPropertyDescriptor(car, "brand"));
```
**Output:**
```
MH12AB1234 [ 'brand' ] {"brand":"Tata"}
{ value: 'Tata', writable: true, enumerable: true, configurable: true }
```
Normal properties are all `true`; `defineProperty` defaults are all `false`. (Vue 2's reactivity was built on `defineProperty` getters/setters; Vue 3 uses `Proxy`.)

## 5. Locking objects: freeze vs seal vs preventExtensions

```js
const f = Object.freeze({ a: 1, inner: { b: 2 } });
f.a = 100;          // ignored
f.c = 3;            // ignored
f.inner.b = 200;    // ✅ works! freeze is SHALLOW
console.log(f.a, f.c, f.inner.b);

const s = Object.seal({ a: 1 });
s.a = 2;            // ✅ change existing: allowed
s.b = 3;            // ❌ add: ignored
delete s.a;         // ❌ delete: ignored
console.log(s);

const p = Object.preventExtensions({ a: 1 });
p.b = 2;            // ❌ add: ignored
delete p.a;         // ✅ delete: allowed
console.log(p);

function deepFreeze(obj) {
  Object.values(obj).forEach(v => { if (typeof v === "object" && v !== null) deepFreeze(v); });
  return Object.freeze(obj);
}
const cfg = deepFreeze({ api: { url: "/v1" } });
cfg.api.url = "/hack";
console.log(cfg.api.url);
```
**Output:**
```
1 undefined 200
{ a: 2 }
{}
/v1
```

| | Add | Delete | Change value |
|---|---|---|---|
| `Object.preventExtensions` | ❌ | ✅ | ✅ |
| `Object.seal` | ❌ | ❌ | ✅ |
| `Object.freeze` | ❌ | ❌ | ❌ |

All three are **shallow**, and in strict mode (classes, modules) the blocked operations throw `TypeError` instead of failing silently. Check with `Object.isExtensible / isSealed / isFrozen`.

## 🧠 Interview answer

> **"Besides `#private` fields, JavaScript can hide data with closures: a factory function or IIFE keeps variables in its scope and returns only the methods that use them, which is the module pattern. A `WeakMap` can store private data per object without leaking memory. To lock objects we have `Object.preventExtensions`, `Object.seal` and `Object.freeze`, all shallow, and `Object.defineProperty` can make individual properties read-only or hidden."**

## 🎯 Memory trick

> **Closure = a backpack 🎒 the function carries with it. freeze ⊃ seal ⊃ preventExtensions (most locked → least locked).**

---
[← ES6 Classes Under the Hood](04-classes-under-the-hood.md) · [Level 7](README.md) · [Home](../README.md) · [Symbols & Extending Built-ins →](06-symbols-and-built-ins.md)
