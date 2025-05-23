title: Yay Cheatsheet

category: Linux
description: A quick reference guide for essential Yay commands, workflows, and examples for managing AUR packages efficiently on Arch Linux.

---

## 🛠️ Commands

| Command                | Description                                                         |
| ---------------------- | ------------------------------------------------------------------- |
| `yay -Syu`           | Update package lists and upgrade installed packages (including AUR) |
| `yay -S [package]`   | Install a package from the AUR or official repos                    |
| `yay -Ss [query]`    | Search for a package in AUR and official repos                      |
| `yay -R [package]`   | Remove a package                                                    |
| `yay -Rns [package]` | Remove a package and orphaned dependencies                          |
| `yay -Qtdq             | yay -Rns -`                                                         |
| `yay -Scc`           | Completely clear the package cache                                  |
| `yay -Yc`            | Remove unneeded dependencies                                        |
| `yay -G [package]`   | Download PKGBUILD for a package                                     |
| `yay --editmenu`     | Edit PKGBUILD before installing a package                           |
| `yay -P`             | Show Yay settings and configuration                                 |
| `yay --version`      | Display Yay version                                                 |

---

## 🔄 Workflows

### **Updating and Upgrading Packages**

1. Update package lists and upgrade installed packages:
   ```bash
   yay -Syu
   ```

### **Installing and Removing Packages**

1. Install a package from AUR or Arch repositories:
   ```bash
   yay -S google-chrome
   ```
2. Remove a package:
   ```bash
   yay -R google-chrome
   ```
3. Remove a package along with its unused dependencies:
   ```bash
   yay -Rns google-chrome
   ```

### **Cleaning Up the System**

1. Remove orphaned packages:
   ```bash
   yay -Qtdq | yay -Rns -
   ```
2. Clear the package cache:
   ```bash
   yay -Scc
   ```

---

## 💡 Examples

```bash
# Search for a package in AUR and official repositories
yay -Ss spotify

# Download PKGBUILD for a package without installing
yay -G google-chrome

# Remove orphaned dependencies
yay -Yc

# Edit PKGBUILD before installing a package
yay --editmenu
```

---

## 📚 References

- **Arch Linux AUR Guide**: [https://wiki.archlinux.org/title/AUR](https://wiki.archlinux.org/title/AUR)
- **Yay Documentation**: [https://github.com/Jguer/yay](https://github.com/Jguer/yay)
- **Arch Linux Package Management**: [https://wiki.archlinux.org/title/Pacman](https://wiki.archlinux.org/title/Pacman)

```
<!-- end list -->
```
