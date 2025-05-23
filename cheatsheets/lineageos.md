**title:** LineageOS Cheatsheet

**category:** Android
**description:** A structured reference guide for LineageOS, including installation, customization, and essential commands.

---

## 📱 **Core Principles of LineageOS**

### **Fundamental Concepts**

| Principle                          | Description                                          |
| ---------------------------------- | ---------------------------------------------------- |
| **Open-Source Android**      | Based on AOSP with additional features               |
| **Privacy & Security**       | Includes built-in privacy tools and security patches |
| **Customization**            | Allows deep UI and system modifications              |
| **Performance Optimization** | Lightweight and efficient compared to stock ROMs     |
| **Device Support**           | Compatible with a wide range of Android devices      |

### **Essential LineageOS Commands**

| Command                                      | Function                            |
| -------------------------------------------- | ----------------------------------- |
| **adb devices**                        | Lists connected devices             |
| **adb reboot bootloader**              | Reboots device into bootloader mode |
| **fastboot flash recovery [file.img]** | Installs custom recovery            |
| **adb sideload [file.zip]**            | Installs LineageOS via sideloading  |
| **adb logcat**                         | Displays system logs for debugging  |

---

## 🔄 **Workflows**

### **Optimizing LineageOS Installation**

1. **Unlock bootloader** using `fastboot oem unlock`.
2. **Install custom recovery** (TWRP or Lineage Recovery).
3. **Flash LineageOS ZIP** via recovery mode.
4. **Install GApps** for Google services (optional).

### **Enhancing LineageOS Customization**

1. **Modify system UI** using Substratum or custom themes.
2. **Enable root access** via developer settings.
3. **Optimize battery life** with kernel tweaks.

---

## 💡 **Examples**

```plaintext
# Example: Installing LineageOS via ADB Sideload
1. Boot into recovery mode.  
2. Connect device to PC via USB.  
3. Run `adb sideload lineageos.zip`.  
4. Wait for installation to complete.  
```

---

## 📚 **References**

- **[LineageOS Device Tree Template](https://github.com/imasaru/android_device_tree_template)**
- **[Adding a New Device to LineageOS Wiki](https://wiki.lineageos.org/addingdevice-howto)**
- **[Official LineageOS Installation Guide](https://wiki.lineageos.org/install-guide/)**

```
<!-- end list -->
```
