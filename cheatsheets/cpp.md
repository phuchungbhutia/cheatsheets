title: C++ Programming Cheatsheet

category: C++
description: A quick reference guide for essential C++ programming syntax, commands, workflows, and examples for efficient coding.

---

## 🛠️ Commands

### **Basic Syntax**

| Command                      | Description                           |
| ---------------------------- | ------------------------------------- |
| `#include <iostream>`      | Include standard input/output library |
| `using namespace std;`     | Use the standard namespace            |
| `int main() {}`            | Define the main function              |
| `cout << "Hello, World!";` | Print output to the console           |
| `return 0;`                | Return a value from the main function |

### **Variables & Data Types**

| Command                 | Description                                        |
| ----------------------- | -------------------------------------------------- |
| `int x = 10;`         | Declare an integer variable                        |
| `float y = 5.5;`      | Declare a floating-point variable                  |
| `char c = 'A';`       | Declare a character variable                       |
| `double d = 3.14159;` | Declare a double-precision floating-point variable |
| `bool flag = true;`   | Declare a boolean variable                         |

### **Operators**

| Operator | Description         |
| -------- | ------------------- |
| `+`    | Addition            |
| `-`    | Subtraction         |
| `*`    | Multiplication      |
| `/`    | Division            |
| `%`    | Modulus (remainder) |
| `==`   | Equal to            |
| `!=`   | Not equal to        |
| `&&`   | Logical AND         |
| `        |                     |

### **Control Flow**

| Command                            | Description           |
| ---------------------------------- | --------------------- |
| `if (x > 0) {}`                  | Conditional statement |
| `else if (x == 0) {}`            | Else-if condition     |
| `else {}`                        | Else condition        |
| `for (int i = 0; i < 5; i++) {}` | Loop through a range  |
| `while (x < 10) {}`              | While loop            |

### **Functions**

| Command                                     | Description                    |
| ------------------------------------------- | ------------------------------ |
| `void myFunction() {}`                    | Define a function              |
| `return x;`                               | Return a value from a function |
| `int add(int a, int b) { return a + b; }` | Function with parameters       |

### **Pointers & Memory Management**

| Command         | Description                               |
| --------------- | ----------------------------------------- |
| `int *ptr;`   | Declare a pointer                         |
| `ptr = &x;`   | Assign address of a variable to a pointer |
| `new int;`    | Allocate memory dynamically               |
| `delete ptr;` | Free allocated memory                     |

### **Object-Oriented Programming (OOP)**

| Command              | Description                      |
| -------------------- | -------------------------------- |
| `class MyClass {}` | Define a class                   |
| `public:`          | Define public access modifier    |
| `private:`         | Define private access modifier   |
| `protected:`       | Define protected access modifier |
| `MyClass obj;`     | Create an object of a class      |

### **File Handling**

| Command                        | Description             |
| ------------------------------ | ----------------------- |
| `ofstream file("file.txt");` | Open a file for writing |
| `file << "Hello, World!";`   | Write to a file         |
| `ifstream file("file.txt");` | Open a file for reading |
| `file.close();`              | Close a file            |

---

## 🔄 Workflows

### **Creating & Running a C++ Program**

1. Write the code in a `.cpp` file.
2. Compile using `g++ filename.cpp -o output`.
3. Run the compiled program using `./output`.

### **Using Pointers**

1. Declare a pointer:
   ```cpp
   int x = 10;
   int *ptr = &x;
   ```
2. Access value using pointer:
   ```cpp
   cout << *ptr;
   ```

### **Handling Files**

1. Open a file:
   ```cpp
   ofstream file("data.txt");
   ```
2. Write to the file:
   ```cpp
   file << "Hello, C++!";
   ```
3. Close the file:
   ```cpp
   file.close();
   ```

---

## 💡 Examples

```cpp
// Print "Hello, World!"
#include <iostream>
using namespace std;
int main() {
    cout << "Hello, World!";
    return 0;
}

// Function to add two numbers
int add(int a, int b) {
    return a + b;
}

// Using pointers
int x = 10;
int *ptr = &x;
cout << *ptr;
```

---

## 📚 References

- **C++ Cheat Sheet**: [GeeksforGeeks](https://www.geeksforgeeks.org/cpp-cheatsheet/)
- **C++ Quick Reference**: [QuickRef](https://quickref.me/cpp.html)
- **C++ Programming Guide**: [Hacking C++](https://hackingcpp.com/cpp/cheat_sheets.html)

```
<!-- end list -->
```
