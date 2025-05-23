title:`rm -rf` Cheatsheet

category: Linux
description: A quick reference guide for using the `rm -rf` command safely, including best practices, examples, and alternatives.

---

## 🛠️ Command Breakdown

| Command              | Description                                        |
| -------------------- | -------------------------------------------------- |
| `rm filename`      | Remove a file                                      |
| `rm -r directory`  | Remove a directory and its contents recursively    |
| `rm -f filename`   | Force delete a file without confirmation           |
| `rm -rf directory` | Forcefully remove a directory and all its contents |

### **Usage Examples**

| Command                    | Description                                           |
| -------------------------- | ----------------------------------------------------- |
| `rm -rf my_folder`       | Delete `my_folder` and all its contents             |
| `rm -rf *`               | Delete all files and folders in the current directory |
| `rm -rf /home/user/temp` | Remove the `temp` directory inside `/home/user`   |

### **Safety Measures**

| Command                      | Description                                          |
| ---------------------------- | ---------------------------------------------------- |
| `rm -i filename`           | Interactive mode (asks for confirmation)             |
| `rm -rf /important_folder` | **⚠️ Dangerous! Avoid running this command** |
| `alias rm='rm -i'`         | Set `rm` to always ask for confirmation            |
| `mv filename /tmp`         | Move files to `/tmp` instead of deleting           |

### **Alternatives to `rm -rf`**

| Command                          | Description                            |
| -------------------------------- | -------------------------------------- |
| `trash filename`               | Move file to trash instead of deleting |
| `find . -name "*.log" -delete` | Delete specific file types             |
| `shred -u filename`            | Securely delete a file                 |

---

## 🔄 Workflows

### **Safely Removing Files & Directories**

1. Use `rm -i` for confirmation before deletion.
2. Set an alias (`alias rm='rm -i'`) to prevent accidental deletions.
3. Move files to `/tmp` instead of deleting immediately.

### **Recovering Deleted Files**

1. If deleted from GUI, check the Trash folder.
2. Use `extundelete` or `testdisk` for recovery (if supported).
3. Always back up important files before using `rm -rf`.

---

## 💡 Examples

```bash
# Example: Delete a directory safely
rm -rf my_project
```

```bash
# Example: Securely delete a file
shred -u secret.txt
```

---

## 📚 References

- **[Linux rm Command Guide](https://www.geeksforgeeks.org/rm-command-linux-examples/)**
- **[Safe File Deletion in Linux](https://linuxhandbook.com/safe-delete-files/)**

```
<!-- end list -->
```
