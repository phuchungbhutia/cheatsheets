title: Ultimate Linux Command Cheat Sheet for Data Engineers and Analysts

category: Linux
description: A comprehensive reference guide for essential Linux commands used in data engineering, system administration, and automation.

---

## 🛠️ Commands

### **Navigating the File System**

| Command             | Description                                |
| ------------------- | ------------------------------------------ |
| `pwd`             | Print the current working directory        |
| `ls`              | List contents of a directory               |
| `cd [dir]`        | Change to a different directory            |
| `mkdir [dir]`     | Create a new directory                     |
| `rm -r [dir]`     | Remove a directory recursively             |
| `cp [src] [dest]` | Copy files or directories                  |
| `mv [src] [dest]` | Move or rename files/directories           |
| `touch [file]`    | Create an empty file or update a timestamp |

### **Data Search & Manipulation**

| Command                         | Description                         |
| ------------------------------- | ----------------------------------- |
| `grep 'pattern' [file]`       | Search for patterns in files        |
| `find [dir] -name 'filename'` | Search for files                    |
| `awk '{print $1}'`            | Parse and process text line by line |
| `sed 's/old/new/g'`           | Replace text in a file              |
| `sort`                        | Sort file content                   |
| `uniq`                        | Remove duplicates                   |
| `wc -l [file]`                | Count lines, words, characters      |

### **System Monitoring & Performance**

| Command     | Description                     |
| ----------- | ------------------------------- |
| `top`     | Real-time system resource usage |
| `ps aux`  | List all running processes      |
| `df -h`   | Disk space usage                |
| `free -m` | Memory usage                    |
| `uptime`  | Show system uptime              |

---

## 🔄 Workflows

### **Optimizing Performance**

1. Use `top` to monitor system resources.
2. Check memory usage with `free -m`.
3. Identify bottlenecks using `ps aux`.

### **Automating Tasks**

1. Schedule jobs using `crontab -e`.
2. Use `nohup` to run long processes.
3. Create command shortcuts with `alias`.

---

## 📚 References

- **[Linux Commands Cheat Sheet](https://www.geeksforgeeks.org/linux-commands-cheat-sheet/)**
- **[The Ultimate Linux Command Cheat Sheet for 2024](https://dev.to/trixsec/the-ultimate-linux-command-cheat-sheet-for-2024-3f9a)**

```
<!-- end list -->
```
