# let vs const vs var

|  | var | let | const |
|---|---|---|---|
| Scope | function | block | block |
| Re-declare | yes | no | no |
| Re-assign | yes | yes | no |
| Hoisted as | undefined | TDZ | TDZ |
| Attached to window | yes | no | no |

> **Note :** const object's properties CAN change : `const u = {}; u.a = 1;` works. Only re-assigning u fails.

---
[← Temporal Dead Zone](../level-04-scope-let-const/05-temporal-dead-zone.md) | [Level 4 index](README.md) | [All levels](../README.md) | [Types of Errors →](../level-04-scope-let-const/07-types-of-errors.md)
