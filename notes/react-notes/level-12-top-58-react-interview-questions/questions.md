# Level 12 : Top 58 React Interview Questions

## Q1. What is React?

A JavaScript library by Meta for building UIs from reusable components. It is declarative and uses a Virtual DOM to update the page efficiently.

## Q2. Library vs framework - which is React?

React is a library : it only handles the view layer. Frameworks (Angular, Next.js) also decide routing, data fetching and structure. You add React Router, etc. yourself.

## Q3. What is JSX?

A syntax extension that looks like HTML inside JS. It compiles to React.createElement() calls.

```jsx
const el = <h1 className="t">Hi</h1>;
// React.createElement("h1", { className: "t" }, "Hi")
```

## Q4. Why can't browsers read JSX?

JSX isn't valid JavaScript. A compiler (Babel / Vite / SWC) converts it to plain JS before it runs.

## Q5. What is the Virtual DOM?

A lightweight JS object copy of the real DOM. On every update React builds a new one, compares it with the old (diffing) and changes only the differences in the real DOM.

## Q6. What is reconciliation?

The process of diffing the old and new Virtual DOM trees and updating the real DOM. Different element types replace the subtree; same types update attributes; lists match by key.

## Q7. What is React Fiber?

The reconciliation engine since React 16. It splits rendering work into small units that can be paused, prioritised and resumed - enabling concurrent features.

## Q8. Functional vs class components?

Function components are plain functions that use hooks for state and effects. Class components extend React.Component and use this.state + lifecycle methods. New code uses functions.

## Q9. What are props?

Read-only inputs passed from parent to child, like function arguments.

```jsx
<UserCard name="Aman" age={22} />
function UserCard({ name, age }) { ... }
```

## Q10. Props vs state?

Props come from the parent and are read-only. State is owned by the component, can change with a setter, and changing it re-renders the component.

## Q11. What is the children prop?

Whatever is placed between a component's opening and closing tags.

```jsx
function Card({ children }) {
  return <div className="card">{children}</div>;
}
```

## Q12. What is one-way data flow?

Data flows down from parent to child through props. Children send data up only by calling functions passed as props. This makes updates predictable.

## Q13. What is prop drilling? How to avoid it?

Passing props through many levels that don't need them. Avoid with Context API, state libraries (Redux, Zustand) or component composition.

## Q14. What is useState?

A hook that adds state to a function component. It returns the current value and a setter that triggers a re-render.

```js
const [count, setCount] = useState(0);
setCount(count + 1);
```

## Q15. Why is setState asynchronous / batched?

React waits until the event handler finishes, then applies all updates in one re-render. Inside the handler you still see the old value (snapshot).

```js
setCount(count + 1);
console.log(count);   // old value
```

## Q16. What is a functional update?

Passing a function to the setter to get the latest state. Needed when the new state depends on the old one.

```js
setCount(prev => prev + 1);
setCount(prev => prev + 1);   // +2 total
```

## Q17. Why must state be immutable?

React compares old and new state by reference (===). Mutating the same object/array keeps the reference, so React may skip the re-render.

```js
setUser({ ...user, age: 23 });       // right
setTodos([...todos, t]);           // right
```

## Q18. What causes a component to re-render?

Its state changes, its parent re-renders, or a context it uses changes.

## Q19. What is lifting state up?

Moving shared state to the closest common parent so sibling components can use and update it through props.

## Q20. What is derived state? Why avoid duplicating it?

Values that can be calculated from existing state/props (totals, filtered lists). Storing them separately can get out of sync - calculate them during render instead.

## Q21. Why do lists need keys?

Keys let React identify which items were added, removed or moved, so it updates only those and keeps the right state with the right item.

## Q22. Why is index a bad key?

If items are inserted, removed or reordered, indexes shift - React attaches state/inputs to the wrong items. Use a stable unique id.

## Q23. Controlled vs uncontrolled components?

Controlled : value is in React state (value + onChange). Uncontrolled : the DOM keeps the value and you read it with a ref.

```jsx
<input value={v} onChange={e => setV(e.target.value)} />
<input defaultValue="x" ref={inputRef} />
```

## Q24. What is a SyntheticEvent?

React's cross-browser wrapper around the native event. It has the same interface (target, preventDefault, stopPropagation) everywhere.

## Q25. Why onClick={fn} and not onClick={fn()}?

fn() runs immediately during render and passes its return value. Pass the function itself, or wrap it in an arrow to send arguments.

```jsx
<button onClick={() => remove(id)}>X</button>
```

## Q26. What is conditional rendering?

Showing different JSX based on a condition, using if / early return, the ternary operator or &&.

```jsx
{isLoggedIn ? <Logout /> : <Login />}
{count > 0 && <Badge n={count} />}
```

## Q27. What are fragments?

<></> lets a component return multiple elements without adding an extra DOM node. Use <React.Fragment key> when a key is needed.

## Q28. What is useEffect?

A hook for side effects (fetching, timers, subscriptions, DOM changes). It runs after the render is painted.

## Q29. Explain the useEffect dependency array.

No array : runs after every render. [] : runs once after mount. [a, b] : runs on mount and whenever a or b changes.

```js
useEffect(() => { fetchUser(id); }, [id]);
```

## Q30. What is the cleanup function in useEffect?

The function returned from an effect. It runs before the effect re-runs and when the component unmounts - used to clear timers, listeners, subscriptions.

```js
useEffect(() => {
  const t = setInterval(tick, 1000);
  return () => clearInterval(t);
}, []);
```

