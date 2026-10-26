# pipe

*Connect a readable to a writable*

```js
const fs = require("fs");

// copy a file using streams
fs.createReadStream("input.txt")
  .pipe(fs.createWriteStream("output.txt"));
```

```js
// zip a file
const zlib = require("zlib");

fs.createReadStream("input.txt")
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream("input.txt.gz"));
```

> pipe = a water pipe : data flows from one end to the other.

---
[← Reading with Streams](../level-05-buffers-streams/03-reading-with-streams.md) | [Level 5 index](README.md) | [All levels](../README.md) | [Practice Set 5 →](../level-05-buffers-streams/05-practice-set-5.md)
