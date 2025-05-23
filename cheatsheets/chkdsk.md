title: CHKDSK Cheatsheet

category: Disk Utility
description: A quick reference guide for essential CHKDSK commands, workflows, and examples for diagnosing and repairing disk errors in Windows.

---

## 🛠️ Commands

### **Basic CHKDSK Usage**

| Command       | Description                                    |
| ------------- | ---------------------------------------------- |
| `chkdsk`    | Runs a basic scan of the disk                  |
| `chkdsk C:` | Scans the C: drive for errors                  |
| `chkdsk /F` | Fixes errors on the disk                       |
| `chkdsk /R` | Locates bad sectors and recovers readable data |
| `chkdsk /X` | Forces the volume to dismount before scanning  |

### **Advanced CHKDSK Parameters**

| Command            | Description                                                   |
| ------------------ | ------------------------------------------------------------- |
| `chkdsk /B`      | Clears bad clusters and rescans the drive (NTFS only)         |
| `chkdsk /I`      | Performs a less thorough index check (NTFS only)              |
| `chkdsk /C`      | Skips checking cycles within the folder structure (NTFS only) |
| `chkdsk /L:size` | Changes the size of the NTFS transaction log                  |
| `chkdsk /scan`   | Runs an online scan without dismounting the drive             |

### **CHKDSK with Fix & Recovery**

| Command                   | Description                                      |
| ------------------------- | ------------------------------------------------ |
| `chkdsk C: /F /R /X`    | Fixes errors, recovers data, and forces dismount |
| `chkdsk D: /scan /perf` | Runs a high-performance scan on the D: drive     |
| `chkdsk /spotfix`       | Quickly fixes errors without a full scan         |

### **CHKDSK in Windows Recovery Mode**

| Command                          | Description                                       |
| -------------------------------- | ------------------------------------------------- |
| `chkdsk C: /F /R`              | Run from recovery mode to fix errors              |
| `chkdsk C: /offlinescanandfix` | Performs an offline scan and repair               |
| `chkdsk C: /forceofflinefix`   | Forces offline repair without online verification |

---

## 🔄 Workflows

### **Running CHKDSK to Fix Disk Errors**

1. Open Command Prompt as Administrator.
2. Type the command:
   ```shell
   chkdsk C: /F /R /X
   ```
3. Restart the computer if prompted.

### **Checking a Drive Without Dismounting**

1. Open Command Prompt.
2. Run the command:
   ```shell
   chkdsk D: /scan /perf
   ```
3. Review the scan results for errors.

### **Using CHKDSK in Recovery Mode**

1. Boot into Windows Recovery Mode.
2. Open Command Prompt.
3. Run the command:
   ```shell
   chkdsk C: /offlinescanandfix
   ```

---

## 💡 Examples

```shell
# Scan and fix errors on the C: drive
chkdsk C: /F /R /X

# Run a quick scan without fixing errors
chkdsk D: /scan

# Perform an offline scan and repair
chkdsk C: /offlinescanandfix
```

---

## 📚 References

- **CHKDSK Commands & Usage Guide**: [WindowsLoop](https://windowsloop.com/chkdsk-commands-and-usage/)
- **CHKDSK Troubleshooting & Fixing Disk Errors**: [1Gbits](https://1gbits.com/blog/chkdsk-commands/)
- **CHKDSK Command with Examples**: [PhoenixNAP](https://phoenixnap.com/kb/chkdsk-command)

```
<!-- end list -->
```
