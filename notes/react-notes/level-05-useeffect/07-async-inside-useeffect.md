# async inside useEffect

*The effect itself can't be async - make a function inside*

```js
useEffect(() => {
  const controller = new AbortController();

  async function load() {
    try {
      const res = await fetch(`/api/users/${id}`, { signal: controller.signal });
      setUser(await res.json());
    } catch (err) {
      if (err.name !== "AbortError") setError(err.message);
    }
  }
  load();

  return () => controller.abort();   // cancel old request if id changes
}, [id]);
```

> **Why abort :** Typing fast changes id quickly - old slow responses could overwrite new ones (race condition). Abort fixes it.

---
[← Fetching Data](../level-05-useeffect/06-fetching-data.md) | [Level 5 index](README.md) | [All levels](../README.md) | [Common useEffect Mistakes →](../level-05-useeffect/08-common-useeffect-mistakes.md)
