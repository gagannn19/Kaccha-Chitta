# Where Variables Live

*Where you write a variable decides which memory (environment) it goes into*

| Variable declaration | Environment |
|---|---|
| Top-level **var** | 🌍 **Global** (window in browser scripts) |
| Top-level **let / const** | 📜 **Script** |
| Variables **inside a function** | ⚙️ **Local** (that function's own memory) |
| **let / const** inside a { } **block** | 🧱 **Block** |

## One example, all 4

```js
var a = 1;          // Global
let b = 2;          // Script

function fn() {
  var c = 3;        // Local
  let d = 4;        // Local
  if (true) {
    let e = 5;      // Block
    var f = 6;      // Local  (var ignores the block!)
  }
}
fn();
```

```text
  Top level
┌───────────────────┐  ┌───────────────────┐
│ Global (window)   │  │ Script            │
│ a : 1             │  │ b : 2             │
└───────────────────┘  └───────────────────┘
            ▲ inner memories can look outward
┌─────────────────────────────────────────────┐
│ Local (fn)                                  │
│ c : 3      d : 4      f : 6                 │
│    ┌───────────────────────────────────┐    │
│    │ Block (if)                        │    │
│    │ e : 5                             │    │
│    └───────────────────────────────────┘    │
└─────────────────────────────────────────────┘
```

## 1. Top level : Global vs Script

*Top level = not inside any function or block*

```js
console.log(a);   // undefined
console.log(b);   // ReferenceError: Cannot access 'b' before initialization
var a = 1;
let b = 2;
```

| 🌍 Global (window) | Value after Phase 1 |
|---|---|
| a | undefined |

| 📜 Script | Value after Phase 1 |
|---|---|
| b | *uninitialized* (TDZ) |

- **var a** → goes on **window**, so `window.a` is `1`
- **let b** → goes to a **separate Script memory**, so `window.b` is `undefined`
- Both are hoisted, but let/const stay locked in the [TDZ](../level-03-how-javascript-works/06-temporal-dead-zone.md) until their line runs

## 2. Inside a function : Local

*var, let and const written directly inside a function → that function's **Local** memory*

- Created when the function is **called**, deleted when it **returns**
- So `c` and `d` can't be used outside `fn()`
- The function's own `{ }` makes **Local** memory, not Block memory

## 3. Inside a block : Block

*let / const inside `if`, `for` or a plain `{ }` → a **Block** memory*

- Created when JS **enters** the `{ }`, deleted when it **leaves**
- So `e` can't be used after the `if` ends → ReferenceError
- **var** inside a block does **not** go here - it skips the block (see `f`)

## var is function scoped

*var only stops at a **function** wall - { } blocks can't hold it*

```js
if (true) {
  var x = 10;   // block can't hold var
  let y = 20;
}
console.log(x); // 10
console.log(y); // ReferenceError

function outer() {
  function inner() {
    var z = 30; // function CAN hold var
  }
  inner();
  console.log(z); // ReferenceError
}
outer();
```

- `x` leaks out of the `if` block → lands in Global
- `z` stays inside `inner()` → `outer()` can't see it

| | Stopped by { } blocks? | Stopped by functions? |
|---|---|---|
| **var** | ❌ no | ✅ yes |
| **let / const** | ✅ yes | ✅ yes |

> **Note :** You can see all of this : put a breakpoint inside the `if` in Chrome DevTools and check the **Scope** panel - you'll find **Block**, **Local**, **Script** and **Global**.

> **Remember :** var → Global or Local only. let / const → Script, Local or Block, depending on where you write them.

---
[← Scope Chain](../level-04-scope-let-const/02-scope-chain.md) | [Level 4 index](README.md) | [All levels](../README.md) | [let vs const vs var →](../level-04-scope-let-const/04-let-vs-const-vs-var.md)
