title: Ubuntu Cheatsheet

category: Linux
description: A quick reference guide for essential Ubuntu commands, workflows, and examples for managing Ubuntu-based systems efficiently.

---

## 🛠️ Commands

| Command                          | Description                         |
| -------------------------------- | ----------------------------------- |
| `sudo apt update`              | Update package lists                |
| `sudo apt upgrade`             | Upgrade installed packages          |
| `sudo apt install [package]`   | Install a package                   |
| `sudo apt remove [package]`    | Remove a package                    |
| `sudo apt autoremove`          | Remove unnecessary packages         |
| `dpkg -l`                      | List installed packages             |
| `dpkg -i [file.deb]`           | Install a local `.deb` package    |
| `dpkg -r [package]`            | Remove a manually installed package |
| `snap list`                    | List installed Snap packages        |
| `snap install [package]`       | Install a Snap package              |
| `snap remove [package]`        | Remove a Snap package               |
| `systemctl status [service]`   | Check the status of a service       |
| `systemctl restart [service]`  | Restart a service                   |
| `systemctl stop [service]`     | Stop a service                      |
| `systemctl start [service]`    | Start a service                     |
| `reboot`                       | Restart the system                  |
| `shutdown -h now`              | Shut down the system immediately    |
| `lsb_release -a`               | Show Ubuntu distribution details    |
| `cat /etc/os-release`          | Display Ubuntu version info         |
| `df -h`                        | Show disk space usage               |
| `du -sh [dir]`                 | Show directory size                 |
| `free -h`                      | Show system memory usage            |
| `ps aux`                       | List running processes              |
| `kill [PID]`                   | Terminate a process                 |
| `top`                          | Monitor system performance          |
| `grep [pattern] [file]`        | Search for text in a file           |
| `find / -name [filename]`      | Search for a file                   |
| `tar -cvf [archive.tar] [dir]` | Create a tar archive                |
| `tar -xvf [archive.tar]`       | Extract a tar archive               |

---

## 🔄 Workflows

### **Installing Packages**

1. Update package lists:
   ```bash
   sudo apt update
   ```
2. Upgrade all installed packages:
   ```bash
   sudo apt upgrade
   ```
3. Install a specific package:
   ```bash
   sudo apt install vim
   ```
4. Remove an installed package:
   ```bash
   sudo apt remove firefox
   ```
5. Install a Snap package:
   ```bash
   sudo snap install chromium
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
# Show Ubuntu version
lsb_release -a

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

- **Ubuntu Official Documentation**: [https://ubuntu.com/tutorials](https://ubuntu.com/tutorials)
- **Ubuntu Wiki**: [https://wiki.ubuntu.com/](https://wiki.ubuntu.com/)
- **APT Package Management Guide**: [https://help.ubuntu.com/community/AptGet/](https://help.ubuntu.com/community/AptGet/)

```
<!-- end list -->
```
