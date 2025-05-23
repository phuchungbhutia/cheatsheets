title: Tee Cheatsheet

category: Linux
description: A quick reference guide for essential tee commands, output redirection, and best practices for saving command output.

---

## 🛠️ Commands

### **Basic tee Operations**

| Command  | Description              |
| -------- | ------------------------ |
| `command | tee file.txt`            |
| `command | tee -a file.txt`         |
| `command | tee file1.txt file2.txt` |
| `command | tee >(command2)`         |

### **Using tee with sudo**

| Command      | Description                 |
| ------------ | --------------------------- |
| `echo "text" | sudo tee /etc/file.conf`    |
| `command     | sudo tee -a /etc/file.conf` |

### **Suppressing Output**

| Command  | Description              |
| -------- | ------------------------ |
| `command | tee file.txt >/dev/null` |
| `command | tee -i file.txt`         |

### **Combining tee with Other Commands**

| Command                | Description        |
| ---------------------- | ------------------ |
| `grep "error" logs.txt | tee errors.txt`    |
| `df -h                 | tee disk_usage.txt |

---

## 🔄 Workflows

### **Saving Command Output to a File**

1. Run `command | tee file.txt` to save output while displaying it.
2. Use `command | tee -a file.txt` to append output instead of overwriting.

### **Using tee with sudo for System Configuration**

1. Modify system files using `echo "config" | sudo tee /etc/file.conf`.
2. Append changes using `command | sudo tee -a /etc/file.conf`.

### **Redirecting Output to Another Command**

1. Use `command | tee >(command2)` to pass output to another command.
2. Suppress output using `command | tee file.txt >/dev/null`.

---

## 💡 Examples

```sh
# Save command output to a file while displaying it
ls -l | tee files.txt

# Append output to a file instead of overwriting
df -h | tee -a disk_usage.txt

# Write to a root-owned file using sudo
echo "New setting" | sudo tee /etc/config.conf
```

---

## 📚 References

- **[10 tee command examples in Linux](https://www.golinuxcloud.com/tee-command-in-linux/)**
- **[tee command in Linux with examples](https://www.geeksforgeeks.org/tee-command-linux-example/)**

```
<!-- end list -->
```
