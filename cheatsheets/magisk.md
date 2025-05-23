title: Magisk Cheatsheet

category: Android
description: A quick reference guide for essential Magisk commands, modules, and best practices for customizing Android devices.

---

## 🛠️ Commands

### **Basic Magisk Operations**

| Command                                    | Description                     |
| ------------------------------------------ | ------------------------------- |
| `adb reboot bootloader`                  | Reboot into bootloader mode     |
| `fastboot flash boot magisk_patched.img` | Flash Magisk-patched boot image |
| `adb shell su`                           | Gain superuser access           |
| `adb shell pm list packages`             | List installed apps             |

### **Managing Magisk Modules**

| Command                                  | Description             |
| ---------------------------------------- | ----------------------- |
| `magisk --install-module <module.zip>` | Install a Magisk module |
| `magisk --remove-module <module-name>` | Remove a Magisk module  |
| `magisk --list-modules`                | List installed modules  |

### **Bypassing Root Detection**

| Command            | Description                         |
| ------------------ | ----------------------------------- |
| `MagiskHide`     | Hide root from apps                 |
| `Shamiko Module` | Advanced root hiding                |
| `Zygisk`         | Modify system processes dynamically |

### **Using Magisk for Security & Customization**

| Command            | Description               |
| ------------------ | ------------------------- |
| `MagiskSU`       | Manage root permissions   |
| `MagiskBoot`     | Modify boot images        |
| `Magisk Manager` | GUI-based root management |

---

## 🔄 Workflows

### **Rooting an Android Device with Magisk**

1. Unlock the bootloader using `fastboot oem unlock`.
2. Patch the boot image using Magisk Manager.
3. Flash the patched boot image using `fastboot flash boot magisk_patched.img`.

### **Installing Magisk Modules**

1. Download a module `.zip` file.
2. Install it using `magisk --install-module <module.zip>`.
3. Reboot the device for changes to take effect.

### **Bypassing Root Detection**

1. Enable **MagiskHide** in Magisk settings.
2. Install **Shamiko** for advanced root hiding.
3. Use **Zygisk** to modify system processes dynamically.

---

## 💡 Examples

```sh
# Flash Magisk-patched boot image
fastboot flash boot magisk_patched.img

# Install a Magisk module
magisk --install-module module.zip

# Hide root from apps
MagiskHide enable
```

---

## 📚 References

- **[Mobile Application Penetration Testing Cheat Sheet](https://github.com/tanprathan/MobileApp-Pentest-Cheatsheet)**
- **[Android Penetration Testing Cheat Sheet](https://github.com/ivan-sincek/android-penetration-testing-cheat-sheet)**

```
<!-- end list -->
```
