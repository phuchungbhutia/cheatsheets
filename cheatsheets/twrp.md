title: TWRP Cheatsheet

category: Android
description: A quick reference guide for essential TWRP commands, shortcuts, and workflows for efficient device recovery and customization.

---

## 🛠️ Commands

### **Basic Navigation & Recovery Options**

| Command                  | Description                                |
| ------------------------ | ------------------------------------------ |
| `Power + Volume Up`    | Boot into recovery mode (varies by device) |
| `Swipe to Confirm`     | Execute actions in TWRP                    |
| `Reboot -> System`     | Restart device normally                    |
| `Reboot -> Recovery`   | Restart into TWRP recovery                 |
| `Reboot -> Bootloader` | Restart into fastboot mode                 |

### **Backup & Restore**

| Command                         | Description                                    |
| ------------------------------- | ---------------------------------------------- |
| `Backup -> Select Partitions` | Choose partitions to back up                   |
| `Restore -> Select Backup`    | Restore a previous backup                      |
| `Backup -> Compression`       | Enable compressed backups                      |
| `Backup -> Storage`           | Select internal or external storage for backup |

### **Wipe & Formatting Options**

| Command                   | Description                        |
| ------------------------- | ---------------------------------- |
| `Wipe -> Factory Reset` | Wipe data, cache, and Dalvik       |
| `Wipe -> Advanced Wipe` | Select specific partitions to wipe |
| `Format Data`           | Completely erase internal storage  |
| `Mount -> Enable MTP`   | Allow file transfer via USB        |

### **Flashing & Installation**

| Command                                | Description                         |
| -------------------------------------- | ----------------------------------- |
| `Install -> Select ZIP`              | Flash custom ROMs, kernels, or mods |
| `Install -> Select IMG`              | Flash recovery or boot images       |
| `Install -> Enable Zip Verification` | Ensure integrity of ZIP files       |
| `Install -> Wipe Cache/Dalvik`       | Clear cache after flashing          |

### **Advanced & Terminal Commands**

| Command                                  | Description                 |
| ---------------------------------------- | --------------------------- |
| `Advanced -> File Manager`             | Browse and manage files     |
| `Advanced -> Terminal`                 | Execute shell commands      |
| `adb sideload filename.zip`            | Flash ZIP via ADB           |
| `fastboot flash recovery recovery.img` | Flash recovery via fastboot |

---

## 🔄 Workflows

### **Creating & Restoring Backups**

1. Open TWRP and navigate to `Backup`.
2. Select partitions to back up (System, Data, Boot).
3. Choose storage location and confirm backup.
4. To restore, go to `Restore` and select a backup file.

### **Flashing a Custom ROM**

1. Download the ROM ZIP file and transfer it to the device.
2. Boot into TWRP and select `Install`.
3. Choose the ZIP file and swipe to confirm.
4. Wipe cache and reboot the system.

### **Using ADB & Fastboot for Recovery**

1. Connect the device to a PC via USB.
2. Open a terminal and run `adb devices` to verify connection.
3. Use `adb sideload filename.zip` to flash a ZIP file.
4. Use `fastboot flash recovery recovery.img` to install a new recovery.

---

## 💡 Examples

```shell
# Flash a custom ROM via ADB sideload
adb sideload lineageos.zip

# Format data partition
fastboot format userdata

# Flash a new recovery image
fastboot flash recovery twrp.img
```

---

## 📚 References

- **[TWRP Official Documentation](https://twrp.me/)**
- **[XDA Guide to TWRP](https://xdaforums.com/t/guide-to-twrp-building.4515895/)**
- **[TWRP Tips &amp; Tricks](https://android.gadgethacks.com/collection/twrp-tips-tricks/)**

```
<!-- end list -->
```
