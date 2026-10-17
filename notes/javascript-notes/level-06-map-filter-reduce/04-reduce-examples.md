# reduce Examples

```js
// max
[5, 1, 9, 2].reduce((max, c) => (c > max ? c : max), -Infinity);  // 9

// count users by age -> { 26: 2, 50: 1 }
users.reduce((acc, u) => {
  acc[u.age] = (acc[u.age] || 0) + 1;
  return acc;
}, {});

// first names of users under 30 (filter + map in one)
users.reduce((acc, u) => {
  if (u.age < 30) acc.push(u.firstName);
  return acc;
}, []);
```

---
[← reduce](../level-06-map-filter-reduce/03-reduce.md) | [Level 6 index](README.md) | [All levels](../README.md) | [find, some, every, forEach →](../level-06-map-filter-reduce/05-find-some-every-foreach.md)