## Q31. How do you fetch data in React?

In useEffect (or a library like TanStack Query). Track loading and error states and abort the request on cleanup.

```js
useEffect(() => {
  const c = new AbortController();
  fetch(url, { signal: c.signal }).then(r => r.json()).then(setData);
  return () => c.abort();
}, [url]);
```

## Q32. Why can't the useEffect callback be async?

An async function returns a promise, but useEffect expects either nothing or a cleanup function. Define an async function inside and call it.

## Q33. How do you cause an infinite loop with useEffect?

Setting state inside an effect with no dependency array (or with a dependency that the effect itself changes) - render, effect, setState, render...

## Q34. Why does useEffect run twice in development?

React.StrictMode mounts, unmounts and mounts again in development to reveal effects that are missing cleanup. It doesn't happen in production.

## Q35. useEffect vs useLayoutEffect?

useEffect runs after the browser paints. useLayoutEffect runs synchronously after DOM changes but before paint - use it only to measure layout and avoid a visible flicker.

## Q36. What is useRef?

A hook that returns a mutable { current } object that persists across renders. Changing it doesn't re-render. Used for DOM access and storing values like timer ids.

## Q37. useRef vs useState?

Both keep values between renders. Updating state re-renders the component; updating ref.current does not.

## Q38. What is useReducer?

An alternative to useState for complex state. A reducer(state, action) returns the new state; you call dispatch(action).

```js
const [state, dispatch] = useReducer(reducer, { count: 0 });
dispatch({ type: "increment" });
```

## Q39. What is the Context API?

A way to share data (theme, user, cart) with any component in a subtree without passing props through every level.

## Q40. How do you use Context?

createContext, wrap the tree with a Provider and a value, read it with useContext.

```jsx
const Ctx = createContext();
<Ctx.Provider value={user}><App /></Ctx.Provider>
const user = useContext(Ctx);
```

## Q41. Downsides of Context?

Every consumer re-renders when the value changes, so one big context can slow the app. Split contexts and memoize the value. For complex state, use Redux Toolkit or Zustand.

## Q42. What are the rules of hooks?

Call hooks only at the top level (not in conditions/loops) and only from React components or custom hooks - because React tracks hooks by call order.

## Q43. What is a custom hook?

A function starting with 'use' that calls other hooks to share stateful logic. Each component using it gets its own state.

```js
function useToggle(init = false) {
  const [on, setOn] = useState(init);
  return [on, () => setOn(p => !p)];
}
```

## Q44. Write a useDebounce hook.

Update the returned value only after the input stops changing for the given delay.

```js
function useDebounce(value, delay) {
  const [d, setD] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setD(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return d;
}
```

## Q45. What is React.memo?

A higher-order component that skips re-rendering a component when its props are shallowly equal to the previous props.

## Q46. useMemo vs useCallback?

useMemo caches the RESULT of a calculation. useCallback caches a FUNCTION reference. useCallback(fn, deps) equals useMemo(() => fn, deps).

```js
const total = useMemo(() => sum(items), [items]);
const onAdd = useCallback(() => add(id), [id]);
```

## Q47. When should you NOT use useMemo / useCallback?

For cheap calculations or functions not passed to memoized children. Memoization has its own cost - optimise only after measuring.

## Q48. What is lazy loading / code splitting?

Splitting the bundle so components load only when needed, using React.lazy and Suspense.

```jsx
const Admin = lazy(() => import("./Admin"));
<Suspense fallback={<Spinner />}><Admin /></Suspense>
```

## Q49. What is React Router? How do routes work?

A library for client-side routing in SPAs. BrowserRouter watches the URL, Routes picks the matching Route and renders its element without reloading the page.

## Q50. Link vs <a> tag?

<a href> makes the browser reload the page and lose state. <Link to> changes the URL using the History API and React renders the new route instantly.

## Q51. How do you read URL params and navigate in code?

useParams for route params, useSearchParams for ?query values, useNavigate to change the page.

```js
const { id } = useParams();
const navigate = useNavigate();
navigate("/login");
```

## Q52. How do you make a protected route?

A wrapper that checks auth and redirects with <Navigate> if the user isn't logged in.

```jsx
function Protected({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
}
```

## Q53. What are error boundaries?

Class components using getDerivedStateFromError / componentDidCatch to catch render errors in their children and show a fallback UI. They don't catch errors in event handlers or async code.

## Q54. What are portals?

createPortal renders children into a different DOM node (like document.body) while keeping them in the React tree - used for modals and tooltips.

## Q55. What is a Higher-Order Component (HOC)?

A function that takes a component and returns a new component with extra behaviour (like withAuth). Custom hooks usually replace HOCs today.

## Q56. What is StrictMode?

A development-only wrapper that double-invokes renders and effects to find impure code and missing cleanups. It renders nothing visible.

## Q57. How do you optimise a slow React app?

Measure with the Profiler; avoid unnecessary re-renders (memo, useMemo, useCallback, splitting state & context); lazy load routes; virtualize long lists; debounce inputs; use stable keys.

## Q58. What's new in React 18 and 19?

18 : concurrent rendering, automatic batching everywhere, useTransition, useDeferredValue, createRoot. 19 : Actions, useActionState, useOptimistic, use(), ref as a prop.

---
[← Build These](../level-11-under-the-hood-advanced/10-build-these.md) | [Level 12 index](README.md) | [All levels](../README.md)
