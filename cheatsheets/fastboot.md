title: Fastboot Cheatsheet

category: Android
description: A quick reference guide for essential Fastboot commands, shortcuts, and workflows for efficient device flashing and recovery.

---

## 🛠️ Commands

### **Basic Fastboot Commands**

| Command                        | Description                             |
| ------------------------------ | --------------------------------------- |
| `fastboot devices`           | List connected devices in Fastboot mode |
| `fastboot reboot`            | Restart the device                      |
| `fastboot reboot bootloader` | Restart into bootloader mode            |
| `fastboot oem unlock`        | Unlock the bootloader                   |
| `fastboot oem lock`          | Lock the bootloader                     |

### **Flashing & Installation**

| Command                                  | Description               |
| ---------------------------------------- | ------------------------- |
| `fastboot flash recovery recovery.img` | Flash a custom recovery   |
| `fastboot flash boot boot.img`         | Flash a boot image        |
| `fastboot flash system system.img`     | Flash a system image      |
| `fastboot flash userdata userdata.img` | Flash user data partition |
| `fastboot flash radio radio.img`       | Flash radio firmware      |

### **Wipe & Formatting Options**

| Command                      | Description                |
| ---------------------------- | -------------------------- |
| `fastboot erase userdata`  | Wipe user data             |
| `fastboot erase cache`     | Wipe cache partition       |
| `fastboot format system`   | Format system partition    |
| `fastboot format userdata` | Format user data partition |

### **Advanced & Debugging**

| Command                    | Description                     |
| -------------------------- | ------------------------------- |
| `fastboot getvar all`    | Display device information      |
| `fastboot boot twrp.img` | Boot into a temporary recovery  |
| `fastboot set_active a`  | Set active slot for A/B devices |
| `fastboot -w`            | Wipe all data and cache         |

---

## 🔄 Workflows

### **Unlocking the Bootloader**

1. Enable Developer Options and USB Debugging.
2. Connect the device and run `adb reboot bootloader`.
3. Execute `fastboot oem unlock` to unlock the bootloader.

### **Flashing a Custom Recovery**

1. Download the recovery image (e.g., TWRP).
2. Boot into Fastboot mode (`adb reboot bootloader`).
3. Run `fastboot flash recovery recovery.img`.
4. Reboot into recovery (`fastboot reboot recovery`).

### **Wiping & Resetting the Device**

1. Boot into Fastboot mode.
2. Run `fastboot erase userdata` and `fastboot erase cache`.
3. Format partitions using `fastboot format system`.
4. Reboot the device (`fastboot reboot`).

---

## 💡 Examples

```shell
# Flash a custom recovery
fastboot flash recovery twrp.img

# Unlock the bootloader
fastboot oem unlock

# Wipe user data and cache
fastboot erase userdata
fastboot erase cache
```

---

## 📚 References

- **[Fastboot Commands Guide](https://gist.github.com/MrHallows/a60cced443107c30d78568fe7c081a93)**
- **[ADB &amp; Fastboot Cheat Sheet](https://www.automatetheplanet.com/adb-cheat-sheet/)**
- **[Complete ADB Commands List](https://www.techworm.net/2023/08/adb-commands-list-cheat-sheet.html)**

```
<!-- end list -->
```
