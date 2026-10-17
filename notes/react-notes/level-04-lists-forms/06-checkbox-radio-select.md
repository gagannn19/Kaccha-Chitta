# Checkbox, Radio & Select

```jsx
<input type="checkbox" checked={agree}
  onChange={(e) => setAgree(e.target.checked)} />     // checked, not value

<input type="radio" name="plan" value="pro"
  checked={plan === "pro"} onChange={(e) => setPlan(e.target.value)} />

<select value={city} onChange={(e) => setCity(e.target.value)}>
  <option value="agra">Agra</option>
  <option value="delhi">Delhi</option>
</select>
```

---
[← Forms with Many Inputs](../level-04-lists-forms/05-forms-with-many-inputs.md) | [Level 4 index](README.md) | [All levels](../README.md) | [Form Validation →](../level-04-lists-forms/07-form-validation.md)
