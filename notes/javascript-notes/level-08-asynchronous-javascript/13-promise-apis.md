# Promise APIs

*Run many promises together*

| Method | Waits for | Result |
|---|---|---|
| **Promise.all** | all to succeed | array of values. Fails fast on first error |
| **Promise.allSettled** | all to finish | array of {status, value / reason} |
| **Promise.race** | first to settle | that value OR error |
| **Promise.any** | first to succeed | that value. AggregateError if all fail |

```js
const [user, posts] = await Promise.all([getUser(), getPosts()]);
```

---
[← Consuming a Promise](../level-08-asynchronous-javascript/12-consuming-a-promise.md) | [Level 8 index](README.md) | [All levels](../README.md) | [async / await →](../level-08-asynchronous-javascript/14-async-await.md)
