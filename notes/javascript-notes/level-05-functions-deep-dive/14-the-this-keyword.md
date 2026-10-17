# The this Keyword

*this = WHO is calling the function*

| How it's called | this is |
|---|---|
| `obj.method()` | obj (the thing before the dot) |
| `fn()` normal call | window (undefined in strict mode) |
| Arrow function | this of the outer scope |
| `new Fn()` | the new object |
| `fn.call(obj)` | obj (you choose) |
| Event listener (normal fn) | the element clicked |

---
[← IIFE](../level-05-functions-deep-dive/13-iife.md) | [Level 5 index](README.md) | [All levels](../README.md) | [this : Normal vs Arrow →](../level-05-functions-deep-dive/15-this-normal-vs-arrow.md)
