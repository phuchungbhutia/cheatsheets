title: GParted Cheatsheet

category: Disk Partitioning
description: A quick reference guide for essential GParted commands, workflows, and examples for efficient disk partitioning in Linux.

---

## 🛠️ Commands

### **Basic GParted Usage**

| Command              | Description                           |
| -------------------- | ------------------------------------- |
| `sudo gparted`     | Launch GParted with root privileges   |
| `gparted /dev/sdX` | Open GParted for a specific disk      |
| `print`            | Display partition table               |
| `select /dev/sdX`  | Select a specific disk for operations |

### **Partition Management**

| Command                          | Description                                  |
| -------------------------------- | -------------------------------------------- |
| `mklabel gpt`                  | Create a GPT partition table                 |
| `mklabel msdos`                | Create an MBR partition table                |
| `mkpart primary ext4 1MiB 50%` | Create a primary partition with ext4 format  |
| `mkpart logical 51% 100%`      | Create a logical partition in extended space |
| `resizepart 1 2048MiB`         | Resize partition 1 to 2048 MiB               |

### **File System Operations**

| Command                  | Description                         |
| ------------------------ | ----------------------------------- |
| `mkfs.ext4 /dev/sdX1`  | Format partition as ext4            |
| `mkfs.ntfs /dev/sdX1`  | Format partition as NTFS            |
| `mkfs.fat32 /dev/sdX1` | Format partition as FAT32           |
| `fsck /dev/sdX1`       | Check and repair file system errors |

### **Advanced Disk Operations**

| Command           | Description                              |
| ----------------- | ---------------------------------------- |
| `set 1 boot on` | Set partition 1 as bootable              |
| `rm 1`          | Remove partition 1                       |
| `unit MiB`      | Set unit to MiB for partition operations |
| `rescue 1 1024` | Attempt to recover a lost partition      |

---

## 🔄 Workflows

### **Creating & Formatting a New Partition**

1. Open GParted:
   ```shell
   sudo gparted
   ```
2. Select the disk (`/dev/sdX`).
3. Create a new partition table (`mklabel gpt`).
4. Create a partition (`mkpart primary ext4 1MiB 50%`).
5. Format the partition (`mkfs.ext4 /dev/sdX1`).

### **Resizing a Partition**

1. Open GParted (`sudo gparted`).
2. Select the partition to resize.
3. Use the command:
   ```shell
   resizepart 1 2048MiB
   ```
4. Apply changes and verify the partition size.

### **Recovering a Lost Partition**

1. Open GParted (`sudo gparted`).
2. Run the rescue command:
   ```shell
   rescue 1 1024
   ```
3. Check recovered partitions using `print`.

---

## 💡 Examples

```shell
# Create a new partition and format it
sudo gparted
mklabel gpt
mkpart primary ext4 1MiB 50%
mkfs.ext4 /dev/sdX1

# Resize a partition
resizepart 1 2048MiB

# Recover a lost partition
rescue 1 1024
```

---

## 📚 References

- **GNU Parted Cheat Sheet**: [Opensource.com](https://opensource.com/sites/default/files/gated-content/osdc_cheatsheet-parted.pdf)
- **Parted Command Examples in Linux**: [GoLinuxCloud](https://www.golinuxcloud.com/parted-command-in-linux/)

```
<!-- end list -->
```
