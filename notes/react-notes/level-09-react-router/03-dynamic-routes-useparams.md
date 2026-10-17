# Dynamic Routes & useParams

*One route for every product*

```jsx
<Route path="/products/:id" element={<ProductDetails />} />

function ProductDetails() {
  const { id } = useParams();             // "/products/42" -> id = "42"
  const { data, loading } = useFetch(`/api/products/${id}`);
  if (loading) return <p>Loading...</p>;
  return <h1>{data.title}</h1>;
}
```

> **Careful :** useParams always gives strings - use Number(id) if you need a number.

---
[← Link & NavLink](../level-09-react-router/02-link-navlink.md) | [Level 9 index](README.md) | [All levels](../README.md) | [useNavigate →](../level-09-react-router/04-usenavigate.md)
