title: JavaScript Cheatsheet

category: JavaScript
description: A quick reference guide for essential JavaScript commands, workflows, and examples for efficient web development.

---

## 🛠️ Commands

### **Basic Syntax**

| Command                          | Description                         |
| -------------------------------- | ----------------------------------- |
| `console.log("Hello, World!")` | Print output to the console         |
| `let x = 10;`                  | Declare a variable with block scope |
| `const PI = 3.14;`             | Declare a constant                  |
| `typeof x`                     | Check the type of a variable        |
| `prompt("Enter your name: ")`  | Get user input                      |

### **Operators**

| Operator | Description                          |
| -------- | ------------------------------------ |
| `+`    | Addition                             |
| `-`    | Subtraction                          |
| `*`    | Multiplication                       |
| `/`    | Division                             |
| `==`   | Loose equality (type conversion)     |
| `===`  | Strict equality (no type conversion) |

### **Control Flow**

| Command                            | Description           |
| ---------------------------------- | --------------------- |
| `if (x > 0) {}`                  | Conditional statement |
| `else if (x == 0) {}`            | Else-if condition     |
| `else {}`                        | Else condition        |
| `for (let i = 0; i < 5; i++) {}` | Loop through a range  |
| `while (x < 10) {}`              | While loop            |

### **Functions**

| Command                          | Description                    |
| -------------------------------- | ------------------------------ |
| `function myFunction() {}`     | Define a function              |
| `return x;`                    | Return a value from a function |
| `const add = (a, b) => a + b;` | Arrow function                 |

### **Arrays & Objects**

| Command                                 | Description                        |
| --------------------------------------- | ---------------------------------- |
| `let arr = [1, 2, 3];`                | Define an array                    |
| `arr.push(4);`                        | Add an item to an array            |
| `arr.pop();`                          | Remove the last item from an array |
| `let obj = {name: "Alice", age: 25};` | Define an object                   |
| `obj.name`                            | Access object properties           |

### **DOM Manipulation**

| Command                              | Description                |
| ------------------------------------ | -------------------------- |
| `document.getElementById("id")`    | Select an element by ID    |
| `document.querySelector(".class")` | Select an element by class |
| `element.innerHTML = "Hello";`     | Modify element content     |
| `element.style.color = "red";`     | Change element style       |

### **Event Handling**

| Command                                              | Description             |
| ---------------------------------------------------- | ----------------------- |
| `element.addEventListener("click", function() {})` | Add an event listener   |
| `element.onclick = function() {};`                 | Assign an event handler |

---

## 🔄 Workflows

### **Defining & Calling Functions**

1. Define a function:
   ```javascript
   function greet(name) {
       return `Hello, ${name}!`;
   }
   ```
2. Call the function:
   ```javascript
   console.log(greet("Alice"));
   ```

### **Working with Arrays**

1. Create an array:
   ```javascript
   let numbers = [1, 2, 3, 4, 5];
   ```
2. Append an item:
   ```javascript
   numbers.push(6);
   ```
3. Iterate through an array:
   ```javascript
   numbers.forEach(num => console.log(num));
   ```

### **Handling Events**

1. Select an element:
   ```javascript
   let button = document.getElementById("myButton");
   ```
2. Add an event listener:
   ```javascript
   button.addEventListener("click", () => alert("Button clicked!"));
   ```

---

## 💡 Examples

```javascript
// Print "Hello, World!"
console.log("Hello, World!");

// Loop through numbers
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// Change the text of an element
document.getElementById("title").innerHTML = "New Title";
```

---

## 📚 References

- **JavaScript Cheat Sheet**: [GeeksforGeeks](https://www.geeksforgeeks.org/javascript-cheat-sheet-a-basic-guide-to-javascript/)
- **JavaScript Quick Reference**: [QuickRef](https://quickref.me/javascript.html)
- **JavaScript Basics Guide**: [HTML CheatSheet](https://htmlcheatsheet.com/js/)

```
<!-- end list -->
```
