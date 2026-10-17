# The Dependency Array

*Decides WHEN the effect runs*

```js
useEffect(() => { ... });            // 1. no array  -> after EVERY render

useEffect(() => { ... }, []);        // 2. empty     -> only ONCE, after first render (mount)

useEffect(() => { ... }, [id]);      // 3. [id]      -> on mount + whenever id changes
```

> **Rule :** Put every state / prop you USE inside the effect into the array. ESLint will remind you.

---
[← useEffect](../level-05-useeffect/02-useeffect.md) | [Level 5 index](README.md) | [All levels](../README.md) | [Cleanup Function →](../level-05-useeffect/04-cleanup-function.md)
