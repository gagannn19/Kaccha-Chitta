# useNavigate

*Change page from code*

```js
function LoginForm() {
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    await login(form);
    navigate("/dashboard");                 // go after login
  }
  // navigate(-1)                           -> back
  // navigate("/login", { replace: true })  -> no back button entry
}
```

---
[← Dynamic Routes & useParams](../level-09-react-router/03-dynamic-routes-useparams.md) | [Level 9 index](README.md) | [All levels](../README.md) | [Nested Routes & Outlet →](../level-09-react-router/05-nested-routes-outlet.md)
