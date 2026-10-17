# Fetching Data

*The loading - data - error pattern*

```jsx
function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load");
        return res.json();
      })
      .then((data) => setUsers(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error}</p>;
  return users.map((u) => <p key={u.id}>{u.name}</p>);
}
```

---
[← Component Lifecycle](../level-05-useeffect/05-component-lifecycle.md) | [Level 5 index](README.md) | [All levels](../README.md) | [async inside useEffect →](../level-05-useeffect/07-async-inside-useeffect.md)
