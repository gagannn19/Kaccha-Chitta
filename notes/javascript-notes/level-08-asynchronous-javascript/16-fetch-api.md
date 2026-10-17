# fetch API

*Get data from a server*

```js
async function getUser() {
  try {
    const res = await fetch("https://api.github.com/users/gagannn19");
    if (!res.ok) throw new Error("HTTP " + res.status);
    const user = await res.json();      // body -> JS object
    console.log(user.name);
  } catch (err) {
    console.log("Failed:", err.message);
  }
}
```

> **Careful :** fetch only rejects on network failure. A 404 still resolves - so check res.ok.

---
[← How await Pauses](../level-08-asynchronous-javascript/15-how-await-pauses.md) | [Level 8 index](README.md) | [All levels](../README.md) | [Error Handling →](../level-08-asynchronous-javascript/17-error-handling.md)
