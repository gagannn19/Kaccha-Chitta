# 🌳 Virtual DOM

> 📝 **Virtual DOM** = a **light copy** of the real page, kept in JavaScript.

## 🔄 How React updates the screen

**1️⃣ Before the click** (old virtual DOM)

```
div
├── h1
├── p : count 0
└── button
```

**2️⃣ After the click** (new virtual DOM)

```
div
├── h1
├── p : count 1   ⬅️ changed!
└── button
```

**3️⃣ React compares them** 🔍 → this is called **Diffing**

**4️⃣ Only the `p` is updated** on the real page(real DOM) ✅ (`h1` and `button` are not touched)

## 🤷 Why?

> 🐢 Changing the **real page** is **slow**.
> ⚡ Comparing two **JS copies** is **fast**.
>
> So React finds the difference first, then changes only that part.

> 🔍 Like **spot the difference**: find what changed, fix just that, not the whole picture.

---
[← SPA - Single Page Application](../level-01-react-basics/03-spa-single-page-application.md) | [Level 1 index](README.md) | [All levels](../README.md) | [Setup with Vite →](../level-01-react-basics/05-setup-with-vite.md)
