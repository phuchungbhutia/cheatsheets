title: Terminal Cheatsheet

category: Terminal
description: A quick reference guide for essential terminal commands, shortcuts, and workflows for efficient system management.

---

## 🛠️ Commands

### **Basic Navigation**

| Command                   | Description                         |
| ------------------------- | ----------------------------------- |
| `pwd`                   | Show current directory path         |
| `ls`                    | List files and directories          |
| `cd /path/to/directory` | Change directory                    |
| `mkdir new_folder`      | Create a new directory              |
| `rm -r folder_name`     | Delete a directory and its contents |

### **File Management**

| Command                       | Description           |
| ----------------------------- | --------------------- |
| `touch file.txt`            | Create an empty file  |
| `cp file.txt /destination/` | Copy a file           |
| `mv file.txt /destination/` | Move or rename a file |
| `rm file.txt`               | Delete a file         |
| `cat file.txt`              | Display file contents |

### **Process Management**

| Command                | Description                                        |
| ---------------------- | -------------------------------------------------- |
| `ps aux`             | List all running processes                         |
| `top`                | Display real-time system resource usage            |
| `kill process_id`    | Terminate a process by ID                          |
| `pkill process_name` | Kill a process by name                             |
| `htop`               | Interactive process viewer (requires installation) |

### **Networking & Connectivity**

| Command                               | Description                              |
| ------------------------------------- | ---------------------------------------- |
| `ip a`                              | Show network interfaces and IP addresses |
| `ping google.com`                   | Test network connectivity                |
| `netstat -tulnp`                    | Show active network connections          |
| `curl -I https://example.com`       | Fetch HTTP headers from a website        |
| `wget https://example.com/file.zip` | Download a file from the internet        |

### **User & Permissions Management**

| Command                   | Description               |
| ------------------------- | ------------------------- |
| `whoami`                | Show current user         |
| `sudo useradd new_user` | Create a new user         |
| `sudo passwd new_user`  | Set a password for a user |
| `sudo userdel new_user` | Delete a user             |
| `chmod 755 file.txt`    | Change file permissions   |

---

## 🔄 Workflows

### **Navigating the File System**

1. Use `pwd` to check the current directory.
2. Change directories using `cd /path/to/directory`.
3. List files using `ls -l`.

### **Managing Processes**

1. Check running processes using `ps aux`.
2. Kill a process using `kill process_id`.
3. Use `htop` for an interactive process view.

### **Checking Network Connectivity**

1. Test internet connection using `ping google.com`.
2. View active connections using `netstat -tulnp`.
3. Fetch website headers using `curl -I https://example.com`.

---

## 💡 Examples

```sh
# Create a new directory
mkdir my_folder

# Copy a file
cp file.txt /home/user/documents/

# Kill a process by name
pkill firefox
```

---

## 📚 References

- **[Terminal Cheat Sheet](https://terminalcheatsheet.com/)**
- **[Linux Commands Cheat Sheet](https://www.geeksforgeeks.org/linux-commands-cheat-sheet/)**

```
<!-- end list -->
```
