# Reading with Streams

*Process one chunk at a time*

```js
const fs = require("fs");

const stream = fs.createReadStream("big.txt", "utf-8");

stream.on("data", (chunk) => {
  console.log("Got chunk:", chunk.length);
});

stream.on("end", () => console.log("Finished!"));
stream.on("error", (err) => console.log(err));
```

- `data` → a new chunk arrived
- `end` → no more data
- Default chunk size = **64 KB**

---
[← Streams](../level-05-buffers-streams/02-streams.md) | [Level 5 index](README.md) | [All levels](../README.md) | [pipe →](../level-05-buffers-streams/04-pipe.md)
