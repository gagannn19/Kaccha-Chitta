# useDebounce

*Debouncing from JS Level 10 - now as a hook*

```js
export function useDebounce(value, delay = 500) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);      // each keystroke cancels the old timer
  }, [value, delay]);

  return debounced;
}

const [query, setQuery] = useState("");
const debouncedQuery = useDebounce(query, 500);
useEffect(() => { if (debouncedQuery) search(debouncedQuery); }, [debouncedQuery]);
```

---
[← useLocalStorage](../level-07-custom-hooks/04-uselocalstorage.md) | [Level 7 index](README.md) | [All levels](../README.md) | [More Custom Hooks →](../level-07-custom-hooks/06-more-custom-hooks.md)
