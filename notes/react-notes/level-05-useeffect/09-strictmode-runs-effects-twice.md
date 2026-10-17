# StrictMode Runs Effects Twice

*Only in development*

```jsx
<StrictMode>
  <App />
</StrictMode>
// In dev, React mounts -> unmounts -> mounts again
```

- This is on purpose - it finds effects that forget their **cleanup**
- Seeing 2 API calls in dev is normal. Production runs once

---
[← Common useEffect Mistakes](../level-05-useeffect/08-common-useeffect-mistakes.md) | [Level 5 index](README.md) | [All levels](../README.md) | [Build These →](../level-05-useeffect/10-build-these.md)
