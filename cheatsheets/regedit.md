title: Regedit Cheatsheet

category: Windows
description: A quick reference guide for essential Windows Registry Editor (Regedit) commands, keys, and workflows for efficient system management.

---

## 🛠️ Commands

### **Basic Registry Navigation**

| Command                | Description                        |
| ---------------------- | ---------------------------------- |
| `Win + R -> regedit` | Open Windows Registry Editor       |
| `Ctrl + F`           | Search for a registry key or value |
| `Ctrl + N`           | Create a new registry key          |
| `Ctrl + S`           | Save/export a registry key         |
| `Ctrl + P`           | Print registry settings            |

### **Registry Key Locations**

| Registry Path                  | Description                              |
| ------------------------------ | ---------------------------------------- |
| `HKEY_LOCAL_MACHINE (HKLM)`  | Stores system-wide settings              |
| `HKEY_CURRENT_USER (HKCU)`   | Stores user-specific settings            |
| `HKEY_CLASSES_ROOT (HKCR)`   | Stores file associations and COM objects |
| `HKEY_USERS (HKU)`           | Stores settings for all users            |
| `HKEY_CURRENT_CONFIG (HKCC)` | Stores hardware configuration settings   |

### **Common Registry Tweaks**

| Command                                                    | Description                       |
| ---------------------------------------------------------- | --------------------------------- |
| `HKLM\Software\Microsoft\Windows\CurrentVersion\Run`     | Manage startup programs           |
| `HKCU\Control Panel\Desktop`                             | Modify desktop settings           |
| `HKLM\SYSTEM\CurrentControlSet\Services`                 | Manage Windows services           |
| `HKLM\SYSTEM\MountedDevices`                             | View connected storage devices    |
| `HKLM\SOFTWARE\Policies\Microsoft\Windows\WindowsUpdate` | Configure Windows Update settings |

### **Security & Backup**

| Command                                                                     | Description                    |
| --------------------------------------------------------------------------- | ------------------------------ |
| `File -> Export`                                                          | Backup registry settings       |
| `File -> Import`                                                          | Restore registry settings      |
| `HKLM\SYSTEM\CurrentControlSet\Control\Session Manager\Memory Management` | Adjust virtual memory settings |
| `HKLM\SYSTEM\CurrentControlSet\Control\TimeZoneInformation`               | Modify time zone settings      |

---

## 🔄 Workflows

### **Editing a Registry Key**

1. Open Regedit (`Win + R -> regedit`).
2. Navigate to the desired registry path.
3. Right-click and select `Modify`.
4. Enter the new value and save changes.

### **Backing Up & Restoring Registry**

1. Open Regedit and select `File -> Export`.
2. Choose a location and save the `.reg` file.
3. To restore, select `File -> Import` and load the backup file.

### **Managing Startup Programs**

1. Navigate to `HKLM\Software\Microsoft\Windows\CurrentVersion\Run`.
2. Add or remove program entries to control startup behavior.

---

## 💡 Examples

```regedit
# Disable Windows startup delay
HKLM\SYSTEM\CurrentControlSet\Control\BootControl -> Set "StartupDelayInMSec" to 0

# Enable dark mode for Windows Explorer
HKCU\Software\Microsoft\Windows\CurrentVersion\Themes\Personalize -> Set "AppsUseLightTheme" to 0

# Speed up shutdown process
HKLM\SYSTEM\CurrentControlSet\Control -> Set "WaitToKillServiceTimeout" to 2000
```

---

## 📚 References

- **[Windows Registry Cheat Sheet](https://cdn.13cubed.com/downloads/windows_registry_cheat_sheet.pdf)**
- **[Windows Registry Analysis Guide](https://github.com/Ahmed-AL-Maghraby/Windows-Registry-Analysis-Cheat-Sheet)**

```
<!-- end list -->
```
