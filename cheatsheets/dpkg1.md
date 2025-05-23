title: Dpkg Cheatsheet

category: Linux
description: A quick reference guide for essential Dpkg commands, options, and workflows for managing Debian-based packages.

---

## 🛠️ Commands

### **Basic Dpkg Operations**

| Command                  | Description                                                 |
| ------------------------ | ----------------------------------------------------------- |
| `dpkg -l`              | List all installed packages                                 |
| `dpkg -i package.deb`  | Install a `.deb` package                                  |
| `dpkg -r package_name` | Remove a package (without configuration files)              |
| `dpkg -P package_name` | Completely remove a package (including configuration files) |
| `dpkg --configure -a`  | Fix broken packages and configure pending installations     |

### **Querying Installed Packages**

| Command                   | Description                             |
| ------------------------- | --------------------------------------- |
| `dpkg -s package_name`  | Show details about an installed package |
| `dpkg -L package_name`  | List files installed by a package       |
| `dpkg -S /path/to/file` | Find which package owns a specific file |
| `dpkg --get-selections    | grep package_name`                      |

### **Extracting & Inspecting Packages**

| Command                               | Description                                   |
| ------------------------------------- | --------------------------------------------- |
| `dpkg -c package.deb`               | List files inside a `.deb` package          |
| `dpkg -x package.deb /destination/` | Extract package contents without installing   |
| `dpkg-deb --info package.deb`       | Show metadata of a `.deb` package           |
| `dpkg-deb --control package.deb`    | Extract control files from a `.deb` package |

### **Advanced Package Management**

| Command                                           | Description                                     |
| ------------------------------------------------- | ----------------------------------------------- |
| `dpkg --verify`                                 | Verify installed packages for integrity         |
| `dpkg --audit`                                  | Check for partially installed packages          |
| `dpkg --force-all -i package.deb`               | Force install a package, ignoring errors        |
| `dpkg --force-remove-reinstreq -r package_name` | Force remove a package with broken dependencies |

---

## 🔄 Workflows

### **Installing a `.deb` Package**

1. Download the `.deb` package.
2. Run `dpkg -i package.deb` to install it.
3. If dependencies are missing, run `sudo apt install -f`.

### **Removing a Package Completely**

1. Run `dpkg -r package_name` to remove the package.
2. Use `dpkg -P package_name` to delete configuration files.
3. Verify removal using `dpkg -l | grep package_name`.

### **Fixing Broken Packages**

1. Run `dpkg --configure -a` to configure pending installations.
2. Use `sudo apt install -f` to fix missing dependencies.
3. Check package status using `dpkg --audit`.

---

## 💡 Examples

```sh
# Install a package
dpkg -i example.deb

# Remove a package completely
dpkg -P example-package

# Find which package owns a file
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
