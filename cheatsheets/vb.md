title: Visual Basic Cheatsheet

category: Programming
description: A quick reference guide for essential Visual Basic commands, workflows, and examples for efficient application development.

---

## 🛠️ Commands

### **Basic Syntax & Data Types**

| Command                         | Description                          |
| ------------------------------- | ------------------------------------ |
| `Dim varName As Integer`      | Declares an integer variable         |
| `Dim strName As String`       | Declares a string variable           |
| `Dim flag As Boolean`         | Declares a boolean variable          |
| `Const Pi As Double = 3.1416` | Defines a constant value             |
| `Option Explicit`             | Forces explicit variable declaration |

### **Control Flow Statements**

| Command                                   | Description                     |
| ----------------------------------------- | ------------------------------- |
| `If condition Then ... End If`          | Basic conditional statement     |
| `If condition Then ... Else ... End If` | Conditional branching           |
| `Select Case varName ... End Select`    | Multi-way conditional execution |
| `Do While condition ... Loop`           | Loop while condition is true    |
| `For i = 1 To 10 ... Next`              | For loop iteration              |

### **Functions & Procedures**

| Command                                      | Description                         |
| -------------------------------------------- | ----------------------------------- |
| `Function MyFunc(x As Integer) As Integer` | Declares a function                 |
| `Sub MySub()`                              | Declares a subroutine               |
| `Call MySub()`                             | Calls a subroutine                  |
| `Exit Function`                            | Exits from a function prematurely   |
| `Exit Sub`                                 | Exits from a subroutine prematurely |

### **String & Array Operations**

| Command                 | Description                      |
| ----------------------- | -------------------------------- |
| `Len(strName)`        | Gets the length of a string      |
| `Mid(strName, 2, 4)`  | Extracts a substring             |
| `Split(strName, ",")` | Splits a string into an array    |
| `UBound(arrName)`     | Gets the upper bound of an array |
| `LBound(arrName)`     | Gets the lower bound of an array |

### **File Handling & System Operations**

| Command                              | Description              |
| ------------------------------------ | ------------------------ |
| `Open "file.txt" For Output As #1` | Opens a file for writing |
| `Write #1, "Hello, World!"`        | Writes data to a file    |
| `Close #1`                         | Closes the file          |
| `Kill "file.txt"`                  | Deletes a file           |
| `Dir("C:\Users\")`                 | Lists directory contents |

### **Error Handling**

| Command                  | Description                            |
| ------------------------ | -------------------------------------- |
| `On Error Resume Next` | Ignores errors and continues execution |
| `On Error GoTo label`  | Redirects to error handler             |
| `Err.Description`      | Retrieves error details                |
| `Err.Number`           | Retrieves error code                   |

---

## 🔄 Workflows

### **Creating & Running a Basic Program**

1. Open a new VB project.
2. Define variables:
   ```vb
   Dim userName As String
   userName = "Alice"
   ```
3. Display output:
   ```vb
   MsgBox "Hello, " & userName
   ```
4. Run the program and test execution.

### **Using Loops & Conditionals**

1. Create a loop:
   ```vb
   For i = 1 To 5
       MsgBox "Iteration " & i
   Next
   ```
2. Apply conditional logic:
   ```vb
   If userName = "Alice" Then
       MsgBox "Welcome!"
   Else
       MsgBox "Access Denied!"
   End If
   ```

### **Handling Errors Gracefully**

1. Enable error handling:
   ```vb
   On Error Resume Next
   result = 1 / 0 ' Will not crash
   MsgBox "Error: " & Err.Description
   ```

---

## 💡 Examples

```vb
' Declare and use a function
Function Square(x As Integer) As Integer
    Square = x * x
End Function

' Call the function
Dim result As Integer
result = Square(5)
MsgBox "Square of 5: " & result
```

---

## 📚 References

- **[Visual Basic Cheat Sheet - The Coding Guys](https://www.thecodingguys.net/resources/visual-basic-cs.pdf)**
- **[VB.NET Commands &amp; Quick Reference](https://onecompiler.com/cheatsheets/vb)**
- **[Complete VB Programming Guide](https://docs.microsoft.com/en-us/dotnet/visual-basic/)**

```
<!-- end list -->
```
