# Strings

```cpp
string s = "hello";
s.size();                 // 5          (same as s.length())
s[0];                     // 'h'
s += " world";            // concatenate
s.substr(0, 5);           // "hello"    (start, length)
s.find("world");          // 6          (string::npos if not found)
s.push_back('!');  s.pop_back();
reverse(s.begin(), s.end());
to_string(42);            // "42"
stoi("42");               // 42
for (char c : s) { if (isdigit(c)) ... }    // isalpha, isupper, tolower
```

---
[← Arrays](../level-02-functions-arrays-strings/03-arrays.md) | [Level 2 index](README.md) | [All levels](../README.md) | [Practice Set 2 →](../level-02-functions-arrays-strings/05-practice-set-2.md)
