title: Windows Debloating Cheatsheet

category: Windows
description: A quick reference guide for removing unnecessary apps, disabling telemetry, and optimizing Windows for better performance.

---

## 🛠️ Commands

### **Removing Bloatware Using PowerShell**

| Command                             | Description                            |
| ----------------------------------- | -------------------------------------- |
| `Get-AppxPackage                    | Select Name`                           |
| `Get-AppxPackage*appname*         | Remove-AppxPackage`                    |
| `Get-AppxPackage -AllUsers          | Remove-AppxPackage`                    |
| `Get-AppxProvisionedPackage -Online | Remove-AppxProvisionedPackage -Online` |

### **Disabling Telemetry & Tracking**

| Command                                                                    | Description                |
| -------------------------------------------------------------------------- | -------------------------- |
| `Disable-WindowsOptionalFeature -Online -FeatureName "Windows-Defender"` | Disable Windows Defender   |
| `Disable-WindowsOptionalFeature -Online -FeatureName "Cortana"`          | Disable Cortana            |
| `Disable-WindowsOptionalFeature -Online -FeatureName "Windows-Search"`   | Disable Windows Search     |
| `Disable-WindowsOptionalFeature -Online -FeatureName "Telemetry"`        | Disable telemetry tracking |

### **Optimizing Windows Services**

| Command                                 | Description                 |
| --------------------------------------- | --------------------------- |
| `sc config DiagTrack start= disabled` | Disable Diagnostic Tracking |
| `sc config WSearch start= disabled`   | Disable Windows Search      |
| `sc config SysMain start= disabled`   | Disable Superfetch          |
| `sc config Spooler start= disabled`   | Disable Print Spooler       |

### **Using Third-Party Debloating Tools**

| Tool                               | Description                               |
| ---------------------------------- | ----------------------------------------- |
| **Windows10Debloater**       | PowerShell script to remove bloatware     |
| **Chris Titus Windows Tool** | GUI-based debloating tool                 |
| **O&O ShutUp10**             | Privacy-focused Windows optimization tool |

---

## 🔄 Workflows

### **Removing Bloatware**

1. Open PowerShell as Administrator.
2. Run `Get-AppxPackage | Select Name` to list installed apps.
3. Remove unwanted apps using `Get-AppxPackage *appname* | Remove-AppxPackage`.

### **Disabling Telemetry & Tracking**

1. Open PowerShell as Administrator.
2. Run `Disable-WindowsOptionalFeature -Online -FeatureName "Telemetry"`.
3. Disable tracking services using `sc config DiagTrack start= disabled`.

### **Optimizing Windows Performance**

1. Disable unnecessary services using `sc config SysMain start= disabled`.
2. Remove pre-installed apps using `Get-AppxProvisionedPackage -Online | Remove-AppxProvisionedPackage -Online`.
3. Use third-party tools like **Windows10Debloater** for automated debloating.

---

## 💡 Examples

```powershell
# Remove Cortana
Get-AppxPackage *Cortana* | Remove-AppxPackage

# Disable Windows telemetry
Disable-WindowsOptionalFeature -Online -FeatureName "Telemetry"

# Disable unnecessary services
sc config WSearch start= disabled
```

---

## 📚 References

- **[Chris Titus Windows Debloat Guide](https://christitus.com/debloat-windows-10-2020/)**
- **[Windows10Debloater GitHub](https://github.com/Sycnex/Windows10Debloater)**

```
<!-- end list -->
```

---

This **Windows Debloating cheatsheet** strictly follows your template format and provides a complete reference! Let me know if you need modifications or additional details. 🚀
