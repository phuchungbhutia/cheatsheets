title: MSConfig Cheatsheet

category: Windows
description: A quick reference guide for essential MSConfig commands, startup management, and troubleshooting techniques.

---

## 🛠️ Commands

### **Launching MSConfig**

| Command                | Description                           |
| ---------------------- | ------------------------------------- |
| `msconfig`           | Open the System Configuration utility |
| `msconfig /boot`     | Open the Boot tab directly            |
| `msconfig /services` | Open the Services tab directly        |
| `msconfig /startup`  | Open the Startup tab directly         |

### **Managing Startup Programs**

| Command                                                          | Description                                 |
| ---------------------------------------------------------------- | ------------------------------------------- |
| `msconfig > Startup`                                           | View and disable startup programs           |
| `taskmgr > Startup`                                            | Manage startup programs via Task Manager    |
| `regedit > HKLM\Software\Microsoft\Windows\CurrentVersion\Run` | Modify startup programs via Registry Editor |

### **Boot Options & Troubleshooting**

| Command                           | Description                                 |
| --------------------------------- | ------------------------------------------- |
| `msconfig > Boot > Safe Boot`   | Enable Safe Mode                            |
| `msconfig > Boot > No GUI Boot` | Disable Windows boot animation              |
| `msconfig > Boot > Boot Log`    | Generate a boot log for troubleshooting     |
| `msconfig > Boot > Base Video`  | Start Windows with minimal graphics drivers |

### **Managing Windows Services**

| Command                 | Description                              |
| ----------------------- | ---------------------------------------- |
| `msconfig > Services` | View and disable unnecessary services    |
| `services.msc`        | Open Windows Services Manager            |
| `tasklist /svc`       | List running services via Command Prompt |

---

## 🔄 Workflows

### **Optimizing Windows Startup**

1. Open MSConfig using `msconfig`.
2. Navigate to the **Startup** tab and disable unnecessary programs.
3. Apply changes and restart the system for optimization.

### **Troubleshooting Boot Issues**

1. Open MSConfig and go to the **Boot** tab.
2. Enable **Safe Boot** for troubleshooting.
3. Use **Boot Log** to analyze startup errors.

### **Managing Windows Services for Performance**

1. Open MSConfig and go to the **Services** tab.
2. Disable non-essential services to improve system performance.
3. Use `services.msc` for advanced service management.

---

## 💡 Examples

```sh
# Open MSConfig
msconfig

# Enable Safe Mode
msconfig > Boot > Safe Boot

# Disable unnecessary startup programs
msconfig > Startup > Disable unwanted apps
```

---

## 📚 References

- **[Windows Run Commands Cheat Sheet](https://serverspace.io/support/help/windows-run-commands-cheat-sheet/)**
- **[PC Tips Run Commands Cheatsheet](https://www.pctips.com/wp-content/uploads/pctips/pdfs/run-commands-cheatsheet-by-pctipscom.pdf)**

```
<!-- end list -->
```
