# More Custom Hooks

```js
export function useWindowSize() {
  const [size, setSize] = useState({ w: window.innerWidth, h: window.innerHeight });
  useEffect(() => {
    const onResize = () => setSize({ w: window.innerWidth, h: window.innerHeight });
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return size;
}

export function usePrevious(value) {
  const ref = useRef();
  useEffect(() => { ref.current = value; }, [value]);
  return ref.current;          // value from the LAST render
}
```

---
[← useDebounce](../level-07-custom-hooks/05-usedebounce.md) | [Level 7 index](README.md) | [All levels](../README.md) | [Build These →](../level-07-custom-hooks/07-build-these.md)
