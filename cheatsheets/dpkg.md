title: Dpkg Cheatsheet

category: Linux
description: A quick reference guide for managing Debian-based packages using Dpkg, including installation, removal, querying, and troubleshooting.

---

## 🛠️ Commands

### **Basic Dpkg Operations**

| Command                  | Description                                                 |
| ------------------------ | ----------------------------------------------------------- |
| `dpkg -l`              | List all installed packages                                 |
| `dpkg -i package.deb`  | Install a `.deb` package manually                         |
| `dpkg -r package_name` | Remove a package (but keep configuration files)             |
| `dpkg -P package_name` | Completely remove a package (including configuration files) |
| `dpkg --configure -a`  | Fix broken packages and configure pending installations     |

### **Querying Installed Packages**

| Command                   | Description                             |
| ------------------------- | --------------------------------------- |
| `dpkg -s package_name`  | Show details about an installed package |
| `dpkg -L package_name`  | List all files installed by a package   |
| `dpkg -S /path/to/file` | Find which package owns a specific file |
| `dpkg --get-selections    | grep package_name`                      |

### **Extracting & Inspecting Packages**

| Command                               | Description                                                                            |
| ------------------------------------- | -------------------------------------------------------------------------------------- |
| `dpkg -c package.deb`               | List files inside a `.deb` package without installing                                |
| `dpkg -x package.deb /destination/` | Extract package contents for manual inspection                                         |
| `dpkg-deb --info package.deb`       | Show metadata (version, architecture, dependencies) of a `.deb` package              |
| `dpkg-deb --control package.deb`    | Extract control files (`control`, `preinst`, `postinst`) from a `.deb` package |

### **Advanced Package Management**

| Command                                           | Description                                                  |
| ------------------------------------------------- | ------------------------------------------------------------ |
| `dpkg --verify`                                 | Verify installed packages for integrity issues               |
| `dpkg --audit`                                  | Detect partially installed or broken packages                |
| `dpkg --force-all -i package.deb`               | Force install a package, even if there are dependency errors |
| `dpkg --force-remove-reinstreq -r package_name` | Force remove a package when dependencies are broken          |

---

## 🔄 Workflows

### **Installing a `.deb` Package**

1. Download the required `.deb` package.
2. Run `dpkg -i package.deb` to install it manually.
3. If dependencies are missing, run `sudo apt install -f` to resolve them.

### **Removing a Package Completely**

1. Run `dpkg -r package_name` to remove the package while keeping configs.
2. Use `dpkg -P package_name` for a complete removal (including configs).
3. Verify removal using `dpkg -l | grep package_name`.

### **Fixing Broken Packages**

1. Run `dpkg --configure -a` to configure pending installations.
2. Use `sudo apt install -f` to fix missing dependencies.
3. Check package errors using `dpkg --audit`.

---

## 💡 Examples

```sh
# Install a package manually
dpkg -i example.deb

# Completely remove a package
dpkg -P example-package

# Find which package owns a specific file
dpkg -S /usr/bin/example
```

---

## 📚 References

- **[Dpkg Command Cheat Sheet](https://www.cyberciti.biz/howto/question/linux/dpkg-cheat-sheet.php)**
- **[Advanced Package Management with Dpkg](https://www.golinuxcloud.com/dpkg-command-in-linux/)**
- **[Beginners Guide to Dpkg](https://linuxconfig.org/beginners-guide-to-dpkg-linux-command)**

```
<!-- end list -->
```
