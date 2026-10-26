# Interview Questions

*Try to answer first, then open*

<details><summary>1. What is Node.js?</summary>

A JavaScript **runtime** built on Chrome's V8 engine that runs JS outside the browser.
</details>

<details><summary>2. Is Node.js a language or a framework?</summary>

Neither. It's a **runtime environment**.
</details>

<details><summary>3. Is Node.js single-threaded?</summary>

Your JS runs on one thread, but libuv uses a **thread pool** and the OS for async work in the background.
</details>

<details><summary>4. What is the event loop?</summary>

A loop that keeps checking for finished async tasks and runs their callbacks, phase by phase (timers → poll → check → close).
</details>

<details><summary>5. Blocking vs non-blocking?</summary>

Blocking waits for a task to finish (`readFileSync`). Non-blocking starts the task and moves on, a callback runs later (`readFile`).
</details>

<details><summary>6. What is libuv?</summary>

A C library inside Node that gives the event loop, thread pool and async I/O.
</details>

<details><summary>7. process.nextTick vs setImmediate?</summary>

`nextTick` runs right after the current code, before promises & the event loop. `setImmediate` runs in the **check** phase of the loop.
</details>

<details><summary>8. CommonJS vs ES Modules?</summary>

CommonJS : `require` / `module.exports`, loads sync. ES Modules : `import` / `export`, needs `"type": "module"` or `.mjs`.
</details>

<details><summary>9. What is npm? What is npx?</summary>

npm installs and manages packages. npx runs a package without installing it.
</details>

<details><summary>10. dependencies vs devDependencies?</summary>

dependencies are needed to run the app. devDependencies are needed only during development (nodemon, testing tools).
</details>

<details><summary>11. Why package-lock.json?</summary>

Saves exact versions so every install gives the same code.
</details>

<details><summary>12. What is a Buffer?</summary>

A chunk of raw binary data (bytes).
</details>

<details><summary>13. What are streams? Types?</summary>

Handle data in chunks instead of all at once. Readable, Writable, Duplex, Transform.
</details>

<details><summary>14. What does pipe() do?</summary>

Connects a readable stream to a writable stream so data flows automatically.
</details>

<details><summary>15. What is EventEmitter?</summary>

A class from the `events` module to create, emit and listen to custom events (`on`, `emit`, `once`).
</details>

<details><summary>16. What is error-first callback?</summary>

Callback whose first argument is the error : `(err, data) => {}`.
</details>

<details><summary>17. How to keep secrets safe?</summary>

Store them in `.env`, read with `process.env`, add `.env` to `.gitignore`.
</details>

<details><summary>18. Why is Node good for APIs and real-time apps?</summary>

Non-blocking I/O handles many connections at once with little memory.
</details>

<details><summary>19. When is Node NOT a good choice?</summary>

Heavy CPU work (video editing, big calculations) blocks the single thread. Use worker threads or another language.
</details>

<details><summary>20. What is middleware?</summary>

A function that runs between the request and the response (used a lot in Express).
</details>

---
[← Practice Set 7](../level-07-real-world-node/05-practice-set-7.md) | [Level 8 index](README.md) | [All levels](../README.md)
