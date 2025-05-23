title: Touch Cheatsheet

category: Linux
description: A quick reference guide for using the `touch` command to create files, modify timestamps, and manage file properties.

---

## 🛠️ Command Breakdown

| Command                                 | Description                                   |
| --------------------------------------- | --------------------------------------------- |
| `touch filename`                      | Create an empty file                          |
| `touch file1 file2 file3`             | Create multiple empty files                   |
| `touch -c filename`                   | Update timestamps without creating a new file |
| `touch -t YYYYMMDDhhmm filename`      | Set a specific timestamp                      |
| `touch -r reference_file target_file` | Copy timestamp from another file              |

### **Timestamp Modification**

| Command                                  | Description                                  |
| ---------------------------------------- | -------------------------------------------- |
| `touch -a filename`                    | Update access time only                      |
| `touch -m filename`                    | Update modification time only                |
| `touch -d "2025-05-22 10:30" filename` | Set a custom date and time                   |
| `touch -c -m filename`                 | Modify timestamp without creating a new file |

### **Advanced Usage**

| Command                            | Description                                     |
| ---------------------------------- | ----------------------------------------------- |
| `touch newfile{1..5}.txt`        | Create multiple files with numbered names       |
| `touch -r oldfile newfile`       | Copy timestamps from `oldfile` to `newfile` |
| `touch -c nonexistent.txt`       | Prevent file creation if it doesn’t exist      |
| `touch -t 202505221030 filename` | Set timestamp to May 22, 2025, 10:30 AM         |

---

## 🔄 Workflows

### **Creating & Managing Files**

1. Use `touch filename` to create an empty file.
2. Create multiple files using `touch file1 file2 file3`.
3. Prevent file creation using `touch -c filename`.

### **Modifying File Timestamps**

1. Update access time using `touch -a filename`.
2. Modify timestamps using `touch -m filename`.
3. Set a custom timestamp using `touch -t YYYYMMDDhhmm filename`.

### **Copying Timestamps from Another File**

1. Use `touch -r reference_file target_file` to copy timestamps.
2. Verify timestamps using `ls -l filename`.
3. Use `stat filename` to check detailed file properties.

---

## 💡 Examples

```bash
# Example: Create an empty file
touch myfile.txt
```

```bash
# Example: Set a specific timestamp
touch -t 202505221030 myfile.txt
```

```bash
# Example: Copy timestamp from another file
touch -r oldfile.txt newfile.txt
```

---

## 📚 References

- **[Touch Command in Linux: 9 Useful Examples](https://linuxhandbook.com/touch-command/)**
- **[How to Create an Empty File in Linux | Touch Command](https://www.geeksforgeeks.org/touch-command-in-linux-with-examples/)**

```
<!-- end list -->
```
