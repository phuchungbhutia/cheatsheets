title: Android Cheatsheet

category: Android
description: A quick reference guide for essential Android commands, workflows, and examples for managing the Android operating system efficiently.

---

## 🛠️ Commands

| Command                                   | Description                                        |
| ----------------------------------------- | -------------------------------------------------- |
| `adb devices`                           | List connected Android devices                     |
| `adb reboot`                            | Reboot the device                                  |
| `adb reboot recovery`                   | Reboot into recovery mode                          |
| `adb reboot bootloader`                 | Reboot into bootloader mode                        |
| `adb shell`                             | Open an interactive shell on the device            |
| `adb install [apk]`                     | Install an APK file                                |
| `adb uninstall [package]`               | Uninstall an app                                   |
| `adb pull [remote] [local]`             | Copy a file from device to computer                |
| `adb push [local] [remote]`             | Copy a file from computer to device                |
| `adb logcat`                            | View system logs                                   |
| `adb sideload [file.zip]`               | Install an update or custom ROM from recovery mode |
| `adb backup -apk -all -f backup.ab`     | Backup all installed apps                          |
| `adb restore backup.ab`                 | Restore a backup                                   |
| `fastboot devices`                      | List connected devices in fastboot mode            |
| `fastboot flash [partition] [file.img]` | Flash an image file to a device partition          |
| `fastboot erase [partition]`            | Erase a partition                                  |
| `fastboot reboot`                       | Reboot the device                                  |
| `settings put system [key] [value]`     | Modify system settings                             |
| `settings get system [key]`             | Retrieve current system settings                   |

---

## 🔄 Workflows

### **Installing and Managing Apps**

1. Enable USB debugging on your device.
2. Connect your device to the computer via USB.
3. Install an APK file using ADB:
   ```bash
   adb install myapp.apk
   ```
4. Uninstall an app:
   ```bash
   adb uninstall com.example.myapp
   ```

### **Flashing a Custom ROM**

1. Boot into fastboot mode:
   ```bash
   adb reboot bootloader
   ```
2. Flash the custom ROM:
   ```bash
   fastboot flash system custom_rom.img
   ```
3. Reboot the device:
   ```bash
   fastboot reboot
   ```

### **Backing Up and Restoring Apps**

1. Create a backup of installed apps:
   ```bash
   adb backup -apk -all -f backup.ab
   ```
2. Restore the backup:
   ```bash
   adb restore backup.ab
   ```

---

## 💡 Examples

```bash
# View device logs for debugging
adb logcat

# Copy a file from the device to the computer
adb pull /sdcard/sample.txt ~/Documents/

# Change display brightness settings
settings put system screen_brightness 150

# Capture a screenshot on an Android device
adb shell screencap -p /sdcard/screenshot.png
adb pull /sdcard/screenshot.png ~/Desktop/
```

---

## 📚 References

- **Android Debug Bridge (ADB) Documentation**: [https://developer.android.com/studio/command-line/adb](https://developer.android.com/studio/command-line/adb)
- **Fastboot Guide**: [https://developer.android.com/studio/command-line/fastboot](https://developer.android.com/studio/command-line/fastboot)
- **Android Developers Guide**: [https://developer.android.com/](https://developer.android.com/)

```
<!-- end list -->
```
