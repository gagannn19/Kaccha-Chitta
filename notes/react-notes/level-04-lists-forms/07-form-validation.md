# Form Validation

```jsx
const [errors, setErrors] = useState({});

function validate() {
  const e = {};
  if (!form.name.trim()) e.name = "Name is required";
  if (!form.email.includes("@")) e.email = "Invalid email";
  if (form.password.length < 8) e.password = "Min 8 characters";
  setErrors(e);
  return Object.keys(e).length === 0;     // true = valid
}
function handleSubmit(ev) {
  ev.preventDefault();
  if (validate()) save(form);
}
// {errors.email && <p className="error">{errors.email}</p>}
```

---
[← Checkbox, Radio & Select](../level-04-lists-forms/06-checkbox-radio-select.md) | [Level 4 index](README.md) | [All levels](../README.md) | [Controlled vs Uncontrolled →](../level-04-lists-forms/08-controlled-vs-uncontrolled.md)
