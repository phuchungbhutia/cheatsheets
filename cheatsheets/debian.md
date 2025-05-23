title: Debian Cheatsheet

category: Linux
description: A quick reference guide for essential Debian commands, workflows, and examples for managing a Debian-based Linux system efficiently.

---

## 🛠️ Commands

| Command                          | Description                         |
| -------------------------------- | ----------------------------------- |
| `apt update`                   | Update package lists                |
| `apt upgrade`                  | Upgrade installed packages          |
| `apt install [package]`        | Install a package                   |
| `apt remove [package]`         | Remove a package                    |
| `apt autoremove`               | Remove unused packages              |
| `dpkg -l`                      | List installed packages             |
| `dpkg -i [file.deb]`           | Install a .deb package manually     |
| `dpkg -r [package]`            | Remove a manually installed package |
| `dpkg-query -W [package]`      | Check if a package is installed     |
| `systemctl status [service]`   | Check status of a service           |
| `systemctl restart [service]`  | Restart a service                   |
| `systemctl stop [service]`     | Stop a service                      |
| `systemctl start [service]`    | Start a service                     |
| `reboot`                       | Restart the system                  |
| `shutdown -h now`              | Shut down the system immediately    |
| `uname -r`                     | Show kernel version                 |
| `cat /etc/debian_version`      | Display Debian version              |
| `lsb_release -a`               | Show Linux distribution details     |
| `df -h`                        | Show disk space usage               |
| `du -sh [dir]`                 | Show directory size                 |
| `free -h`                      | Show system memory usage            |
| `ps aux`                       | List running processes              |
| `kill [PID]`                   | Terminate a process                 |
| `top`                          | Monitor system performance          |
| `grep [text] [file]`           | Search for text in a file           |
| `find / -name [filename]`      | Search for a file                   |
| `tar -cvf [archive.tar] [dir]` | Create a tar archive                |
| `tar -xvf [archive.tar]`       | Extract a tar archive               |

---

## 🔄 Workflows

### **Installing Packages**

1. Update package lists:
   ```bash
   apt update
   ```
2. Upgrade all installed packages:
   ```bash
   apt upgrade
   ```
3. Install a specific package:
   ```bash
   apt install vim
   ```
4. Remove an unused package:
   ```bash
   apt remove firefox
   ```

### **Managing Services**

1. Check the status of a service:
   ```bash
   systemctl status apache2
   ```
2. Restart a service:
   ```bash
   systemctl restart apache2
   ```
3. Stop a running service:
   ```bash
   systemctl stop apache2
   ```

### **System Monitoring & Management**

1. View running processes:
   ```bash
   ps aux
   ```
2. Terminate a process by its ID:
   ```bash
   kill 1234
   ```
3. Monitor real-time CPU and memory usage:
   ```bash
   top
   ```

---

## 💡 Examples

```bash
# Show Debian version
cat /etc/debian_version

# List all installed packages
dpkg -l

# Search for a package
apt search curl

# Find all .log files in the home directory
find ~/ -name "*.log"

# Extract a compressed tar archive
tar -xvf backup.tar.gz
```

---

## 📚 References

- **Debian Official Documentation**: [https://www.debian.org/doc/](https://www.debian.org/doc/)
- **Debian Wiki**: [https://wiki.debian.org/](https://wiki.debian.org/)
- **APT Package Management**: [https://wiki.debian.org/Apt](https://wiki.debian.org/Apt)

```
<!-- end list -->
```
