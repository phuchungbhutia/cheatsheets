title: ADB Cheatsheet

category: Android
description: A quick reference guide for essential ADB commands, workflows, and examples for efficient Android device management.

---

## 🛠️ Commands

### **Basic ADB Commands**

| Command                   | Description                  |
| ------------------------- | ---------------------------- |
| `adb devices`           | Lists connected devices      |
| `adb start-server`      | Starts the ADB server        |
| `adb kill-server`       | Stops the ADB server         |
| `adb reboot`            | Reboots the device           |
| `adb reboot recovery`   | Reboots into recovery mode   |
| `adb reboot bootloader` | Reboots into bootloader mode |

### **File Operations**

| Command                       | Description                     |
| ----------------------------- | ------------------------------- |
| `adb push <local> <remote>` | Copies a file from PC to device |
| `adb pull <remote> <local>` | Copies a file from device to PC |
| `adb shell ls`              | Lists files in a directory      |
| `adb shell rm <file>`       | Deletes a file                  |

### **App Management**

| Command                          | Description              |
| -------------------------------- | ------------------------ |
| `adb install <apk>`            | Installs an APK file     |
| `adb uninstall <package>`      | Uninstalls an app        |
| `adb shell pm list packages`   | Lists installed packages |
| `adb shell pm clear <package>` | Clears app data          |

### **Device Information & Debugging**

| Command                       | Description                |
| ----------------------------- | -------------------------- |
| `adb shell getprop`         | Displays system properties |
| `adb shell dumpsys battery` | Shows battery status       |
| `adb shell wm size`         | Displays screen resolution |
| `adb shell logcat`          | Shows system logs          |

### **Screen Capture & Recording**

| Command                                      | Description                    |
| -------------------------------------------- | ------------------------------ |
| `adb shell screencap /sdcard/screen.png`   | Captures a screenshot          |
| `adb pull /sdcard/screen.png`              | Transfers screenshot to PC     |
| `adb shell screenrecord /sdcard/video.mp4` | Records screen                 |
| `adb pull /sdcard/video.mp4`               | Transfers recorded video to PC |

---

## 🔄 Workflows

### **Installing & Managing Apps**

1. Connect the device via USB and enable debugging.
2. Install an APK:
   ```shell
   adb install myapp.apk
   ```
3. Uninstall an app:
   ```shell
   adb uninstall com.example.app
   ```

### **Capturing & Transferring Screenshots**

1. Capture a screenshot:
   ```shell
   adb shell screencap /sdcard/screen.png
   ```
2. Transfer it to PC:
   ```shell
   adb pull /sdcard/screen.png
   ```

### **Checking Device Logs**

1. Open a terminal and run:
   ```shell
   adb shell logcat
   ```
2. Filter logs for a specific app:
   ```shell
   adb shell logcat | grep com.example.app
   ```

---

## 💡 Examples

```shell
# Install an APK
adb install myapp.apk

# Capture a screenshot
adb shell screencap /sdcard/screen.png

# Check battery status
adb shell dumpsys battery
```

---

## 📚 References

- **Most Complete ADB Cheat Sheet**: [Automate The Planet](https://www.automatetheplanet.com/adb-cheat-sheet/)
- **ADB Commands List for Android**: [Team Android](https://teamandroid.com/adb-commands-list/)

```
<!-- end list -->
```
