# Arrays

*An ordered list of values*

```js
const nums = [10, 20, 30];
nums[0];          // 10
nums.length;      // 3
nums.push(40);    // add at end      [10, 20, 30, 40]
nums.pop();       // remove from end [10, 20, 30]
nums.unshift(5);  // add at start    [5, 10, 20, 30]
nums.shift();     // remove start    [10, 20, 30]
nums.includes(20);// true
nums.indexOf(30); // 2
```

## slice vs splice

*The most confused pair*

```js
const a = [1, 2, 3, 4, 5];

a.slice(1, 3);     // [2, 3]   copy from index 1 to 3 (3 not included)
console.log(a);    // [1, 2, 3, 4, 5]  original safe

a.splice(1, 2);    // [2, 3]   removes 2 items from index 1
console.log(a);    // [1, 4, 5]        original CHANGED

a.splice(1, 0, 9); // insert 9 at index 1  -> [1, 9, 4, 5]
```

> **Remember :** sLice = Look (copy).  sPlice = sPoil (changes the array).

## More Array Methods

```js
[3, 1, 2].sort();               // [1, 2, 3]
[10, 9, 100].sort();            // [10, 100, 9]  <- sorts as strings!
[10, 9, 100].sort((a, b) => a - b); // [9, 10, 100]
[1, 2].concat([3]);             // [1, 2, 3]
["a", "b"].join("-");           // "a-b"
[1, 2, 3].reverse();            // [3, 2, 1]
[1, [2, [3]]].flat(Infinity);   // [1, 2, 3]
```

- **sort()** → Sorts the array **in place** (changes original). By default it compares items as strings, so pass `(a, b) => a - b` for numbers (`b - a` for descending).
- **concat()** → Joins arrays and returns a **new** array. Original stays safe.
- **join(sep)** → Turns the array into a **string**, putting `sep` between items (default is `","`).
- **reverse()** → Reverses the array **in place** (changes original).
- **flat(depth)** → Pulls nested arrays up into one array. Default depth is 1, `Infinity` flattens everything.

> **Coming up :** map, filter, reduce, find, some, every come in Level 6.

---
[← Arrow Functions](../level-02-functions-arrays-objects/02-arrow-functions.md) | [Level 2 index](README.md) | [All levels](../README.md) | [Objects →](../level-02-functions-arrays-objects/04-objects.md)
