title: Flathub Cheatsheet

category: Linux
description: A quick reference guide for essential Flathub commands, options, and workflows for managing Flatpak applications.

---

## 🛠️ Commands

### **Basic Flathub Operations**

| Command                                                                                     | Description                              |
| ------------------------------------------------------------------------------------------- | ---------------------------------------- |
| `flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo` | Add Flathub as a Flatpak repository      |
| `flatpak remotes`                                                                         | List all configured Flatpak repositories |
| `flatpak search application_name`                                                         | Search for applications in Flathub       |
| `flatpak install flathub application_id`                                                  | Install an application from Flathub      |
| `flatpak uninstall application_id`                                                        | Remove an installed Flatpak application  |

### **Managing Installed Applications**

| Command                           | Description                                     |
| --------------------------------- | ----------------------------------------------- |
| `flatpak list`                  | List all installed Flatpak applications         |
| `flatpak info application_id`   | Show details about an installed application     |
| `flatpak update`                | Update all installed Flatpak applications       |
| `flatpak update application_id` | Update a specific Flatpak application           |
| `flatpak uninstall --unused`    | Remove unused Flatpak runtimes and dependencies |

### **Running & Configuring Applications**

| Command                                               | Description                                       |
| ----------------------------------------------------- | ------------------------------------------------- |
| `flatpak run application_id`                        | Launch an installed Flatpak application           |
| `flatpak override application_id --filesystem=home` | Grant an application access to the home directory |
| `flatpak override --reset application_id`           | Reset permissions for an application              |
| `flatpak ps`                                        | Show currently running Flatpak applications       |
| `flatpak kill application_id`                       | Force-stop a running Flatpak application          |

### **Advanced Flathub Management**

| Command                                            | Description                                   |
| -------------------------------------------------- | --------------------------------------------- |
| `flatpak repair`                                 | Check and fix Flatpak installation issues     |
| `flatpak permission-show application_id`         | View permissions granted to an application    |
| `flatpak permission-reset application_id`        | Reset permissions for an application          |
| `flatpak remote-delete flathub`                  | Remove Flathub from the system                |
| `flatpak uninstall --delete-data application_id` | Remove an application and its associated data |

---

## 🔄 Workflows

### **Installing & Managing Applications from Flathub**

1. Add Flathub repository using `flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo`.
2. Search for applications using `flatpak search application_name`.
3. Install an application using `flatpak install flathub application_id`.
4. Update installed applications using `flatpak update`.

### **Configuring Application Permissions**

1. Check permissions using `flatpak permission-show application_id`.
2. Grant filesystem access using `flatpak override application_id --filesystem=home`.
3. Reset permissions using `flatpak override --reset application_id`.

### **Cleaning Up Unused Applications & Dependencies**

1. List installed applications using `flatpak list`.
2. Remove unused runtimes using `flatpak uninstall --unused`.
3. Delete application data using `flatpak uninstall --delete-data application_id`.

---

## 💡 Examples

```sh
# Install an application from Flathub
flatpak install flathub org.mozilla.firefox

# Update all installed Flatpak applications
flatpak update

# Remove an application and its data
flatpak uninstall --delete-data org.mozilla.firefox
```

---

## 📚 References

- **[Flatpak Cheat Sheet](https://www.ditig.com/flatpak-cheat-sheet)**
- **[Flathub Documentation](https://docs.flathub.org/)**

```
<!-- end list -->
```
