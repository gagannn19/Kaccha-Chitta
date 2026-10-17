# Filter & Search a List

*State + filter() = live search*

```jsx
function SearchUsers({ users }) {
  const [query, setQuery] = useState("");

  const filtered = users.filter((u) =>
    u.name.toLowerCase().includes(query.toLowerCase())
  );                                   // derived - not stored in state

  return (
    <>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      {filtered.length === 0 && <p>No users found</p>}
      {filtered.map((u) => <p key={u.id}>{u.name}</p>)}
    </>
  );
}
```

---
[← Why Keys?](../level-04-lists-forms/02-why-keys.md) | [Level 4 index](README.md) | [All levels](../README.md) | [Controlled Inputs →](../level-04-lists-forms/04-controlled-inputs.md)
