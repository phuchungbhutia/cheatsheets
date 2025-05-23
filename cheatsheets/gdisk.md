title: Gdisk Cheatsheet

category: Disk Partitioning
description: A quick reference guide for essential Gdisk commands, workflows, and examples for efficient disk partitioning in Linux.

---

## 🛠️ Commands

### **Basic Gdisk Usage**

| Command                 | Description                    |
| ----------------------- | ------------------------------ |
| `sudo gdisk /dev/sdX` | Open Gdisk for a specific disk |
| `p`                   | Print the partition table      |
| `n`                   | Create a new partition         |
| `d`                   | Delete a partition             |
| `w`                   | Write changes to disk          |
| `q`                   | Quit without saving changes    |

### **Partition Management**

| Command           | Description                   |
| ----------------- | ----------------------------- |
| `mklabel gpt`   | Create a GPT partition table  |
| `mklabel msdos` | Create an MBR partition table |
| `t`             | Change partition type         |
| `x`             | Enter expert mode             |
| `r`             | Enter recovery mode           |

### **File System Operations**

| Command                  | Description                         |
| ------------------------ | ----------------------------------- |
| `mkfs.ext4 /dev/sdX1`  | Format partition as ext4            |
| `mkfs.ntfs /dev/sdX1`  | Format partition as NTFS            |
| `mkfs.fat32 /dev/sdX1` | Format partition as FAT32           |
| `fsck /dev/sdX1`       | Check and repair file system errors |

### **Advanced Disk Operations**

| Command                  | Description                    |
| ------------------------ | ------------------------------ |
| `set 1 boot on`        | Set partition 1 as bootable    |
| `resizepart 1 2048MiB` | Resize partition 1 to 2048 MiB |
| `convert mbr`          | Convert disk to MBR format     |
| `convert gpt`          | Convert disk to GPT format     |

---

## 🔄 Workflows

### **Creating & Formatting a New Partition**

1. Open Gdisk:
   ```shell
   sudo gdisk /dev/sdX
   ```
2. Print the partition table (`p`).
3. Create a new partition (`n`).
4. Choose partition number and size.
5. Format the partition:
   ```shell
   mkfs.ext4 /dev/sdX1
   ```

### **Resizing a Partition**

1. Open Gdisk (`sudo gdisk /dev/sdX`).
2. Select the partition to resize (`p`).
3. Use the command:
   ```shell
   resizepart 1 2048MiB
   ```
4. Apply changes and verify the partition size.

### **Recovering a Lost Partition**

1. Open Gdisk (`sudo gdisk /dev/sdX`).
2. Enter recovery mode (`r`).
3. Attempt to recover the partition table.

---

## 💡 Examples

```shell
# Create a new partition and format it
sudo gdisk /dev/sdX
n
mkfs.ext4 /dev/sdX1

# Resize a partition
resizepart 1 2048MiB

# Convert MBR to GPT
convert gpt
```

---

## 📚 References

- **Gdisk Command in Linux with Examples**: [LinuxOPsys](https://linuxopsys.com/gdisk-command-in-linux-with-examples)
- **Manage Linux Disk Partition with Gdisk**: [ComputerNetworkingNotes](https://www.computernetworkingnotes.com/linux-tutorials/manage-linux-disk-partition-with-gdisk-command.html)
- **Mastering Gdisk: A Complete Guide**: [TheLinuxCode](https://thelinuxcode.com/gdisk-command-line-options/)

```
<!-- end list -->
```
