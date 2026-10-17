# Functions

```cpp
int add(int a, int b) {        // return type, name, parameters
    return a + b;
}

void greet(string name = "Guest") {    // default argument
    cout << "Hi " << name << "\n";
}

int main() {
    cout << add(2, 3);         // 5
    greet();                   // Hi Guest
}
```

> **Rule :** A function must be declared BEFORE it is used (write it above main, or declare its prototype).

---
[← Practice Set 1](../level-01-c-basics/07-practice-set-1.md) | [Level 2 index](README.md) | [All levels](../README.md) | [Pass by Value vs Reference →](../level-02-functions-arrays-strings/02-pass-by-value-vs-reference.md)
