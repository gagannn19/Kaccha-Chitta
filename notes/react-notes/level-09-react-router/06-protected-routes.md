# Protected Routes

*Only logged-in users can enter*

```jsx
function ProtectedRoute({ children }) {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" replace />;
  return children;
}

<Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>
```

---
[← Nested Routes & Outlet](../level-09-react-router/05-nested-routes-outlet.md) | [Level 9 index](README.md) | [All levels](../README.md) | [Query Params →](../level-09-react-router/07-query-params.md)
