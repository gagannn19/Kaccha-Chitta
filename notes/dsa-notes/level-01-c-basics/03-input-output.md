# Input & Output

```cpp
int age;
string name;
cin >> name >> age;            // reads words separated by space / newline
cout << name << " is " << age << "\n";

string line;
getline(cin, line);            // reads a full line with spaces

ios::sync_with_stdio(false);   // fast IO - write at the start of main
cin.tie(nullptr);
```

> **Speed :** '\n' is faster than endl, because endl also flushes the output every time.

---
[← First Program](../level-01-c-basics/02-first-program.md) | [Level 1 index](README.md) | [All levels](../README.md) | [Data Types →](../level-01-c-basics/04-data-types.md)
