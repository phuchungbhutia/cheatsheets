title: Batch File Cheatsheet

category: Windows
description: A quick reference guide for essential Batch File commands, workflows, and examples for efficient automation in Windows.

---

## 🛠️ Commands

### **Basic Batch Syntax**

| Command        | Description                               |
| -------------- | ----------------------------------------- |
| `@echo off`  | Hides command output in the console       |
| `echo Hello` | Prints "Hello" to the console             |
| `pause`      | Pauses execution and waits for user input |
| `cls`        | Clears the console screen                 |
| `exit`       | Exits the batch script                    |

### **Variables & Input**

| Command                     | Description                    |
| --------------------------- | ------------------------------ |
| `set var=value`           | Assigns a value to a variable  |
| `echo %var%`              | Prints the value of a variable |
| `set /p var=Enter value:` | Prompts user for input         |
| `set /a result=5+3`       | Performs arithmetic operations |

### **Control Flow**

| Command                                | Description                  |
| -------------------------------------- | ---------------------------- |
| `if %var%==value echo Match found`   | Conditional statement        |
| `if exist file.txt echo File exists` | Checks if a file exists      |
| `for %%x in (*.txt) do echo %%x`     | Loops through files          |
| `goto label`                         | Jumps to a specific label    |
| `:label`                             | Defines a label for `goto` |

### **File & Directory Operations**

| Command                | Description                          |
| ---------------------- | ------------------------------------ |
| `dir`                | Lists files in the current directory |
| `cd folder`          | Changes directory                    |
| `mkdir new_folder`   | Creates a new folder                 |
| `rmdir /s /q folder` | Deletes a folder and its contents    |
| `del file.txt`       | Deletes a file                       |

### **System & Networking**

| Command                         | Description                           |
| ------------------------------- | ------------------------------------- |
| `ping google.com`             | Checks network connectivity           |
| `ipconfig`                    | Displays network configuration        |
| `shutdown /s /t 60`           | Shuts down the computer in 60 seconds |
| `tasklist`                    | Lists running processes               |
| `taskkill /f /im notepad.exe` | Forcefully closes Notepad             |

---

## 🔄 Workflows

### **Creating & Running a Batch File**

1. Open Notepad and write the script.
2. Save the file with a `.bat` extension.
3. Double-click the `.bat` file to execute.

### **Using Conditional Statements**

1. Define a condition:
   ```batch
   if %var%==hello echo Welcome!
   ```
2. Execute based on the condition.

### **Looping Through Files**

1. Use a `for` loop:
   ```batch
   for %%x in (*.txt) do echo %%x
   ```
2. Process each file in the directory.

---

## 💡 Examples

```batch
@echo off
echo Hello, Batch Scripting!
set /p name=Enter your name:
echo Welcome, %name%!
pause
```

---

## 📚 References

- **Batch File Cheat Sheet (PDF)**: [Cheatography](https://cheatography.com/chaosjd/cheat-sheets/batch/pdf/)
- **Windows Batch Scripting Guide**: [Joshua&#39;s Docs](https://docs.joshuatz.com/cheatsheets/cmd-batch/)
- **Batch File Commands & Examples**: [GitHub](https://github.com/gkhays/cheatsheets/blob/master/WindowsBatch-CheatSheet.md)

```
<!-- end list -->
```
