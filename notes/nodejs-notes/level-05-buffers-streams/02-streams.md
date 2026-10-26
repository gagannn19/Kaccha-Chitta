# Streams

*Read / write data in small pieces (chunks)*

**Problem :** `readFile` loads the **whole** 2 GB file into RAM. 💥

**Stream :** reads it **chunk by chunk** like watching a YouTube video while it loads.

**4 types :**

| Type | Meaning | Example |
|---|---|---|
| Readable | read data | `fs.createReadStream` |
| Writable | write data | `fs.createWriteStream`, `res` |
| Duplex | both | network socket |
| Transform | change data while passing | zip (`zlib`) |

---
[← Buffer](../level-05-buffers-streams/01-buffer.md) | [Level 5 index](README.md) | [All levels](../README.md) | [Reading with Streams →](../level-05-buffers-streams/03-reading-with-streams.md)
