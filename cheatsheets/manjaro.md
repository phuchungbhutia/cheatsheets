title: Manjaro Cheatsheet

category: Linux
description: A quick reference guide for essential Manjaro commands, workflows, and examples for managing a Manjaro-based Linux system efficiently.

---

## 🛠️ Commands

### **Package Management (Pacman & Pamac)**

| Command                        | Description                                         |
| ------------------------------ | --------------------------------------------------- |
| `sudo pacman -Syu`           | Update package lists and upgrade installed packages |
| `sudo pacman -S [package]`   | Install a package                                   |
| `sudo pacman -Rns [package]` | Remove a package and its dependencies               |
| `sudo pacman -Ss [query]`    | Search for a package in repositories                |
| `sudo pacman -Q`             | List installed packages                             |
| `sudo pacman -Qi [package]`  | Show details about an installed package             |
| `pamac install [package]`    | Install a package using Pamac                       |
| `pamac remove [package]`     | Remove a package using Pamac                        |
| `pamac search [query]`       | Search for a package using Pamac                    |
| `pamac upgrade`              | Upgrade all installed packages                      |
| `pamac list -o`              | List orphaned packages                              |
| `pamac remove -o`            | Remove orphaned packages                            |

### **System Maintenance**

| Command                             | Description                     |
| ----------------------------------- | ------------------------------- |
| `sudo pacman-mirrors --fasttrack` | Generate a fast mirror list     |
| `journalctl --disk-usage`         | Check journal log size          |
| `journalctl --vacuum-size=50M`    | Reduce journal log size to 50MB |
| `journalctl --vacuum-time=2weeks` | Remove logs older than 2 weeks  |

### **User & Access Rights**

| Command                          | Description               |
| -------------------------------- | ------------------------- |
| `sudo [command]`               | Execute a command as root |
| `passwd [username]`            | Change user password      |
| `chown [owner]:[group] [file]` | Change file ownership     |
| `chmod [permissions] [file]`   | Change file permissions   |

---

## 🔄 Workflows

### **Updating & Installing Packages**

1. Update package lists and upgrade installed packages:
   ```bash
   sudo pacman -Syu
   ```
2. Install a package using Pacman:
   ```bash
   sudo pacman -S firefox
   ```
3. Install a package using Pamac:
   ```bash
   pamac install firefox
   ```

### **Managing System Logs**

1. Check journal log size:
   ```bash
   journalctl --disk-usage
   ```
2. Reduce journal log size:
   ```bash
   journalctl --vacuum-size=50M
   ```

### **Managing Users & Permissions**

1. Change user password:
   ```bash
   passwd username
   ```
2. Change file ownership:
   ```bash
   chown user:usergroup myfile.txt
   ```
3. Change file permissions:
   ```bash
   chmod 755 script.sh
   ```

---

## 💡 Examples

```bash
# List installed packages
sudo pacman -Q

# Search for a package using Pamac
pamac search vlc

# Remove orphaned packages
pamac remove -o

# Generate a fast mirror list
sudo pacman-mirrors --fasttrack
```

---

## 📚 References

- **Manjaro CheatSheet**: [Manjaro Wiki](https://wiki.manjaro.org/index.php/CheatSheet)
- **Manjaro Package Management**: [Pacman &amp; Pamac Guide](https://wiki.manjaro.org/index.php/CheatSheet)

```
<!-- end list -->
```
