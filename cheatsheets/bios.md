title: BIOS Cheatsheet

category: System
description: A quick reference guide for essential BIOS settings, commands, and workflows for efficient system management.

---

## 🛠️ Commands

### **Basic BIOS Navigation**

| Command        | Description                      |
| -------------- | -------------------------------- |
| `F2 / Del`   | Enter BIOS setup during boot     |
| `Esc`        | Exit BIOS without saving changes |
| `F10`        | Save changes and exit BIOS       |
| `Arrow Keys` | Navigate through BIOS menus      |
| `Enter`      | Select an option                 |

### **Boot & Startup Configuration**

| Command         | Description                                |
| --------------- | ------------------------------------------ |
| `Boot Order`  | Set priority for boot devices              |
| `Secure Boot` | Enable/disable secure boot protection      |
| `Fast Boot`   | Speed up boot process                      |
| `Legacy Boot` | Enable compatibility for older OS versions |
| `UEFI / CSM`  | Switch between UEFI and legacy modes       |

### **Hardware & Performance Settings**

| Command               | Description                             |
| --------------------- | --------------------------------------- |
| `CPU Configuration` | Adjust processor settings               |
| `RAM XMP Profile`   | Enable high-performance memory profiles |
| `Fan Control`       | Adjust cooling fan speeds               |
| `Power Management`  | Configure sleep and wake settings       |

### **Security & Passwords**

| Command                           | Description                            |
| --------------------------------- | -------------------------------------- |
| `BIOS Password`                 | Set a password for BIOS access         |
| `HDD Password`                  | Secure hard drive access               |
| `TPM (Trusted Platform Module)` | Enable security chip for encryption    |
| `Virtualization`                | Enable/disable hardware virtualization |

### **BIOS Update & Recovery**

| Command                | Description                     |
| ---------------------- | ------------------------------- |
| `Flash BIOS`         | Update BIOS firmware            |
| `Backup BIOS`        | Save current BIOS settings      |
| `Reset to Defaults`  | Restore factory BIOS settings   |
| `BIOS Recovery Mode` | Recover corrupted BIOS firmware |

---

## 🔄 Workflows

### **Changing Boot Order**

1. Enter BIOS (`F2` or `Del`).
2. Navigate to `Boot` settings.
3. Adjust boot priority using arrow keys.
4. Save changes (`F10`) and restart.

### **Updating BIOS Firmware**

1. Download the latest BIOS update from the manufacturer.
2. Copy the update file to a USB drive.
3. Enter BIOS and select `Flash BIOS`.
4. Follow on-screen instructions to complete the update.

### **Resetting BIOS to Default Settings**

1. Enter BIOS (`F2` or `Del`).
2. Navigate to `Exit` or `Reset`.
3. Select `Restore Defaults`.
4. Save changes (`F10`) and restart.

---

## 💡 Examples

```shell
# Check BIOS version in Windows
wmic bios get smbiosbiosversion

# Enable virtualization in BIOS
Navigate to Advanced > CPU Configuration > Virtualization > Enable

# Reset BIOS settings
Select "Restore Defaults" in BIOS menu and press F10 to save
```

---

## 📚 References

- **BIOS Cheat Sheet on GitHub**: [GitHub Repository](https://github.com/Justme488/BIOS-Cheat-Sheet/blob/master/BIOS%20Cheat%20Sheet.md)
- **BIOS Configuration Guide**: [Reddit Discussion](https://www.reddit.com/r/EmuDeck/comments/yfpo88/bios_files_and_where_to_place_them/)

```
<!-- end list -->
```
