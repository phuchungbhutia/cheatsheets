title: Arch Linux Cheatsheet

category: Linux
description: A quick reference guide for essential Arch Linux commands, workflows, and examples for managing Arch-based systems efficiently.

---

## 🛠️ Commands

| Command                          | Description                                         |
| -------------------------------- | --------------------------------------------------- |
| `pacman -Syu`                  | Update package lists and upgrade installed packages |
| `pacman -S [package]`          | Install a package                                   |
| `pacman -R [package]`          | Remove a package                                    |
| `pacman -Q`                    | List installed packages                             |
| `pacman -Qi [package]`         | Show details about an installed package             |
| `pacman -Ss [query]`           | Search for a package in repositories                |
| `pacman -Sc`                   | Clear the package cache                             |
| `pacman -Scc`                  | Completely clear package cache                      |
| `pacman -S --needed [package]` | Install package only if it's not installed          |
| `yay -S [package]`             | Install a package from AUR (if using Yay)           |
| `yay -R [package]`             | Remove an AUR package                               |
| `systemctl status [service]`   | Check status of a service                           |
| `systemctl restart [service]`  | Restart a service                                   |
| `systemctl stop [service]`     | Stop a service                                      |
| `systemctl start [service]`    | Start a service                                     |
| `reboot`                       | Restart the system                                  |
| `shutdown -h now`              | Shut down the system immediately                    |
| `lsb_release -a`               | Show Arch Linux distribution details                |
| `df -h`                        | Show disk space usage                               |
| `du -sh [dir]`                 | Show directory size                                 |
| `free -h`                      | Show system memory usage                            |
| `ps aux`                       | List running processes                              |
| `kill [PID]`                   | Terminate a process                                 |
| `top`                          | Monitor system performance                          |
| `grep [pattern] [file]`        | Search for text in a file                           |
| `find / -name [filename]`      | Search for a file                                   |
| `tar -cvf [archive.tar] [dir]` | Create a tar archive                                |
| `tar -xvf [archive.tar]`       | Extract a tar archive                               |

---

## 🔄 Workflows

### **Installing Packages**

1. Update package lists and upgrade installed packages:
   ```bash
   sudo pacman -Syu
   ```
2. Install a specific package:
   ```bash
   sudo pacman -S vim
   ```
3. Search for a package:
   ```bash
   pacman -Ss firefox
   ```
4. Remove an installed package:
   ```bash
   sudo pacman -R firefox
   ```

### **Managing Services**

1. Check the status of a service:
   ```bash
   systemctl status NetworkManager
   ```
2. Restart a service:
   ```bash
   systemctl restart NetworkManager
   ```
3. Stop a running service:
   ```bash
   systemctl stop NetworkManager
   ```

### **Using the Arch User Repository (AUR)**

1. Install a package from AUR (using Yay):
   ```bash
   yay -S google-chrome
   ```
2. Remove an AUR package:
   ```bash
   yay -R google-chrome
   ```

---

## 💡 Examples

```bash
# Show Arch Linux version
cat /etc/os-release

# List all installed packages
pacman -Q

# Find all .log files in the home directory
find ~/ -name "*.log"

# Extract a compressed tar archive
tar -xvf backup.tar.gz
```

---

## 📚 References

- **Arch Linux Official Documentation**: [https://wiki.archlinux.org/](https://wiki.archlinux.org/)
- **Pacman Package Manager Guide**: [https://wiki.archlinux.org/title/Pacman](https://wiki.archlinux.org/title/Pacman)
- **AUR Package Management**: [https://wiki.archlinux.org/title/AUR](https://wiki.archlinux.org/title/AUR)

```
<!-- end list -->
```
