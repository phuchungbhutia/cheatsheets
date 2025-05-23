title: Winget Cheatsheet

category: PowerShell
description: A quick reference guide for essential Winget commands, workflows, and examples for managing software installations on Windows efficiently.

---

## 🛠️ Commands

| Command                                           | Description                                |
| ------------------------------------------------- | ------------------------------------------ |
| `winget search [name]`                          | Search for an application                  |
| `winget install [name]`                         | Install an application                     |
| `winget install --id [ID]`                      | Install an app using its unique ID         |
| `winget show [name]`                            | Display details about an application       |
| `winget list`                                   | Show installed applications                |
| `winget upgrade`                                | List applications with available updates   |
| `winget upgrade --all`                          | Upgrade all installed applications         |
| `winget upgrade --id [ID]`                      | Upgrade a specific application             |
| `winget uninstall [name]`                       | Uninstall an application                   |
| `winget uninstall --id [ID]`                    | Uninstall a specific app by ID             |
| `winget source list`                            | List available sources (repositories)      |
| `winget source add --name [source] --arg [URL]` | Add a new source                           |
| `winget source remove [source]`                 | Remove a source                            |
| `winget settings`                               | Open Winget settings file                  |
| `winget --info`                                 | Display Winget version and information     |
| `winget --version`                              | Show Winget version                        |
| `winget export -o [file.json]`                  | Export a list of installed apps            |
| `winget import -i [file.json]`                  | Install applications from an exported list |

---

## 🔄 Workflows

### **Installing an Application**

1. Search for an application:
   ```powershell
   winget search Firefox
   ```
2. Install the application:
   ```powershell
   winget install Firefox
   ```

### **Upgrading Applications**

1. Check for available upgrades:
   ```powershell
   winget upgrade
   ```
2. Upgrade all applications:
   ```powershell
   winget upgrade --all
   ```
3. Upgrade a specific application by ID:
   ```powershell
   winget upgrade --id Microsoft.PowerToys
   ```

### **Managing Installed Applications**

1. List all installed applications:
   ```powershell
   winget list
   ```
2. Uninstall an application by name:
   ```powershell
   winget uninstall Spotify
   ```
3. Uninstall an application by ID:
   ```powershell
   winget uninstall --id Google.Chrome
   ```

---

## 💡 Examples

```powershell
# Install VLC media player
winget install VLC

# Upgrade all outdated applications
winget upgrade --all

# Find and install Notepad++
winget search notepad++
winget install Notepad++.Notepad++

# Export a list of installed applications
winget export -o InstalledApps.json

# Import and install applications from a list
winget import -i InstalledApps.json
```

---

## 📚 References

- **Winget Documentation**: [https://learn.microsoft.com/en-us/windows/package-manager/](https://learn.microsoft.com/en-us/windows/package-manager/)
- **Microsoft Winget GitHub**: [https://github.com/microsoft/winget-cli](https://github.com/microsoft/winget-cli)
- **Windows Package Manager Guide**: [https://docs.microsoft.com/en-us/windows/package-manager/winget/](https://docs.microsoft.com/en-us/windows/package-manager/winget/)

```
<!-- end list -->
```
