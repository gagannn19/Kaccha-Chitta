# How await Pauses

*The function steps out of the call stack while waiting*

```js
async function handle() {
  console.log("A");
  await delay(2000);       // handle() is suspended, stack is free
  console.log("C");        // resumes later as a microtask
}
handle();
console.log("B");
// A  B  C
```

```
CALL STACK (top first)
Step 1 : handle() starts
   handle() | GEC
Step 2 : await - steps out
   GEC
Step 3 : log B, GEC done
   (empty)
Step 4 : 2s later resumes
   handle()
```

---
[← async / await](../level-08-asynchronous-javascript/14-async-await.md) | [Level 8 index](README.md) | [All levels](../README.md) | [fetch API →](../level-08-asynchronous-javascript/16-fetch-api.md)
