# async / await

*Write async code that reads like normal code*

```js
// with .then
function getData() {
  fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}
```

```js
// with async / await
async function getData() {
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
```

- **async** function always returns a promise
- **await** pauses THIS function (not the whole JS) until the promise settles

---
[← Promise APIs](../level-08-asynchronous-javascript/13-promise-apis.md) | [Level 8 index](README.md) | [All levels](../README.md) | [How await Pauses →](../level-08-asynchronous-javascript/15-how-await-pauses.md)
