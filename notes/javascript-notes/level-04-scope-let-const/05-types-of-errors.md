# Types of Errors

| Error | Meaning in one line |
|---|---|
| 📝 **SyntaxError** | code is written wrong |
| 🔍 **ReferenceError** | variable can't be found / used yet |
| 🚫 **TypeError** | wrong use of a value |
| 📏 **RangeError** | value is out of allowed range |

## 1. SyntaxError

*JS can't even read the code, so **nothing runs** - not even line 1*

```js
console.log("hi");   // never prints
let a = 1;
let a = 2;           // SyntaxError: Identifier 'a' has already been declared
```

```js
const b;             // SyntaxError: Missing initializer in const declaration
```

## 2. ReferenceError

*The variable doesn't exist, or is still locked in the TDZ*

```js
console.log(x);      // ReferenceError: x is not defined
```

```js
console.log(y);      // ReferenceError: Cannot access 'y' before initialization
let y = 5;
```

## 3. TypeError

*The variable exists, but you're using it the wrong way*

```js
const c = 1;
c = 2;               // TypeError: Assignment to constant variable.
```

```js
let n = 5;
n();                 // TypeError: n is not a function
```

```js
let user = null;
user.name;           // TypeError: Cannot read properties of null (reading 'name')
```

## 4. RangeError

*The value is too big, too small, or goes on forever*

```js
new Array(-1);       // RangeError: Invalid array length
```

```js
function loop() {
  loop();            // calls itself forever
}
loop();              // RangeError: Maximum call stack size exceeded
```

> **Note :** SyntaxError stops the **whole file** before it starts. The other 3 happen **while running**, so lines before the error still run.

> **Remember :** not found → ReferenceError · wrong use → TypeError · written wrong → SyntaxError · too big/small → RangeError

---
[← let vs const vs var](../level-04-scope-let-const/04-let-vs-const-vs-var.md) | [Level 4 index](README.md) | [All levels](../README.md) | [Shadowing →](../level-04-scope-let-const/06-shadowing.md)
