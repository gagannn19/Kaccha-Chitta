# How a Closure Forms

*Step by step, using the execution context (EC) from Level 3*

```js
function outer() {
  let count = 0;
  function inner() {
    count++;
    console.log(count);
  }
  return inner;
}
const fn = outer();
fn();   // 1
fn();   // 2
```

## Step 1 : Global EC - Memory Creation

```text
             Global EC
┌──────────────────────┬──────────────────┐
│ Memory               │ Code             │
├──────────────────────┼──────────────────┤
│ outer : { code }     │ nothing runs yet │
│ fn    : (not ready)  │                  │
└──────────────────────┴──────────────────┘
```

- JS just reserves memory. `fn` is `const`, so it is not ready yet

## Step 2 : outer() is called → new EC

```text
             outer() EC
┌──────────────────────┬──────────────────┐
│ Memory               │ Code             │
├──────────────────────┼──────────────────┤
│ count : 0            │ count = 0        │
│ inner : { code }     │ return inner     │
└──────────────────────┴──────────────────┘

CALL STACK :  [ outer() ]
              [  GEC    ]
```

- `inner` is born **inside** outer, so it can see `count`

## Step 3 : outer() returns → its EC is deleted

```text
CALL STACK :  [  GEC  ]        outer() EC is gone ❌

             Global EC
┌──────────────────────────────┐
│ outer : { code }             │
│ fn    : inner  🎒            │
│              └─ count : 0    │  ← backpack (closure)
└──────────────────────────────┘
```

- outer's box is deleted, **but** `inner` packed `count` in its **backpack** before leaving
- So `count` is **not** thrown away (not garbage collected)

## Step 4 : fn() runs → count becomes 1

```text
             fn() EC
┌──────────────────────┬──────────────────┐
│ Memory               │ Code             │
├──────────────────────┼──────────────────┤
│ (empty)              │ count++          │
│                      │ log → 1          │
└──────────────────────┴──────────────────┘
        │
        │ "count?" not here...
        ▼
   🎒 backpack : count  0 → 1  ✅ found
```

- JS first looks in fn's own memory. Not found → it looks in the **backpack**

## Step 5 : fn() runs again → count becomes 2

```text
   🎒 backpack : count  1 → 2
```

- Same backpack, same `count`. That's why it **remembers** 1 and goes to 2

> **Remember :** A closure = function + its backpack of outer variables. The outer EC dies, the backpack lives.

---
[← Closures](../level-05-functions-deep-dive/05-closures.md) | [Level 5 index](README.md) | [All levels](../README.md) | [Closure : Data Privacy →](../level-05-functions-deep-dive/07-closure-data-privacy.md)
