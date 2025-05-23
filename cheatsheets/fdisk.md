title: Fdisk, DD, MKFS Cheatsheet

category: Disk Management
description: A quick reference guide for essential `fdisk`, `dd`, and `mkfs` commands, workflows, and examples for managing disks and partitions efficiently.

---

## 🛠️ Commands

### **Fdisk (Partition Management)**

| Command            | Description                                      |
| ------------------ | ------------------------------------------------ |
| `fdisk -l`       | List all available disks and partitions          |
| `fdisk [device]` | Open a disk for partition editing (`/dev/sdX`) |
| `m`              | Display help inside `fdisk`                    |
| `n`              | Create a new partition                           |
| `d`              | Delete a partition                               |
| `p`              | Print the current partition table                |
| `w`              | Write changes to disk and exit                   |
| `q`              | Quit without saving changes                      |

### **DD (Disk Cloning & Backup)**

| Command                                         | Description                          |
| ----------------------------------------------- | ------------------------------------ |
| `dd if=[input] of=[output] bs=[size]`         | Copy data from source to destination |
| `dd if=/dev/sdX of=backup.img`                | Create an image backup of a disk     |
| `dd if=backup.img of=/dev/sdX`                | Restore a disk from an image file    |
| `dd if=/dev/zero of=/dev/sdX bs=1M count=100` | Wipe a disk with zeros               |
| `dd if=/dev/sdX of=/dev/sdY bs=4M`            | Clone one disk to another            |

### **MKFS (Formatting Disks & Partitions)**

| Command                           | Description                              |
| --------------------------------- | ---------------------------------------- |
| `mkfs -t [filesystem] [device]` | Format a disk with a specific filesystem |
| `mkfs.ext4 /dev/sdX1`           | Format a partition with ext4             |
| `mkfs.xfs /dev/sdX1`            | Format a partition with XFS              |
| `mkfs.vfat /dev/sdX1`           | Format a partition with FAT32            |
| `mkfs.ntfs /dev/sdX1`           | Format a partition with NTFS             |

---

## 🔄 Workflows

### **Creating & Formatting a New Partition**

1. Open `fdisk` for partition editing:
   ```bash
   sudo fdisk /dev/sdX
   ```
2. Create a new partition:
   ```bash
   n
   ```
3. Set partition type and size, then write changes:
   ```bash
   w
   ```
4. Format the new partition:
   ```bash
   sudo mkfs.ext4 /dev/sdX1
   ```

### **Backing Up & Restoring a Disk with DD**

1. Create a disk image backup:
   ```bash
   sudo dd if=/dev/sdX of=backup.img bs=4M
   ```
2. Restore the disk from the backup:
   ```bash
   sudo dd if=backup.img of=/dev/sdX bs=4M
   ```

### **Wiping a Disk Before Reuse**

1. Overwrite the entire disk with zeros:
   ```bash
   sudo dd if=/dev/zero of=/dev/sdX bs=1M count=100
   ```

---

## 💡 Examples

```bash
# List available disks and partitions
sudo fdisk -l

# Format a partition with ext4
sudo mkfs.ext4 /dev/sdX1

# Clone a disk to another disk
sudo dd if=/dev/sdX of=/dev/sdY bs=4M
```

---

## 📚 References

- **Linux Partitioning Guide (fdisk)**: [https://man7.org/linux/man-pages/man8/fdisk.8.html](https://man7.org/linux/man-pages/man8/fdisk.8.html)
- **DD Command Manual**: [https://man7.org/linux/man-pages/man1/dd.1.html](https://man7.org/linux/man-pages/man1/dd.1.html)
- **MKFS & Filesystem Formatting**: [https://linux.die.net/man/8/mkfs](https://linux.die.net/man/8/mkfs)

```
<!-- end list -->
```

---

This cheatsheet strictly follows your template and provides a complete reference! Let me know if you need modifications or additional details. 🚀
