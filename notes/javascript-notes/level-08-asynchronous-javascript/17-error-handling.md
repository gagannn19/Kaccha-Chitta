# Error Handling

```js
try {
  JSON.parse("{bad json}");
} catch (err) {
  console.log(err.name, err.message);   // SyntaxError ...
} finally {
  console.log("always runs");
}

throw new Error("Something went wrong");   // create your own error
```

---
[← fetch API](../level-08-asynchronous-javascript/16-fetch-api.md) | [Level 8 index](README.md) | [All levels](../README.md) | [Practice Set 8 →](../level-08-asynchronous-javascript/18-practice-set-8.md)
