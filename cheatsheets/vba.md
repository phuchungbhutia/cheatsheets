title: Excel Macro (VBA) Cheatsheet

category: Excel
description: A quick reference guide for essential Excel VBA commands, workflows, and examples for automating tasks in Excel.

---

## 🛠️ Commands

### **Basic VBA Syntax**

| Command                       | Description                          |
| ----------------------------- | ------------------------------------ |
| `Sub MyMacro()`             | Define a macro                       |
| `End Sub`                   | End a macro                          |
| `Dim x As Integer`          | Declare a variable                   |
| `MsgBox "Hello, World!"`    | Display a message box                |
| `InputBox("Enter a value")` | Prompt user for input                |
| `Debug.Print x`             | Print output to the Immediate Window |

### **Control Flow**

| Command                                   | Description               |
| ----------------------------------------- | ------------------------- |
| `If condition Then ... Else ... End If` | Conditional statement     |
| `Select Case variable`                  | Multi-condition branching |
| `For i = 1 To 10 ... Next i`            | For loop                  |
| `Do While condition ... Loop`           | While loop                |
| `Do Until condition ... Loop`           | Until loop                |

### **Working with Worksheets**

| Command                          | Description                    |
| -------------------------------- | ------------------------------ |
| `Sheets("Sheet1").Activate`    | Activate a worksheet           |
| `Sheets.Add`                   | Add a new worksheet            |
| `Sheets("Sheet1").Delete`      | Delete a worksheet             |
| `Sheets("Sheet1").Cells.Clear` | Clear all cells in a worksheet |

### **Working with Ranges & Cells**

| Command                                   | Description                  |
| ----------------------------------------- | ---------------------------- |
| `Range("A1").Value = "Hello"`           | Set cell value               |
| `Range("A1:A10").Select`                | Select a range               |
| `Range("A1").Font.Bold = True`          | Apply bold formatting        |
| `Range("A1").Interior.Color = vbYellow` | Change cell background color |

### **File Handling**

| Command                           | Description               |
| --------------------------------- | ------------------------- |
| `Workbooks.Open "C:\file.xlsx"` | Open a workbook           |
| `ActiveWorkbook.Save`           | Save the active workbook  |
| `ActiveWorkbook.Close`          | Close the active workbook |
| `Workbooks.Add`                 | Create a new workbook     |

### **Error Handling**

| Command                        | Description                  |
| ------------------------------ | ---------------------------- |
| `On Error Resume Next`       | Ignore errors                |
| `On Error GoTo ErrorHandler` | Redirect errors to a handler |
| `Err.Number`                 | Get error number             |
| `Err.Description`            | Get error description        |

---

## 🔄 Workflows

### **Creating & Running a Macro**

1. Open the VBA editor (`Alt + F11`).
2. Insert a new module.
3. Define a macro:
   ```vba
   Sub MyMacro()
       MsgBox "Hello, VBA!"
   End Sub
   ```
4. Run the macro (`F5`).

### **Looping Through a Range**

1. Define a loop:
   ```vba
   Sub LoopThroughCells()
       Dim cell As Range
       For Each cell In Range("A1:A10")
           cell.Value = "Updated"
       Next cell
   End Sub
   ```
2. Run the macro to update values.

### **Handling Errors Gracefully**

1. Use error handling:
   ```vba
   Sub ErrorHandlingExample()
       On Error Resume Next
       MsgBox 1 / 0 ' This will cause an error
       If Err.Number <> 0 Then
           MsgBox "Error: " & Err.Description
       End If
   End Sub
   ```

---

## 💡 Examples

```vba
' Display a message box
MsgBox "Hello, World!"

' Change the background color of a cell
Range("A1").Interior.Color = vbYellow

' Open a workbook
Workbooks.Open "C:\Users\Documents\file.xlsx"
```

---

## 📚 References

- **VBA Cheat Sheet**: [Automate Excel](https://www.automateexcel.com/vba/cheatsheets/)
- **Ultimate VBA Reference Guide**: [Analyst Cave](https://analystcave.com/vba-cheat-sheet/)
- **VBA Code Snippets & Examples**: [Excel Graduate](https://excelgraduate.com/vba-cheat-sheet-for-excel/)

```
<!-- end list -->
```
