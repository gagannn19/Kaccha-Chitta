# Cleanup Function

*Undo what the effect did*

```jsx
function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);

    return () => clearInterval(id);    // cleanup
  }, []);

  return <h1>{time.toLocaleTimeString()}</h1>;
}
```

- Cleanup runs **before the effect runs again** and when the component is **removed**
- Without it, timers & listeners keep running → memory leaks (closures from JS Level 5!)

---
[← The Dependency Array](../level-05-useeffect/03-the-dependency-array.md) | [Level 5 index](README.md) | [All levels](../README.md) | [Component Lifecycle →](../level-05-useeffect/05-component-lifecycle.md)
