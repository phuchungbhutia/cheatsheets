title: C Programming Cheatsheet

category: C Language
description: A quick reference guide for essential C programming syntax, commands, workflows, and examples for efficient coding.

---

## 🛠️ Commands

### **Basic Syntax**

| Command                      | Description                           |
| ---------------------------- | ------------------------------------- |
| `#include <stdio.h>`       | Include standard input/output library |
| `int main() {}`            | Define the main function              |
| `printf("Hello, World!");` | Print output to the console           |
| `return 0;`                | Return a value from the main function |

### **Variables & Data Types**

| Command                 | Description                                        |
| ----------------------- | -------------------------------------------------- |
| `int x = 10;`         | Declare an integer variable                        |
| `float y = 5.5;`      | Declare a floating-point variable                  |
| `char c = 'A';`       | Declare a character variable                       |
| `double d = 3.14159;` | Declare a double-precision floating-point variable |

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

| Command          | Description                               |
| ---------------- | ----------------------------------------- |
| `int *ptr;`    | Declare a pointer                         |
| `ptr = &x;`    | Assign address of a variable to a pointer |
| `malloc(size)` | Allocate memory dynamically               |
| `free(ptr);`   | Free allocated memory                     |

### **File Handling**

| Command                                | Description             |
| -------------------------------------- | ----------------------- |
| `FILE *fp = fopen("file.txt", "r");` | Open a file for reading |
| `fclose(fp);`                        | Close a file            |
| `fprintf(fp, "Hello, World!");`      | Write to a file         |
| `fscanf(fp, "%d", &x);`              | Read from a file        |

---

## 🔄 Workflows

### **Creating & Running a C Program**

1. Write the code in a `.c` file.
2. Compile using `gcc filename.c -o output`.
3. Run the compiled program using `./output`.

### **Using Pointers**

1. Declare a pointer:
   ```c
   int x = 10;
   int *ptr = &x;
   ```
2. Access value using pointer:
   ```c
   printf("%d", *ptr);
   ```

### **Handling Files**

1. Open a file:
   ```c
   FILE *fp = fopen("data.txt", "w");
   ```
2. Write to the file:
   ```c
   fprintf(fp, "Hello, C!");
   ```
3. Close the file:
   ```c
   fclose(fp);
   ```

---

## 💡 Examples

```c
// Print "Hello, World!"
#include <stdio.h>
int main() {
    printf("Hello, World!");
    return 0;
}

// Function to add two numbers
int add(int a, int b) {
    return a + b;
}

// Using pointers
int x = 10;
int *ptr = &x;
printf("%d", *ptr);
```

---

## 📚 References

- **C Cheat Sheet**: [GeeksforGeeks](https://www.geeksforgeeks.org/c-cheatsheet/)
- **C Quick Reference**: [QuickRef](https://quickref.me/c.html)
- **C Programming Guide**: [CodeWithHarry](https://www.codewithharry.com/blogpost/c-cheatsheet)

```
<!-- end list -->
```
