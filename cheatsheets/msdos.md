title: MS-DOS Cheatsheet

category: Command Line Interface
description: A quick reference guide for essential MS-DOS commands, workflows, and examples for efficient system management.

---

## 🛠️ Commands

### **Basic Navigation & File Management**

| Command                         | Description                         |
| ------------------------------- | ----------------------------------- |
| `CD [directory]`              | Change directory                    |
| `DIR`                         | List files in the current directory |
| `COPY [source] [destination]` | Copy files                          |
| `DEL [file]`                  | Delete a file                       |
| `REN [oldname] [newname]`     | Rename a file                       |
| `MKDIR [directory]`           | Create a new directory              |
| `RMDIR [directory]`           | Remove a directory                  |

### **Disk & System Management**

| Command                             | Description                            |
| ----------------------------------- | -------------------------------------- |
| `CHKDSK`                          | Check disk for errors                  |
| `FORMAT [drive:]`                 | Format a disk                          |
| `DISKCOPY [source] [destination]` | Copy an entire disk                    |
| `LABEL [drive:] [name]`           | Change disk label                      |
| `VOL [drive:]`                    | Display volume label and serial number |

### **Batch Processing & Automation**

| Command                           | Description                     |
| --------------------------------- | ------------------------------- |
| `ECHO [message]`                | Display a message               |
| `PAUSE`                         | Pause execution                 |
| `GOTO [label]`                  | Jump to a label in a batch file |
| `IF [condition]`                | Conditional execution           |
| `FOR %%var IN (set) DO command` | Loop through a set of values    |

### **Networking & System Utilities**

| Command                     | Description                   |
| --------------------------- | ----------------------------- |
| `PING [address]`          | Check network connectivity    |
| `IPCONFIG`                | Display network configuration |
| `NET USE [drive:] [path]` | Map a network drive           |
| `NETSTAT`                 | Display network statistics    |
| `TASKLIST`                | Show running processes        |

---

## 🔄 Workflows

### **Navigating & Managing Files**

1. Open Command Prompt (`cmd`).
2. Change directory:
   ```dos
   CD C:\Users\Documents
   ```
3. List files:
   ```dos
   DIR
   ```
4. Copy a file:
   ```dos
   COPY file.txt D:\Backup\
   ```

### **Formatting a Disk**

1. Open Command Prompt as Administrator.
2. Format the disk:
   ```dos
   FORMAT D: /FS:NTFS
   ```
3. Confirm the operation when prompted.

### **Creating a Batch File**

1. Open Notepad and write the script:
   ```dos
   @echo off
   echo Hello, MS-DOS!
   pause
   ```
2. Save as `script.bat`.
3. Double-click to execute.

---

## 💡 Examples

```dos
# Rename a file
REN oldfile.txt newfile.txt

# Delete all `.txt` files in a folder
DEL C:\Users\Documents\*.txt

# Check disk for errors
CHKDSK C:
```

---

## 📚 References

- **Comprehensive MS-DOS Commands List**: [GeeksforGeeks](https://www.geeksforgeeks.org/dos-commands/)
- **MS-DOS Command Guide (PDF)**: [Archive.org](https://archive.org/download/ms-dos_commands/ms-dos_commands.pdf)
- **MS-DOS Cheat Sheet & Quick Reference**: [TechGeekBuzz](https://www.techgeekbuzz.com/blog/dos-commands/)

```
<!-- end list -->
```
