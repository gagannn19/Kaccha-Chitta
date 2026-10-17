# Common Events

```jsx
<button onClick={fn} />
<input onChange={(e) => setText(e.target.value)} />
<form onSubmit={(e) => { e.preventDefault(); save(); }} />
<div onMouseEnter={fn} onMouseLeave={fn} />
<input onKeyDown={(e) => e.key === "Enter" && search()} />
<input onFocus={fn} onBlur={fn} />
```

> **SyntheticEvent :** React wraps the browser event in a SyntheticEvent so it works the same in every browser.

---
[← Handling Events](../level-03-state-events/08-handling-events.md) | [Level 3 index](README.md) | [All levels](../README.md) | [Lifting State Up →](../level-03-state-events/10-lifting-state-up.md)
