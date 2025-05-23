title: Chocolatey Cheatsheet

category: PowerShell
description: A quick reference guide for essential Chocolatey commands, workflows, and examples for managing software installations on Windows efficiently.

---

## 🛠️ Commands

| Command                                         | Description                             |
| ----------------------------------------------- | --------------------------------------- |
| `choco search [package]`                      | Search for a package                    |
| `choco install [package]`                     | Install a package                       |
| `choco install [package] -y`                  | Install a package without confirmation  |
| `choco install [package] --version [version]` | Install a specific version of a package |
| `choco install [package] --force`             | Reinstall a package                     |
| `choco upgrade [package]`                     | Upgrade a package                       |
| `choco upgrade all`                           | Upgrade all installed packages          |
| `choco uninstall [package]`                   | Uninstall a package                     |
| `choco uninstall [package] --force`           | Force uninstall a package               |
| `choco list -lo`                              | List locally installed packages         |
| `choco outdated`                              | List outdated packages                  |
| `choco pin add -n [package]`                  | Prevent a package from being upgraded   |
| `choco pin remove -n [package]`               | Allow a package to be upgraded again    |
| `choco feature list`                          | Show available features                 |
| `choco feature enable -n [feature]`           | Enable a feature                        |
| `choco feature disable -n [feature]`          | Disable a feature                       |
| `choco config list`                           | Show Chocolatey configuration settings  |
| `choco config set [key] [value]`              | Modify Chocolatey configuration         |
| `choco sources list`                          | List available package sources          |
| `choco sources add -n [source] -s [URL]`      | Add a new package source                |
| `choco sources remove -n [source]`            | Remove a package source                 |

---

## 🔄 Workflows

### **Installing a Package**

1. Search for a package:
   ```powershell
   choco search googlechrome
   ```
2. Install the package:
   ```powershell
   choco install googlechrome
   ```
3. Install the package silently:
   ```powershell
   choco install googlechrome -y
   ```

### **Upgrading Packages**

1. Check for outdated packages:
   ```powershell
   choco outdated
   ```
2. Upgrade a specific package:
   ```powershell
   choco upgrade vscode
   ```
3. Upgrade all installed packages:
   ```powershell
   choco upgrade all -y
   ```

### **Managing Installed Packages**

1. List installed packages:
   ```powershell
   choco list -lo
   ```
2. Prevent a package from being upgraded:
   ```powershell
   choco pin add -n notepadplusplus
   ```
3. Allow a package to be upgraded again:
   ```powershell
   choco pin remove -n notepadplusplus
   ```
4. Remove a package permanently:
   ```powershell
   choco uninstall firefox
   ```

---

## 💡 Examples

```powershell
# Install VLC media player
choco install vlc -y

# Upgrade all outdated applications
choco upgrade all -y

# Find and install Notepad++
choco search notepadplusplus
choco install notepadplusplus -y

# List outdated packages
choco outdated

# Add a new package source
choco sources add -n MyRepo -s https://example.com/repo
```

---

## 📚 References

- **Chocolatey Documentation**: [https://docs.chocolatey.org/](https://docs.chocolatey.org/)
- **Chocolatey Community Packages**: [https://community.chocolatey.org/packages](https://community.chocolatey.org/packages)
- **Chocolatey GitHub Repository**: [https://github.com/chocolatey/choco](https://github.com/chocolatey/choco)

```
<!-- end list -->
```
