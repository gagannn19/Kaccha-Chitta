# useLocalStorage

*State that survives a page refresh*

```js
export function useLocalStorage(key, initial) {
  const [value, setValue] = useState(() => {        // lazy initial value
    const saved = localStorage.getItem(key);
    return saved !== null ? JSON.parse(saved) : initial;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
// const [theme, setTheme] = useLocalStorage("theme", "dark");
```

---
[← useFetch](../level-07-custom-hooks/03-usefetch.md) | [Level 7 index](README.md) | [All levels](../README.md) | [useDebounce →](../level-07-custom-hooks/05-usedebounce.md)
