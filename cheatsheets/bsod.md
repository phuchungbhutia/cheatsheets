title: BSOD Cheatsheet
category: Windows
description: A structured reference guide for understanding and troubleshooting BSOD errors, including common causes, error codes, and solutions.

---

## 💻 **Core Principles of BSOD Troubleshooting**

### **Fundamental Concepts**

| Principle                                | Description                                                       |
| ---------------------------------------- | ----------------------------------------------------------------- |
| **Error Identification**           | BSOD displays a stop code to diagnose the issue                   |
| **Hardware & Driver Issues**       | Faulty drivers or hardware can trigger BSOD                       |
| **Memory & Storage Problems**      | Corrupt RAM or disk errors may cause crashes                      |
| **System Updates & Compatibility** | Incompatible updates or software conflicts can lead to BSOD       |
| **Recovery & Prevention**          | Safe mode, system restore, and driver updates help resolve issues |

### **Common BSOD Error Codes & Solutions**

| Error Code           | Cause                | Recommended Fix                            |
| -------------------- | -------------------- | ------------------------------------------ |
| **0x0000007E** | Driver conflict      | Update or reinstall drivers                |
| **0x00000050** | Faulty RAM           | Run memory diagnostics                     |
| **0x000000F4** | Disk failure         | Check storage health and replace if needed |
| **0x0000001A** | Memory corruption    | Scan for malware and faulty hardware       |
| **0x000000D1** | Network driver issue | Update network adapter drivers             |

---

## 🔄 **Workflows**

### **Optimizing BSOD Recovery**

1. **Restart in Safe Mode** to troubleshoot without third-party drivers.
2. **Check Event Viewer Logs** for detailed error reports.
3. **Run System File Checker (SFC)** to repair corrupted files.

### **Enhancing System Stability**

1. **Keep drivers updated** to prevent compatibility issues.
2. **Perform regular disk checks** to detect storage errors.
3. **Monitor system temperatures** to avoid overheating-related crashes.

---

## 💡 **Examples**

```plaintext
# Example: Running System File Checker (SFC)
1. Open Command Prompt as Administrator.  
2. Type `sfc /scannow` and press Enter.  
3. Wait for the scan to complete and follow repair instructions.  
```

---

## 📚 **References**

- **[BSOD Troubleshooting Guide](https://www.jotform.com/form-templates/bsod-blue-screen-of-death-fix-form)**
- **[Windows Stop Code List](https://github.com/AmanoTeam/BSoD)**
- **[BSOD Error Code Lookup](https://www.figma.com/community/file/1396393509463368756/blue-screen-of-death-design-template-in-three-languages)**

```
<!-- end list -->
```