title: Termux Cheatsheet

category: Terminal
description: A quick reference guide for essential Termux commands, package management, and workflows for efficient terminal usage on Android.

---

## 🛠️ Commands

### **Basic Termux Operations**

| Command                   | Description                                    |
| ------------------------- | ---------------------------------------------- |
| `termux-setup-storage`  | Grant Termux access to the Android file system |
| `clear`                 | Clear the terminal screen                      |
| `pwd`                   | Print the current working directory            |
| `ls`                    | List files and directories                     |
| `cd /path/to/directory` | Change directory                               |

### **Package Management**

| Command                        | Description                             |
| ------------------------------ | --------------------------------------- |
| `pkg update`                 | Update package lists from repositories  |
| `pkg upgrade`                | Upgrade all installed packages          |
| `pkg install package_name`   | Install a specific package              |
| `pkg uninstall package_name` | Uninstall a specific package            |
| `pkg search query`           | Search for a package by name or keyword |

### **File & Directory Management**

| Command                   | Description               |
| ------------------------- | ------------------------- |
| `mkdir directory_name`  | Create a new directory    |
| `touch file.txt`        | Create an empty file      |
| `rm file.txt`           | Delete a file             |
| `mv source destination` | Move or rename files      |
| `cp source destination` | Copy files or directories |

### **Networking & Connectivity**

| Command                               | Description                       |
| ------------------------------------- | --------------------------------- |
| `ping google.com`                   | Test network connectivity         |
| `curl -I https://example.com`       | Fetch HTTP headers from a website |
| `wget https://example.com/file.zip` | Download a file from the internet |
| `netstat -tulnp`                    | Show active network connections   |

### **Process Management**

| Command                | Description                             |
| ---------------------- | --------------------------------------- |
| `ps aux`             | List all running processes              |
| `top`                | Display real-time system resource usage |
| `kill process_id`    | Terminate a process by ID               |
| `pkill process_name` | Kill a process by name                  |

### **Termux API Commands**

| Command                                 | Description                   |
| --------------------------------------- | ----------------------------- |
| `termux-battery-status`               | Show battery status           |
| `termux-camera-photo -c 0 output.jpg` | Take a photo using the camera |
| `termux-location`                     | Get GPS location data         |
| `termux-notification -t "Hello"`      | Send a notification           |
| `termux-toast "Message"`              | Display a toast message       |

---

## 🔄 Workflows

### **Setting Up Termux Storage Access**

1. Run `termux-setup-storage` to grant access.
2. Navigate to `/sdcard` using `cd /sdcard`.
3. List files using `ls`.

### **Installing & Managing Packages**

1. Update package lists using `pkg update`.
2. Install a package using `pkg install package_name`.
3. Remove a package using `pkg uninstall package_name`.

### **Checking System Performance**

1. Monitor processes using `top`.
2. Kill a process using `kill process_id`.
3. View system resource usage using `ps aux`.

---

## 💡 Examples

```sh
# Install a package
pkg install nano

# Check battery status
termux-battery-status

# Download a file
wget https://example.com/file.zip
```

---

## 📚 References

- **[Complete Termux Commands Cheat Sheet](https://www.termuxcommands.com/termux-commands-cheat-sheet/)**
- **[Linux and Termux Cheat Sheet](https://gist.github.com/ranjit485/0b8850d706b948196f7f4eb0e1fe7eaf)**

```
<!-- end list -->
```
