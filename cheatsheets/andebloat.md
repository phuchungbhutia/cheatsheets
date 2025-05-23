title: Android Debloating Cheatsheet

category: Android
description: A quick reference guide for removing unnecessary apps, disabling background services, and optimizing Android for better performance.

---

## 🛠️ Commands

### **Using ADB to Remove Bloatware**

| Command                                               | Description                                 |
| ----------------------------------------------------- | ------------------------------------------- |
| `adb devices`                                       | Verify connected devices                    |
| `adb shell pm list packages`                        | List all installed packages                 |
| `adb shell pm uninstall --user 0 <package-name>`    | Uninstall a system app for the current user |
| `adb shell pm disable-user --user 0 <package-name>` | Disable an app instead of uninstalling      |
| `adb shell pm list packages -3`                     | List all user-installed apps                |

### **Disabling Background Services**

| Command                                                           | Description              |
| ----------------------------------------------------------------- | ------------------------ |
| `adb shell settings put global hidden_api_policy 1`             | Enable hidden API access |
| `adb shell am force-stop <package-name>`                        | Force stop an app        |
| `adb shell settings put secure location_providers_allowed -gps` | Disable GPS tracking     |

### **Using GUI-Based Debloating Tools**

| Tool                                        | Description                                    |
| ------------------------------------------- | ---------------------------------------------- |
| **Universal Android Debloater (UAD)** | Open-source tool for removing bloatware        |
| **Shizuku**                           | Allows system-level modifications without root |
| **Oxygen Updater**                    | Helps remove OnePlus bloatware                 |
| **ADB AppControl**                    | GUI-based ADB tool for managing apps           |

---

## 🔄 Workflows

### **Removing Bloatware Using ADB**

1. Enable **Developer Options** and **USB Debugging** on your phone.
2. Connect your phone to a PC and run `adb devices` to verify connection.
3. List installed apps using `adb shell pm list packages`.
4. Uninstall unwanted apps using `adb shell pm uninstall --user 0 <package-name>`.

### **Disabling Background Services**

1. Identify unnecessary services using `adb shell pm list packages`.
2. Disable services using `adb shell pm disable-user --user 0 <package-name>`.
3. Use `adb shell am force-stop <package-name>` to stop running apps.

### **Using GUI-Based Tools for Debloating**

1. Install **Universal Android Debloater (UAD)** on your PC.
2. Connect your phone and select apps to remove.
3. Apply changes and reboot your device for optimization.

---

## 💡 Examples

```sh
# Remove Facebook system app
adb shell pm uninstall --user 0 com.facebook.katana

# Disable Google Assistant
adb shell pm disable-user --user 0 com.google.android.apps.googleassistant

# List all installed apps
adb shell pm list packages
```

---

## 📚 References

- **[Android Debloat List](https://github.com/MuntashirAkon/android-debloat-list)**
- **[Best Way to Debloat Android (No PC or Root Required)](https://techenclave.com/threads/best-way-to-debloat-android-no-pc-or-root-required-gui-based.220832/)**
- **[Debloat Android Using ADB](https://christitus.com/debloat-android/)**

```
<!-- end list -->
```
