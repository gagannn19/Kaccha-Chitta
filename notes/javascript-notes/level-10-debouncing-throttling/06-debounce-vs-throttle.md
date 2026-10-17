# Debounce vs Throttle

|  | Debounce | Throttle |
|---|---|---|
| Runs | after user stops | regularly, at most once per limit |
| During non-stop events | never runs | runs every limit |
| Best for | search, auto-save | scroll, resize, mouse move |
| Key tool | clearTimeout | a lock flag |

> **Chain :** Both are closures - timer / locked live on between calls.

---
[← Throttle Code](../level-10-debouncing-throttling/05-throttle-code.md) | [Level 10 index](README.md) | [All levels](../README.md) | [Practice Set 9 →](../level-10-debouncing-throttling/07-practice-set-9.md)
