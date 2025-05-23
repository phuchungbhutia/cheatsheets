title: C# Cheatsheet

category: Programming
description: A quick reference guide for essential C# syntax, commands, and best practices for building applications.

---

## 🛠️ Commands

### **Basic C# Syntax**

| Command                                 | Description                 |
| --------------------------------------- | --------------------------- |
| `using System;`                       | Import system namespace     |
| `class MyClass {}`                    | Define a class              |
| `static void Main()`                  | Entry point of a C# program |
| `Console.WriteLine("Hello, World!");` | Print output to console     |

### **Data Types & Variables**

| Data Type  | Description               |
| ---------- | ------------------------- |
| `int`    | Integer type              |
| `string` | Text data type            |
| `bool`   | Boolean type (true/false) |
| `double` | Floating-point number     |

### **Control Flow Statements**

| Command                             | Description           |
| ----------------------------------- | --------------------- |
| `if (condition) {}`               | Conditional statement |
| `switch (variable) {}`            | Switch case statement |
| `for (int i = 0; i < 10; i++) {}` | Loop through values   |
| `while (condition) {}`            | While loop            |

### **Object-Oriented Programming (OOP)**

| Concept          | Description                               |
| ---------------- | ----------------------------------------- |
| `class`        | Defines a blueprint for objects           |
| `interface`    | Defines a contract for classes            |
| `inheritance`  | Allows a class to inherit from another    |
| `polymorphism` | Enables method overriding and overloading |

### **LINQ & Collections**

| Command                                   | Description               |
| ----------------------------------------- | ------------------------- |
| `List<T>`                               | Generic list collection   |
| `Dictionary<TKey, TValue>`              | Key-value pair collection |
| `var result = list.Where(x => x > 10);` | LINQ query for filtering  |

### **Exception Handling**

| Command                     | Description                           |
| --------------------------- | ------------------------------------- |
| `try {}`                  | Try block for handling exceptions     |
| `catch (Exception ex) {}` | Catch block to handle errors          |
| `finally {}`              | Executes code regardless of exception |

---

## 🔄 Workflows

### **Setting Up a C# Project**

1. Install .NET SDK and run `dotnet new console -n MyApp`.
2. Write C# code in `Program.cs`.
3. Run the application using `dotnet run`.

### **Handling Data with LINQ**

1. Use `Where()` for filtering collections.
2. Apply `Select()` for transforming data.
3. Utilize `OrderBy()` for sorting results.

### **Securing C# Applications**

1. Implement authentication using `services.AddAuthentication();`.
2. Protect endpoints with authorization policies.
3. Validate user input to prevent SQL injection.

---

## 💡 Examples

```csharp
// Example LINQ Query in C#
List<int> numbers = new List<int> { 1, 2, 3, 4, 5 };
var filtered = numbers.Where(n => n > 2).ToList();
Console.WriteLine(string.Join(", ", filtered));
```

---

## 📚 References

- **[C# Cheat Sheet &amp; Quick Reference](https://quickref.me/cs.html)**
- **[C# Cheat Sheet + PDF | Zero To Mastery](https://zerotomastery.io/cheatsheets/csharp-cheat-sheet/)**
- **[C# Cheatsheet - Online Tutorials Library](https://www.tutorialspoint.com/csharp/csharp_cheatsheet.htm)**

```
<!-- end list -->
```
