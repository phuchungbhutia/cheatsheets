title: .NET Cheatsheet

category: Programming
description: A quick reference guide for essential .NET commands, C# syntax, and best practices for building applications.

---

## 🛠️ Commands

### **Basic .NET Operations**

| Command                         | Description                           |
| ------------------------------- | ------------------------------------- |
| `dotnet new console -n MyApp` | Create a new .NET console application |
| `dotnet run`                  | Run the application                   |
| `dotnet build`                | Compile the project                   |
| `dotnet publish`              | Publish the application               |

### **C# Syntax & Data Types**

| Data Type  | Description               |
| ---------- | ------------------------- |
| `int`    | Integer type              |
| `string` | Text data type            |
| `bool`   | Boolean type (true/false) |
| `double` | Floating-point number     |

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

### **Entity Framework & Database Handling**

| Command                     | Description                        |
| --------------------------- | ---------------------------------- |
| `DbContext`               | Represents the database context    |
| `DbSet<T>`                | Represents a table in the database |
| `context.SaveChanges();`  | Save changes to the database       |
| `context.Users.ToList();` | Retrieve all users                 |

---

## 🔄 Workflows

### **Setting Up a .NET Project**

1. Install .NET SDK and run `dotnet new console -n MyApp`.
2. Write C# code in `Program.cs`.
3. Run the application using `dotnet run`.

### **Handling Data with LINQ**

1. Use `Where()` for filtering collections.
2. Apply `Select()` for transforming data.
3. Utilize `OrderBy()` for sorting results.

### **Securing .NET Applications**

1. Implement authentication using `services.AddAuthentication();`.
2. Protect endpoints with authorization policies.
3. Validate user input to prevent SQL injection.

---

## 💡 Examples

```csharp
// Example LINQ Query in .NET
List<int> numbers = new List<int> { 1, 2, 3, 4, 5 };
var filtered = numbers.Where(n => n > 2).ToList();
Console.WriteLine(string.Join(", ", filtered));
```

---

## 📚 References

- **[The Ultimate .NET Cheat Sheet](https://github.com/webmaster442/ultimatedotnetcheatsheet)**
- **[C# Cheat Sheet &amp; Quick Reference](https://quickref.me/cs.html)**
- **[31 .NET Cheat Sheets - Cheatography](https://cheatography.com/tag/dotnet/)**

```
<!-- end list -->
```
