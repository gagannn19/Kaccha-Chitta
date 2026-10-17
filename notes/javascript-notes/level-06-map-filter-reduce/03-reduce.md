# reduce

*COMBINE all items into one value*

```js
const sum = [5, 1, 3].reduce((acc, curr) => acc + curr, 0);   // 9
```

| Round | acc | curr | returns |
|---|---|---|---|
| 1 | 0 (start) | 5 | 5 |
| 2 | 5 | 1 | 6 |
| 3 | 6 | 3 | `9` |

- **acc** = result so far, **curr** = current item, 2nd argument = starting value
- Always **return** the acc

---
[← filter](../level-06-map-filter-reduce/02-filter.md) | [Level 6 index](README.md) | [All levels](../README.md) | [reduce Examples →](../level-06-map-filter-reduce/04-reduce-examples.md)
