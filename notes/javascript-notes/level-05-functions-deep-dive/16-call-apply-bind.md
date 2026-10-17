# call, apply & bind

*Choose this yourself*

```js
const p1 = { name: "Aman" };
function intro(city, age) {
  console.log(this.name, city, age);
}
intro.call(p1, "Agra", 22);     // run now, args one by one
intro.apply(p1, ["Agra", 22]);  // run now, args as an array
const later = intro.bind(p1, "Agra");  // returns a NEW function
later(22);                      // run later
```

> **Remember :** Call = Comma,  Apply = Array,  Bind = Back later.

---
[← this : Normal vs Arrow](../level-05-functions-deep-dive/15-this-normal-vs-arrow.md) | [Level 5 index](README.md) | [All levels](../README.md) | [Practice Set 5 →](../level-05-functions-deep-dive/17-practice-set-5.md)
