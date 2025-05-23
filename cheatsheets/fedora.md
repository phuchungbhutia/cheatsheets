title: Fedora Cheatsheet

category: Linux
description: A quick reference guide for essential Fedora commands, workflows, and examples for managing a Fedora-based Linux system efficiently.

---

## 🛠️ Commands

### **Package Management (DNF & RPM)**

| Command                        | Description                                              |
| ------------------------------ | -------------------------------------------------------- |
| `sudo dnf update`            | Update package lists and upgrade installed packages      |
| `sudo dnf install [package]` | Install a package                                        |
| `sudo dnf remove [package]`  | Remove a package                                         |
| `sudo dnf search [query]`    | Search for a package in repositories                     |
| `sudo dnf list installed`    | List installed packages                                  |
| `sudo dnf info [package]`    | Show details about an installed package                  |
| `sudo dnf autoremove`        | Remove unnecessary dependencies                          |
| `sudo rpm -qa`               | List all installed RPM packages                          |
| `sudo rpm -qi [package]`     | Show detailed information about an installed RPM package |
| `sudo rpm -Uvh [file.rpm]`   | Install an RPM package manually                          |
| `sudo rpm -e [package]`      | Remove an RPM package                                    |

### **System Maintenance**

| Command                              | Description                     |
| ------------------------------------ | ------------------------------- |
| `sudo systemctl status [service]`  | Check the status of a service   |
| `sudo systemctl restart [service]` | Restart a service               |
| `sudo systemctl stop [service]`    | Stop a service                  |
| `sudo systemctl start [service]`   | Start a service                 |
| `sudo dnf clean all`               | Clear package cache             |
| `journalctl --disk-usage`          | Check journal log size          |
| `journalctl --vacuum-size=50M`     | Reduce journal log size to 50MB |

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
   sudo dnf update
   ```
2. Install a package using DNF:
   ```bash
   sudo dnf install firefox
   ```
3. Install an RPM package manually:
   ```bash
   sudo rpm -Uvh package.rpm
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
sudo dnf list installed

# Search for a package using DNF
sudo dnf search vlc

# Remove unnecessary dependencies
sudo dnf autoremove

# Clear package cache
sudo dnf clean all
```

---

## 📚 References

- **Fedora CheatSheet**: [Fedora Wiki](https://gist.github.com/carlbennett/d1b89388be9de219ce67)
- **Linux Commands Cheat Sheet**: [Red Hat Developer](https://developers.redhat.com/cheat-sheets/linux-commands-cheat-sheet)

```
<!-- end list -->
```
