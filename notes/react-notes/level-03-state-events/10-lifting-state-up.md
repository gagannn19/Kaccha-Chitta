# Lifting State Up

*Two siblings need the same data? Move state to their parent*

```
Parent [ temp, setTemp ]
├── CelsiusInput ← temp, setTemp
└── FahrenheitInput ← temp, setTemp
```

- Siblings can't share state directly
- Keep state in the **closest common parent**
- Pass value + setter down as props

```jsx
function Parent() {
  const [temp, setTemp] = useState(0);
  return (<><Celsius temp={temp} onChange={setTemp} /><Fahrenheit temp={temp} /></>);
}
```

---
[← Common Events](../level-03-state-events/09-common-events.md) | [Level 3 index](README.md) | [All levels](../README.md) | [Derived State →](../level-03-state-events/11-derived-state.md)
