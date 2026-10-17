# setTimeout + Closure

*The famous interview question*

```js
for (var i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), i * 1000);
}
// 4 4 4
```

```js
for (let i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), i * 1000);
}
// 1 2 3
```

**var : ONE i**

| Memory | Value |
|---|---|
| i | 1 → 2 → 3 → 4 |

*Code :* all 3 callbacks point here

**let : NEW i every round**

| Memory | Value |
|---|---|
| i (round 1) | 1 |
| i (round 2) | 2 |
| i (round 3) | 3 |

*Code :* each callback has its own

---
[← Closure : Data Privacy](../level-05-functions-deep-dive/07-closure-data-privacy.md) | [Level 5 index](README.md) | [All levels](../README.md) | [Fix it with var →](../level-05-functions-deep-dive/09-fix-it-with-var.md)
