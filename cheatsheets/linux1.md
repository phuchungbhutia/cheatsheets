title: Linux Commands Cheatsheet

category: Linux
description: A quick reference guide for essential Linux commands, including file management, networking, process control, and system monitoring.

---

## 🛠️ Basic Linux Commands

| Command                   | Description                         |
| ------------------------- | ----------------------------------- |
| `pwd`                   | Print current working directory     |
| `ls -l`                 | List files in long format           |
| `cd /path/to/directory` | Change directory                    |
| `mkdir new_folder`      | Create a new directory              |
| `rm -rf folder_name`    | Delete a directory and its contents |

### **File Management**

| Command                 | Description                   |
| ----------------------- | ----------------------------- |
| `touch file.txt`      | Create an empty file          |
| `cp file1 file2`      | Copy a file                   |
| `mv file1 file2`      | Move or rename a file         |
| `cat file.txt`        | Display file contents         |
| `head -n 10 file.txt` | Show first 10 lines of a file |

### **Process Management**

| Command                | Description                    |
| ---------------------- | ------------------------------ |
| `ps aux`             | List running processes         |
| `kill -9 PID`        | Forcefully terminate a process |
| `top`                | Display system resource usage  |
| `htop`               | Interactive process viewer     |
| `nice -n 10 command` | Run a process with priority    |

### **Networking Commands**

| Command                            | Description                             |
| ---------------------------------- | --------------------------------------- |
| `ping google.com`                | Check network connectivity              |
| `ifconfig`                       | Display network interfaces              |
| `netstat -tulnp`                 | Show active network connections         |
| `curl -O URL`                    | Download a file from a URL              |
| `scp file.txt user@server:/path` | Securely copy a file to a remote server |

### **User Management**

| Command              | Description                    |
| -------------------- | ------------------------------ |
| `whoami`           | Show current user              |
| `adduser username` | Create a new user              |
| `passwd username`  | Change user password           |
| `groups username`  | Show user groups               |
| `sudo command`     | Run a command as administrator |

### **System Monitoring**

| Command           | Description          |
| ----------------- | -------------------- |
| `df -h`         | Show disk usage      |
| `du -sh folder` | Show folder size     |
| `free -m`       | Display memory usage |
| `uptime`        | Show system uptime   |
| `dmesg            | tail`                |

---

## 🔄 Workflows

### **Navigating the Linux File System**

1. Use `pwd` to check the current directory.
2. Change directories using `cd /path/to/directory`.
3. List files using `ls -l`.

### **Managing Processes Efficiently**

1. Use `ps aux` to list running processes.
2. Kill a process using `kill -9 PID`.
3. Monitor system usage with `top` or `htop`.

### **Securing Linux Systems**

1. Use `sudo` for administrative tasks.
2. Manage user permissions with `groups username`.
3. Monitor logs using `dmesg | tail`.

---

## 💡 Examples

```bash
# Example: Create and navigate directories
mkdir my_project
cd my_project
ls -l
```

```bash
# Example: Check system resource usage
top
```

---

## 📚 References

- **[Linux Commands Cheat Sheet - LinuxOPsys](https://linuxopsys.com/linux-commands-cheat-sheet)**
- **[Linux Commands Cheat Sheet - phoenixNAP](https://phoenixnap.com/kb/linux-commands-cheat-sheet)**
- **[Linux Commands Cheat Sheet - GeeksforGeeks](https://www.geeksforgeeks.org/linux-commands-cheat-sheet/)**

```
<!-- end list -->
```
