# Polyfill of filter & reduce

```js
Array.prototype.myFilter = function (cb) {
  const res = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      res.push(this[i]);
    }
  }
  return res;
};
```

```js
Array.prototype.myReduce = function (cb, init) {
  let acc = init;
  let i = 0;
  if (acc === undefined) {
    acc = this[0];
    i = 1;
  }
  for (; i < this.length; i++) {
    acc = cb(acc, this[i], i, this);
  }
  return acc;
};
```

---
[← Polyfill of map](../level-06-map-filter-reduce/07-polyfill-of-map.md) | [Level 6 index](README.md) | [All levels](../README.md) | [When to use what? →](../level-06-map-filter-reduce/09-when-to-use-what.md)
