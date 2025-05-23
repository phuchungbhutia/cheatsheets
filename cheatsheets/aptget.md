title: Apt-get Cheatsheet

category: Linux
description: A quick reference guide for essential Apt-get commands, options, and workflows for managing software packages in Debian-based Linux distributions.

---

## 🛠️ Commands

### **Basic Apt-get Operations**

| Command                               | Description                                                 |
| ------------------------------------- | ----------------------------------------------------------- |
| `sudo apt-get update`               | Update package lists from repositories                      |
| `sudo apt-get upgrade`              | Upgrade all installed packages                              |
| `sudo apt-get install package_name` | Install a package                                           |
| `sudo apt-get remove package_name`  | Remove a package (keep configuration files)                 |
| `sudo apt-get purge package_name`   | Completely remove a package (including configuration files) |

### **Package Information & Searching**

| Command                            | Description                                |
| ---------------------------------- | ------------------------------------------ |
| `apt-cache search package_name`  | Search for available packages              |
| `apt-cache show package_name`    | Show details about a package               |
| `apt-cache depends package_name` | List dependencies for a package            |
| `apt-cache policy package_name`  | Show package version and repository source |

### **Cleaning & Maintenance**

| Command                      | Description                 |
| ---------------------------- | --------------------------- |
| `sudo apt-get autoremove`  | Remove unused dependencies  |
| `sudo apt-get autoclean`   | Remove old package archives |
| `sudo apt-get clean`       | Clear the package cache     |
| `sudo dpkg --configure -a` | Fix broken packages         |

### **Advanced Package Management**

| Command                                           | Description                                           |
| ------------------------------------------------- | ----------------------------------------------------- |
| `sudo apt-get dist-upgrade`                     | Upgrade packages, handling dependencies intelligently |
| `sudo apt-get install --reinstall package_name` | Reinstall a package                                   |
| `sudo apt-get download package_name`            | Download a package without installing                 |
| `sudo apt-get source package_name`              | Download the source code of a package                 |

---

## 🔄 Workflows

### **Updating & Upgrading Packages**

1. Run `sudo apt-get update` to refresh package lists.
2. Upgrade installed packages using `sudo apt-get upgrade`.
3. Use `sudo apt-get dist-upgrade` for a more comprehensive upgrade.

### **Installing & Removing Packages**

1. Install a package using `sudo apt-get install package_name`.
2. Remove a package using `sudo apt-get remove package_name`.
3. Completely remove a package using `sudo apt-get purge package_name`.

### **Cleaning Up Unused Packages**

1. Remove unnecessary dependencies using `sudo apt-get autoremove`.
2. Clear old package archives using `sudo apt-get autoclean`.
3. Clean the package cache using `sudo apt-get clean`.

---

## 💡 Examples

```sh
# Install a package
sudo apt-get install firefox

# Remove a package completely
sudo apt-get purge firefox

# Fix broken packages
sudo dpkg --configure -a
```

---

## 📚 References

- **[Ubuntu/Debian Apt-get Cheat Sheet](https://www.cyberciti.biz/tips/linux-debian-package-management-cheat-sheet.html)**
- **[Apt-get Commands Guide](https://alvinalexander.com/linux-unix/ubuntu-apt-get-cache-list-search-commands-cheat-sheet/)**
- **[Linux Apt Cheat Sheet](https://linux-audit.com/cheat-sheets/apt/)**

```
<!-- end list -->
```
