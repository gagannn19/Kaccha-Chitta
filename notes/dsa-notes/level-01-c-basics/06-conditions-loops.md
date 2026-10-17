# Conditions & Loops

```cpp
if (marks >= 90) cout << "A";
else if (marks >= 60) cout << "B";
else cout << "C";

string res = (n % 2 == 0) ? "even" : "odd";

switch (day) {
    case 1: cout << "Mon"; break;
    case 2: cout << "Tue"; break;
    default: cout << "Other";
}
```

```cpp
for (int i = 0; i < n; i++) {
    cout << i << " ";
}

int i = 0;
while (i < n) { i++; }

do {
    cin >> x;
} while (x < 0);

// break -> exit loop
// continue -> skip this round
```

---
[← Operators & Type Casting](../level-01-c-basics/05-operators-type-casting.md) | [Level 1 index](README.md) | [All levels](../README.md) | [Practice Set 1 →](../level-01-c-basics/07-practice-set-1.md)
