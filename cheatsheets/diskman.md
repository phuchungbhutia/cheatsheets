title: Diskman Cheatsheet

category: Disk management
description: A quick reference guide for essential Diskman commands, workflows, and examples for managing removable disks safely.

---

## 🛠️ Commands

| Command                   | Description                                        |
| ------------------------- | -------------------------------------------------- |
| `diskman write <file>`  | Write an image file to a removable disk            |
| `diskman clone <file>`  | Clone a removable disk to an image file            |
| `diskman fdisk`         | Open interactive partition management              |
| `diskman mkfs [--list]` | Format a removable disk with a specific filesystem |
| `diskman choose (device   | partition)`                                        |
| `diskman ls`            | List available removable disks                     |
| `diskman --version`     | Show Diskman version                               |

---

## 🔄 Workflows

### **Writing an Image to a USB Drive**

1. Insert the USB drive.
2. Run the following command:
   ```bash
   diskman write archlinux.iso
   ```
3. Confirm the selected device and proceed.

### **Cloning a USB Drive to an Image File**

1. Insert the USB drive.
2. Run the following command:
   ```bash
   diskman clone backup.img
   ```
3. Confirm the selected device and proceed.

### **Formatting a USB Drive**

1. Insert the USB drive.
2. Run the following command:
   ```bash
   diskman mkfs
   ```
3. Select the device and choose the desired filesystem.

---

## 💡 Examples

```bash
# Write an ISO image to a USB drive
diskman write ubuntu.iso

# Clone a USB drive to an image file
diskman clone mybackup.img

# Format a USB drive with a specific filesystem
diskman mkfs --list
```

---

## 📚 References

- **Diskman GitHub Repository**: [GitHub](https://github.com/crdx/diskman)

```
<!-- end list -->
```
