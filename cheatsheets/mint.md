title: Linux Mint Cheatsheet

category: Linux
description: A quick reference guide for essential Linux Mint commands, shortcuts, and workflows for efficient system management.

---

## 🛠️ Commands

### **Basic System Navigation**

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

### **Package Management**

| Command                           | Description                |
| --------------------------------- | -------------------------- |
| `sudo apt update`               | Update package lists       |
| `sudo apt upgrade`              | Upgrade installed packages |
| `sudo apt install package_name` | Install a package          |
| `sudo apt remove package_name`  | Remove a package           |
| `dpkg -l`                       | List installed packages    |

### **System Monitoring & Performance**

| Command     | Description                             |
| ----------- | --------------------------------------- |
| `top`     | Display real-time system resource usage |
| `htop`    | Interactive process viewer              |
| `df -h`   | Show disk space usage                   |
| `free -h` | Display memory usage                    |
| `uptime`  | Show system uptime                      |

### **Networking & Connectivity**

| Command                         | Description                              |
| ------------------------------- | ---------------------------------------- |
| `ip a`                        | Show network interfaces and IP addresses |
| `ping google.com`             | Test network connectivity                |
| `netstat -tulnp`              | Show active network connections          |
| `nmcli dev wifi list`         | List available Wi-Fi networks            |
| `curl -I https://example.com` | Fetch HTTP headers from a website        |

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

### **Updating & Managing Packages**

1. Run `sudo apt update` to refresh package lists.
2. Upgrade installed packages using `sudo apt upgrade`.
3. Install new software using `sudo apt install package_name`.

### **Checking System Performance**

1. Use `top` or `htop` to monitor CPU and memory usage.
2. Check disk space using `df -h`.
3. View system uptime using `uptime`.

### **Managing Users & Permissions**

1. Create a new user using `sudo useradd new_user`.
2. Set a password using `sudo passwd new_user`.
3. Modify file permissions using `chmod 755 file.txt`.

---

## 💡 Examples

```sh
# Install a package
sudo apt install firefox

# Check system memory usage
free -h

# Change file permissions
chmod 755 script.sh
```

---

## 📚 References

- **[Linux Mint Command Line Cheat Sheet](https://bash-linux.com/linux-mint-command-line-cheat-sheet/)**
- **[Linux Mint Commands Cheatsheet](https://www.kompulsa.com/linux-mint-commands-a-cheatsheet-for-linux-mint-with-examples/)**
- **[Linux Commands Cheat Sheet PDF](https://phoenixnap.com/kb/linux-commands-cheat-sheet)**

```
<!-- end list -->
```
