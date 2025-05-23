title: Task Manager Cheatsheet

category: Windows 
description: A quick reference guide for essential Task Manager commands, process management, and system performance monitoring.

---

## 🛠️ Commands

### **Launching Task Manager**

| Command                             | Description                            |
| ----------------------------------- | -------------------------------------- |
| `taskmgr`                         | Open Task Manager                      |
| `Ctrl + Shift + Esc`              | Open Task Manager directly             |
| `Ctrl + Alt + Del > Task Manager` | Open Task Manager via security options |
| `taskmgr /startup`                | Open the Startup tab directly          |

### **Managing Processes**

| Command                                | Description                                   |
| -------------------------------------- | --------------------------------------------- |
| `taskmgr > Processes`                | View running processes                        |
| `taskkill /IM <process_name>.exe /F` | Forcefully terminate a process                |
| `tasklist`                           | List all running processes via Command Prompt |
| `tasklist /svc`                      | List processes with associated services       |

### **Monitoring System Performance**

| Command                   | Description                                             |
| ------------------------- | ------------------------------------------------------- |
| `taskmgr > Performance` | View CPU, memory, disk, and network usage               |
| `resmon`                | Open Resource Monitor for detailed performance analysis |
| `perfmon`               | Open Performance Monitor for system diagnostics         |

### **Managing Startup Programs**

| Command                                                          | Description                                      |
| ---------------------------------------------------------------- | ------------------------------------------------ |
| `taskmgr > Startup`                                            | View and disable startup programs                |
| `msconfig > Startup`                                           | Manage startup programs via System Configuration |
| `regedit > HKLM\Software\Microsoft\Windows\CurrentVersion\Run` | Modify startup programs via Registry Editor      |

### **Viewing User Sessions & Services**

| Command                | Description                   |
| ---------------------- | ----------------------------- |
| `taskmgr > Users`    | View active user sessions     |
| `taskmgr > Services` | Manage system services        |
| `services.msc`       | Open Windows Services Manager |

---

## 🔄 Workflows

### **Terminating Unresponsive Applications**

1. Open Task Manager using `Ctrl + Shift + Esc`.
2. Navigate to the **Processes** tab.
3. Select the unresponsive application and click **End Task**.

### **Optimizing Windows Startup**

1. Open Task Manager and go to the **Startup** tab.
2. Disable unnecessary startup programs.
3. Apply changes and restart the system for optimization.

### **Monitoring System Performance**

1. Open Task Manager and go to the **Performance** tab.
2. Analyze CPU, memory, disk, and network usage.
3. Use **Resource Monitor** (`resmon`) for detailed insights.

---

## 💡 Examples

```sh
# Open Task Manager
taskmgr

# Forcefully terminate a process
taskkill /IM chrome.exe /F

# List all running processes
tasklist
```

---

## 📚 References

- **[Windows Run Commands Cheat Sheet](https://serverspace.us/support/help/windows-run-commands-cheat-sheet/)**
- **[Windows Run Commands Cheat Sheet: 30+ Essential Commands](https://serverspace.io/support/help/windows-run-commands-cheat-sheet/)**
- **[Windows Run Commands Cheatsheet - StudyLib](https://studylib.net/doc/27490687/run-commands-cheatsheet)**

```
<!-- end list -->
```
