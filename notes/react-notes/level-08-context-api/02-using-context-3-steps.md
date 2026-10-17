# Using Context : 3 Steps

```jsx
// 1. Create
const ThemeContext = createContext("light");

// 2. Provide - wrap the part of the tree that needs it
function App() {
  const [theme, setTheme] = useState("dark");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Navbar />
    </ThemeContext.Provider>
  );
}

// 3. Consume - in any child, at any depth
function ThemeButton() {
  const { theme, setTheme } = useContext(ThemeContext);
  return <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>{theme}</button>;
}
```

---
[← The Problem : Prop Drilling](../level-08-context-api/01-the-problem-prop-drilling.md) | [Level 8 index](README.md) | [All levels](../README.md) | [Provider + Custom Hook Pattern →](../level-08-context-api/03-provider-custom-hook-pattern.md)
