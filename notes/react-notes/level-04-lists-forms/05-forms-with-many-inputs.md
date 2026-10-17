# Forms with Many Inputs

*One state object + one handler*

```jsx
function SignupForm() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));   // computed key
  }
  function handleSubmit(e) {
    e.preventDefault();                                // stop page reload
    console.log(form);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={form.name} onChange={handleChange} />
      <input name="email" value={form.email} onChange={handleChange} />
      <button type="submit">Sign up</button>
    </form>
  );
}
```

---
[← Controlled Inputs](../level-04-lists-forms/04-controlled-inputs.md) | [Level 4 index](README.md) | [All levels](../README.md) | [Checkbox, Radio & Select →](../level-04-lists-forms/06-checkbox-radio-select.md)
