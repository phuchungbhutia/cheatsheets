title: Pacman Cheatsheet

category: Linux
description: A quick reference guide for essential Pacman commands, workflows, and examples for managing packages on Arch Linux efficiently.

---

## 🛠️ Commands

| Command                              | Description                                             |
| ------------------------------------ | ------------------------------------------------------- |
| `pacman -Syu`                      | Update package lists and upgrade all installed packages |
| `pacman -Sy`                       | Refresh package lists without upgrading packages        |
| `pacman -S [package]`              | Install a package                                       |
| `pacman -S --needed [package]`     | Install a package only if it's not already installed    |
| `pacman -R [package]`              | Remove a package                                        |
| `pacman -Rs [package]`             | Remove a package and its dependencies                   |
| `pacman -Qtdq                        | pacman -Rns -`                                          |
| `pacman -Q`                        | List all installed packages                             |
| `pacman -Qi [package]`             | Show detailed information about an installed package    |
| `pacman -Qs [query]`               | Search for an installed package                         |
| `pacman -Ss [query]`               | Search for a package in the repositories                |
| `pacman -Sc`                       | Remove old package versions from cache                  |
| `pacman -Scc`                      | Clear the package cache completely                      |
| `pacman -Qdt`                      | List orphaned packages                                  |
| `pacman -F [file]`                 | Find which package owns a specific file                 |
| `pacman -U [file.pkg.tar.zst]`     | Install a package from a local file                     |
| `pacman -D --asexplicit [package]` | Mark a package as explicitly installed                  |
| `pacman -D --asdeps [package]`     | Mark a package as a dependency                          |

---

## 🔄 Workflows

### **Updating and Upgrading Packages**

1. Update package lists and upgrade installed packages:
   ```bash
   sudo pacman -Syu
   ```
2. Refresh package lists without upgrading packages:
   ```bash
   sudo pacman -Sy
   ```

### **Installing and Removing Packages**

1. Install a package:
   ```bash
   sudo pacman -S firefox
   ```
2. Remove a package:
   ```bash
   sudo pacman -R firefox
   ```
3. Remove a package along with its unused dependencies:
   ```bash
   sudo pacman -Rs firefox
   ```

### **Cleaning Up the System**

1. Remove orphaned packages:
   ```bash
   sudo pacman -Qtdq | sudo pacman -Rns -
   ```
2. Clear the package cache:
   ```bash
   sudo pacman -Scc
   ```

---

## 💡 Examples

```bash
# Search for a package in repositories
pacman -Ss vim

# List all installed packages
pacman -Q

# Find which package owns a specific file
pacman -F /usr/bin/firefox

# Install a package from a local file
pacman -U mypackage.pkg.tar.zst
```

---

## 📚 References

- **Pacman Arch Wiki**: [https://wiki.archlinux.org/title/Pacman](https://wiki.archlinux.org/title/Pacman)
- **Arch Linux Official Documentation**: [https://wiki.archlinux.org/](https://wiki.archlinux.org/)
- **Pacman Package Manager Guide**: [https://man.archlinux.org/man/pacman.8](https://man.archlinux.org/man/pacman.8)

```
<!-- end list -->
```
