title: Snap Cheatsheet

category: Linux
description: A quick reference guide for essential Snap commands, options, and workflows for managing Snap packages in Linux.

---

## 🛠️ Commands

### **Basic Snap Operations**

| Command                       | Description                        |
| ----------------------------- | ---------------------------------- |
| `snap list`                 | List installed Snap packages       |
| `snap find package_name`    | Search for available Snap packages |
| `snap install package_name` | Install a Snap package             |
| `snap remove package_name`  | Uninstall a Snap package           |
| `snap refresh`              | Update all installed Snap packages |

### **Managing Snap Packages**

| Command                                        | Description                                 |
| ---------------------------------------------- | ------------------------------------------- |
| `snap info package_name`                     | Show details about a Snap package           |
| `snap changes`                               | View history of Snap package updates        |
| `snap revert package_name`                   | Roll back a package to the previous version |
| `snap refresh --list`                        | Check for available updates                 |
| `snap refresh package_name --channel=stable` | Update a package to a specific channel      |

### **Snap Services & Configuration**

| Command                             | Description                      |
| ----------------------------------- | -------------------------------- |
| `snap services`                   | List active Snap services        |
| `snap enable package_name`        | Enable a disabled Snap package   |
| `snap disable package_name`       | Disable a Snap package           |
| `snap set package_name key=value` | Configure a Snap package setting |
| `snap get package_name key`       | Retrieve a Snap package setting  |

### **Advanced Snap Management**

| Command                                        | Description                                         |
| ---------------------------------------------- | --------------------------------------------------- |
| `snap run package_name`                      | Run a Snap package manually                         |
| `snap alias package_name.command alias_name` | Create a command alias for a Snap package           |
| `snap unalias alias_name`                    | Remove a command alias                              |
| `snap remove package_name --purge`           | Completely remove a Snap package and its data       |
| `snap refresh package_name --channel=edge`   | Install the latest development version of a package |

---

## 🔄 Workflows

### **Installing & Managing Snap Packages**

1. Search for a package using `snap find package_name`.
2. Install the package using `snap install package_name`.
3. Check package details using `snap info package_name`.
4. Update the package using `snap refresh package_name`.

### **Rolling Back a Snap Package**

1. Identify the package using `snap list`.
2. Check update history using `snap changes`.
3. Roll back using `snap revert package_name`.

### **Configuring Snap Services**

1. List active services using `snap services`.
2. Enable or disable a service using `snap enable package_name` or `snap disable package_name`.
3. Modify settings using `snap set package_name key=value`.

---

## 💡 Examples

```sh
# Install a Snap package
snap install firefox

# Check for available updates
snap refresh --list

# Roll back a package to the previous version
snap revert firefox
```

---

## 📚 References

- **[Snap Command Cheat Sheet](https://itsfoss.com/content/files/2024/03/snap-cheatsheet.pdf)**
- **[Snapcraft Documentation](https://snapcraft.io/docs)**
- **[Managing Snap Packages](https://linuxhint.com/manage-snap-packages-linux/)**

```
<!-- end list -->
```
