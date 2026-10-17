# Controlled vs Uncontrolled

```jsx
// Controlled - React owns the value
const [v, setV] = useState("");
<input value={v}
  onChange={(e) => setV(e.target.value)} />
```

```jsx
// Uncontrolled - the DOM owns the value
const ref = useRef();
<input defaultValue="hi" ref={ref} />
// read it when needed
console.log(ref.current.value);
```

- **Controlled** - live validation, formatting, disable button. Most common
- **Uncontrolled** - simple forms, file inputs, less re-renders

---
[← Form Validation](../level-04-lists-forms/07-form-validation.md) | [Level 4 index](README.md) | [All levels](../README.md) | [Build These →](../level-04-lists-forms/09-build-these.md)
