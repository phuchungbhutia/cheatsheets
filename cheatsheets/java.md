title: Java Programming Cheatsheet

category: Java
description: A quick reference guide for essential Java programming syntax, commands, workflows, and examples for efficient coding.

---

## 🛠️ Commands

### **Basic Syntax**

| Command                                       | Description                  |
| --------------------------------------------- | ---------------------------- |
| `public class Main {}`                      | Define a Java class          |
| `public static void main(String[] args) {}` | Define the main method       |
| `System.out.println("Hello, World!");`      | Print output to the console  |
| `return value;`                             | Return a value from a method |

### **Variables & Data Types**

| Command                  | Description                                        |
| ------------------------ | -------------------------------------------------- |
| `int x = 10;`          | Declare an integer variable                        |
| `float y = 5.5f;`      | Declare a floating-point variable                  |
| `char c = 'A';`        | Declare a character variable                       |
| `double d = 3.14159;`  | Declare a double-precision floating-point variable |
| `boolean flag = true;` | Declare a boolean variable                         |

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

### **Methods & Functions**

| Command                                     | Description                  |
| ------------------------------------------- | ---------------------------- |
| `void myMethod() {}`                      | Define a method              |
| `return x;`                               | Return a value from a method |
| `int add(int a, int b) { return a + b; }` | Method with parameters       |

### **Object-Oriented Programming (OOP)**

| Command                          | Description                      |
| -------------------------------- | -------------------------------- |
| `class MyClass {}`             | Define a class                   |
| `public:`                      | Define public access modifier    |
| `private:`                     | Define private access modifier   |
| `protected:`                   | Define protected access modifier |
| `MyClass obj = new MyClass();` | Create an object of a class      |

### **File Handling**

| Command                                               | Description          |
| ----------------------------------------------------- | -------------------- |
| `File file = new File("file.txt");`                 | Create a file object |
| `Scanner sc = new Scanner(file);`                   | Read from a file     |
| `PrintWriter writer = new PrintWriter("file.txt");` | Write to a file      |
| `writer.close();`                                   | Close a file         |

---

## 🔄 Workflows

### **Creating & Running a Java Program**

1. Write the code in a `.java` file.
2. Compile using `javac filename.java`.
3. Run the compiled program using `java filename`.

### **Using Objects & Classes**

1. Define a class:
   ```java
   class Car {
       String model;
       int year;
   }
   ```
2. Create an object:
   ```java
   Car myCar = new Car();
   myCar.model = "Toyota";
   myCar.year = 2022;
   ```

### **Handling Files**

1. Open a file:
   ```java
   File file = new File("data.txt");
   ```
2. Read from the file:
   ```java
   Scanner sc = new Scanner(file);
   while (sc.hasNextLine()) {
       System.out.println(sc.nextLine());
   }
   ```
3. Close the file:
   ```java
   sc.close();
   ```

---

## 💡 Examples

```java
// Print "Hello, World!"
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}

// Function to add two numbers
public class MathOperations {
    public static int add(int a, int b) {
        return a + b;
    }
}

// Using objects
class Car {
    String model;
    int year;
}
Car myCar = new Car();
myCar.model = "Toyota";
myCar.year = 2022;
```

---

## 📚 References

- **Java Cheat Sheet**: [GeeksforGeeks](https://www.geeksforgeeks.org/java-cheat-sheet/)
- **Java Quick Reference**: [QuickRef](https://quickref.me/java.html)
- **Java Programming Guide**: [Princeton University](https://introcs.cs.princeton.edu/java/11cheatsheet/)

```
<!-- end list -->
```
