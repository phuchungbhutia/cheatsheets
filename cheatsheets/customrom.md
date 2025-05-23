title: Custom ROM Cheatsheet

category: Android
description: A quick reference guide for essential Custom ROM installation steps, tools, and workflows for optimizing Android devices.

---

## 🛠️ Commands

### **Bootloader Unlocking**

| Command                      | Description                           |
| ---------------------------- | ------------------------------------- |
| `fastboot oem unlock`      | Unlocks the bootloader (OEM-specific) |
| `fastboot flashing unlock` | Unlocks bootloader on newer devices   |
| `fastboot oem device-info` | Checks bootloader unlock status       |

### **Recovery & Flashing Tools**

| Tool                   | Description                                 |
| ---------------------- | ------------------------------------------- |
| `TWRP Recovery`      | Custom recovery for flashing ROMs           |
| `OrangeFox Recovery` | Alternative recovery with advanced features |
| `ADB & Fastboot`     | Essential tools for flashing and debugging  |
| `Magisk`             | Rooting tool for systemless modifications   |

### **Installing a Custom ROM**

| Command                                  | Description                     |
| ---------------------------------------- | ------------------------------- |
| `adb sideload rom.zip`                 | Installs a ROM via ADB sideload |
| `fastboot flash boot boot.img`         | Flashes a boot image            |
| `fastboot flash recovery recovery.img` | Installs a custom recovery      |
| `fastboot erase userdata`              | Wipes user data before flashing |

### **Rooting & Modifications**

| Command                          | Description                  |
| -------------------------------- | ---------------------------- |
| `fastboot boot twrp.img`       | Temporarily boots into TWRP  |
| `adb push magisk.zip /sdcard/` | Transfers Magisk for rooting |
| `adb shell su`                 | Grants superuser access      |
| `adb reboot recovery`          | Reboots into recovery mode   |

### **Backup & Restore**

| Command                                       | Description                          |
| --------------------------------------------- | ------------------------------------ |
| `adb backup -apk -shared -all -f backup.ab` | Creates a full backup                |
| `adb restore backup.ab`                     | Restores a backup                    |
| `twrp backup`                               | Creates a full system backup in TWRP |
| `twrp restore`                              | Restores a backup from TWRP          |

---

## 🔄 Workflows

### **Unlocking Bootloader & Installing Custom Recovery**

1. Enable Developer Options & OEM Unlocking.
2. Boot into fastboot mode (`adb reboot bootloader`).
3. Unlock bootloader (`fastboot oem unlock`).
4. Flash custom recovery (`fastboot flash recovery twrp.img`).

### **Flashing a Custom ROM**

1. Boot into recovery (`adb reboot recovery`).
2. Wipe system, data, and cache.
3. Flash the ROM (`adb sideload rom.zip`).
4. Reboot the device (`adb reboot`).

### **Rooting with Magisk**

1. Boot into recovery (`adb reboot recovery`).
2. Flash Magisk (`adb sideload magisk.zip`).
3. Reboot and verify root access (`adb shell su`).

---

## 💡 Examples

```shell
# Unlock bootloader
fastboot oem unlock

# Flash custom recovery
fastboot flash recovery twrp.img

# Install a custom ROM
adb sideload lineageos.zip
```

---

## 📚 References

- **Custom ROM Installation Guide**: [GitHub](https://github.com/CyberT33N/custom-rom-cheat-sheet)
- **TWRP Recovery & Flashing Guide**: [XDA Developers](https://forum.xda-developers.com/)
- **Magisk Rooting Guide**: [Magisk GitHub](https://github.com/topjohnwu/Magisk)

```
<!-- end list -->
```
