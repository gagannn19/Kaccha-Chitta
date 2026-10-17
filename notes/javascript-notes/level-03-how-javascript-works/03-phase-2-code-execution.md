# Phase 2 : Code Execution

*Now the code runs line by line*

**Global EC**

| Memory | Value |
|---|---|
| n | 2 |
| square | { ... } |
| square2 | 4 |
| square4 | 16 |

*Code :* n = 2 / square(n) → new EC / square(4) → new EC

**square(n) EC**

| Memory | Value |
|---|---|
| num | 2 |
| ans | 4 |

*Code :* ans = 2 * 2 / return ans → 4

- Calling a function creates a **brand new EC** with its own 2 phases
- **return** sends the value back & that EC is **deleted**
- When all code finishes, the Global EC is deleted too

---
[← The 2 Phases](../level-03-how-javascript-works/02-the-2-phases.md) | [Level 3 index](README.md) | [All levels](../README.md) | [Call Stack →](../level-03-how-javascript-works/04-call-stack.md)
