# useState

*A variable React remembers between renders*

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  //      value   setter     initial value

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
```

> **Hook :** Hooks = special functions starting with 'use' that let components use React features.

---
[← Why not a normal variable?](../level-03-state-events/01-why-not-a-normal-variable.md) | [Level 3 index](README.md) | [All levels](../README.md) | [What Happens on setState? →](../level-03-state-events/03-what-happens-on-setstate.md)
