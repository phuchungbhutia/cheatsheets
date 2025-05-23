title: Python Cheatsheet

category: Python
description: A quick reference guide for essential Python commands, workflows, and examples for efficient programming.

---

## 🛠️ Commands

### **Basic Syntax**

| Command                        | Description                  |
| ------------------------------ | ---------------------------- |
| `print("Hello, World!")`     | Print output to the console  |
| `# This is a comment`        | Add a comment in Python      |
| `x = 10`                     | Assign a value to a variable |
| `type(x)`                    | Check the type of a variable |
| `input("Enter your name: ")` | Get user input               |

### **Operators**

| Operator | Description    |
| -------- | -------------- |
| `+`    | Addition       |
| `-`    | Subtraction    |
| `*`    | Multiplication |
| `/`    | Division       |
| `//`   | Floor division |
| `%`    | Modulus        |
| `**`   | Exponentiation |

### **Control Flow**

| Command                | Description           |
| ---------------------- | --------------------- |
| `if x > 0:`          | Conditional statement |
| `elif x == 0:`       | Else-if condition     |
| `else:`              | Else condition        |
| `for i in range(5):` | Loop through a range  |
| `while x < 10:`      | While loop            |

### **Functions**

| Command                | Description                    |
| ---------------------- | ------------------------------ |
| `def my_function():` | Define a function              |
| `return x`           | Return a value from a function |
| `lambda x: x * 2`    | Define an anonymous function   |

### **Data Structures**

| Command                     | Description         |
| --------------------------- | ------------------- |
| `list = [1, 2, 3]`        | Define a list       |
| `tuple = (1, 2, 3)`       | Define a tuple      |
| `set = {1, 2, 3}`         | Define a set        |
| `dict = {"key": "value"}` | Define a dictionary |

### **File Handling**

| Command                   | Description             |
| ------------------------- | ----------------------- |
| `open("file.txt", "r")` | Open a file for reading |
| `open("file.txt", "w")` | Open a file for writing |
| `file.read()`           | Read file contents      |
| `file.write("Hello")`   | Write to a file         |

### **Exception Handling**

| Command                    | Description                           |
| -------------------------- | ------------------------------------- |
| `try:`                   | Start a try block                     |
| `except Exception as e:` | Catch an exception                    |
| `finally:`               | Execute code regardless of exceptions |

---

## 🔄 Workflows

### **Defining & Calling Functions**

1. Define a function:
   ```python
   def greet(name):
       return f"Hello, {name}!"
   ```
2. Call the function:
   ```python
   print(greet("Alice"))
   ```

### **Working with Lists**

1. Create a list:
   ```python
   numbers = [1, 2, 3, 4, 5]
   ```
2. Append an item:
   ```python
   numbers.append(6)
   ```
3. Iterate through a list:
   ```python
   for num in numbers:
       print(num)
   ```

### **Handling Exceptions**

1. Try-except block:
   ```python
   try:
       x = int("hello")
   except ValueError:
       print("Invalid input!")
   ```

---

## 💡 Examples

```python
# Print "Hello, World!"
print("Hello, World!")

# Loop through numbers
for i in range(5):
    print(i)

# Read a file
with open("data.txt", "r") as file:
    content = file.read()
    print(content)
```

---

## 📚 References

- **Python Cheat Sheet**: [GeeksforGeeks](https://www.geeksforgeeks.org/python-cheat-sheet/)
- **Python Quick Reference**: [Python Cheatsheet](https://www.pythoncheatsheet.org/)
- **Python Basics Guide**: [AlmaBetter](https://www.almabetter.com/bytes/cheat-sheet/python)

```
<!-- end list -->
```
