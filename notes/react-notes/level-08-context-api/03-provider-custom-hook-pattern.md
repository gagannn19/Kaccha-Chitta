# Provider + Custom Hook Pattern

*The clean way used in real projects*

```jsx
const AuthContext = createContext(undefined);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const login = (data) => setUser(data);
  const logout = () => setUser(null);
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (ctx === undefined) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
}
```

---
[← Using Context : 3 Steps](../level-08-context-api/02-using-context-3-steps.md) | [Level 8 index](README.md) | [All levels](../README.md) | [Context : Things to Know →](../level-08-context-api/04-context-things-to-know.md)
