# useRef for Values

*Stopwatch : store the interval id*

```jsx
function Stopwatch() {
  const [time, setTime] = useState(0);
  const timerRef = useRef(null);       // survives re-renders

  function start() {
    if (timerRef.current) return;      // already running
    timerRef.current = setInterval(() => setTime((t) => t + 1), 1000);
  }
  function stop() {
    clearInterval(timerRef.current);
    timerRef.current = null;
  }
  return (<><h1>{time}s</h1><button onClick={start}>Start</button>
            <button onClick={stop}>Stop</button></>);
}
```

---
[← useRef for DOM Elements](../level-06-useref-usereducer/02-useref-for-dom-elements.md) | [Level 6 index](README.md) | [All levels](../README.md) | [useReducer →](../level-06-useref-usereducer/04-usereducer.md)
