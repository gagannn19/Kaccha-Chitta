# useFetch

*Write the fetch logic once, use everywhere*

```js
export function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then(setData)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
}
// const { data, loading, error } = useFetch("/api/users");
```

---
[← What is a Custom Hook?](../level-07-custom-hooks/02-what-is-a-custom-hook.md) | [Level 7 index](README.md) | [All levels](../README.md) | [useLocalStorage →](../level-07-custom-hooks/04-uselocalstorage.md)
