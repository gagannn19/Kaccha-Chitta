# 🤔 Why React?

*The problem with plain JavaScript (vanilla DOM)*

> 🍦 **Vanilla JavaScript** → plain JavaScript on its own, with **no** extra library or framework (no React, Angular, jQuery).

## 😩 Vanilla JS → you update the screen by hand

```js
let count = 0;
btn.addEventListener("click", () => {
  count++;
  span.innerText = count;     // don't forget!
  badge.innerText = count;    // and this one!
});
```

> ⚠️ Every place that shows `count` must be updated **by you**. Miss one → the screen shows old data. 🐛

## 😎 React → change the data, the screen updates itself

```jsx
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}
```

> ✅ You only call `setCount`. React updates **every** place that uses `count`.

> 💡 **Big idea:** **UI = f(state)**
> - **State** = the data your app has right now (e.g. `count = 5`)
> - **f** = your component, it turns that data into what you see
> - **UI** = what shows on the screen
>
> So the screen always shows the **current data**. Change the data → React updates the screen for you. You never touch the DOM yourself.
>
> 🌡️ Like a **thermometer**: when the temperature (state) changes, the reading (UI) changes on its own.

---
[← What is React?](../level-01-react-basics/01-what-is-react.md) | [Level 1 index](README.md) | [All levels](../README.md) | [SPA - Single Page Application →](../level-01-react-basics/03-spa-single-page-application.md)
