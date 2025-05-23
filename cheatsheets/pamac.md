title: Pamac Cheatsheet

category: Linux
description: A quick reference guide for essential Pamac commands, workflows, and examples for managing packages efficiently on Manjaro Linux.

---

## 🛠️ Commands

| Command                       | Description                                      |
| ----------------------------- | ------------------------------------------------ |
| `pamac install [package]`   | Install a package                                |
| `pamac remove [package]`    | Remove a package                                 |
| `pamac search [query]`      | Search for a package in repositories             |
| `pamac upgrade`             | Upgrade all installed packages                   |
| `pamac list -o`             | List orphaned packages                           |
| `pamac remove -o`           | Remove orphaned packages                         |
| `pamac clean --keep 3`      | Remove all packages except the latest 3 versions |
| `pamac checkupdates`        | Check for available updates                      |
| `pamac build [package]`     | Build and install an AUR package                 |
| `pamac search -a [query]`   | Search for a package in the AUR                  |
| `pamac enable-repo [repo]`  | Enable a specific repository                     |
| `pamac disable-repo [repo]` | Disable a specific repository                    |

---

## 🔄 Workflows

### **Updating & Installing Packages**

1. Update package lists and upgrade installed packages:
   ```bash
   pamac upgrade
   ```
2. Install a package using Pamac:
   ```bash
   pamac install firefox
   ```
3. Search for a package in the AUR:
   ```bash
   pamac search -a spotify
   ```

### **Managing System Cleanup**

1. List orphaned packages:
   ```bash
   pamac list -o
   ```
2. Remove orphaned packages:
   ```bash
   pamac remove -o
   ```
3. Clean package cache while keeping the latest 3 versions:
   ```bash
   pamac clean --keep 3
   ```

### **Building & Installing AUR Packages**

1. Search for an AUR package:
   ```bash
   pamac search -a google-chrome
   ```
2. Build and install an AUR package:
   ```bash
   pamac build google-chrome
   ```

---

## 💡 Examples

```bash
# Install VLC media player
pamac install vlc

# Upgrade all outdated applications
pamac upgrade

# Remove orphaned packages
pamac remove -o

# Enable the multilib repository
pamac enable-repo multilib
```

---

## 📚 References

- **Manjaro Pamac CheatSheet**: [Manjaro Wiki](https://wiki.manjaro.org/index.php/CheatSheet)
- **Pamac Command Guide**: [CommandMasters](https://commandmasters.com/commands/pamac-linux/)

```
<!-- end list -->
```
