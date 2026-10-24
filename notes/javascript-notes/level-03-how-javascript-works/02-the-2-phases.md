# The 2 Phases

*Every EC is created in 2 phases*

```js
var n = 2;
function square(num) {
  var ans = num * num;
  return ans;
}
var square2 = square(n);
var square4 = square(4);
```

1. **Memory Creation** - JS reserves memory for everything
2. **Code Execution** - JS runs the code line by line (next page)

## Phase 1 : Memory Creation

| Memory | Value |
|---|---|
| n | undefined |
| square | { whole code } |
| square2 | undefined |
| square4 | undefined |

*Code :* nothing runs yet

- JS scans the code first and reserves memory
- **var** variables get the placeholder **undefined**, functions get their **full code**
- **let / const** are registered too, but left **uninitialized** (see [Temporal Dead Zone](../level-03-how-javascript-works/06-temporal-dead-zone.md))

---
[← Execution Context](../level-03-how-javascript-works/01-execution-context.md) | [Level 3 index](README.md) | [All levels](../README.md) | [Phase 2 : Code Execution →](../level-03-how-javascript-works/03-phase-2-code-execution.md)
