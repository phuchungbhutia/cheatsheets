title: Parted Cheatsheet

category: Disk Partitioning
description: A quick reference guide for essential Parted commands, options, and workflows for efficient disk partitioning in Linux.

---

## 🛠️ Commands

### **Basic Parted Commands**

| Command                                | Description                                       |
| -------------------------------------- | ------------------------------------------------- |
| `sudo parted -l`                     | List all available disks and partitions           |
| `sudo parted /dev/sda`               | Start Parted in interactive mode for `/dev/sda` |
| `sudo parted /dev/sda print`         | Display partition table for `/dev/sda`          |
| `sudo parted /dev/sda mklabel gpt`   | Create a new GPT partition table                  |
| `sudo parted /dev/sda mklabel msdos` | Create a new MBR partition table                  |

### **Creating & Managing Partitions**

| Command                                                  | Description                                    |
| -------------------------------------------------------- | ---------------------------------------------- |
| `sudo parted /dev/sda mkpart primary ext4 1MiB 10GiB`  | Create a primary partition from 1MiB to 10GiB  |
| `sudo parted /dev/sda mkpart logical ext4 10GiB 20GiB` | Create a logical partition from 10GiB to 20GiB |
| `sudo parted /dev/sda set 1 boot on`                   | Set boot flag on partition 1                   |
| `sudo parted /dev/sda rm 1`                            | Delete partition 1                             |
| `sudo parted /dev/sda resizepart 1 15GiB`              | Resize partition 1 to 15GiB                    |

### **Advanced Partitioning Options**

| Command                                        | Description                        |
| ---------------------------------------------- | ---------------------------------- |
| `sudo parted /dev/sda align-check optimal 1` | Check alignment of partition 1     |
| `sudo parted /dev/sda name 1 "LinuxRoot"`    | Assign a name to partition 1       |
| `sudo parted /dev/sda toggle 1 lvm`          | Enable LVM on partition 1          |
| `sudo parted /dev/sda unit s print`          | Display partition table in sectors |
| `sudo parted /dev/sda unit MiB print`        | Display partition table in MiB     |

### **Troubleshooting & Disk Management**

| Command                                    | Description                        |
| ------------------------------------------ | ---------------------------------- |
| `sudo parted /dev/sda check 1`           | Check partition 1 for errors       |
| `sudo parted /dev/sda rescue 1MiB 10GiB` | Attempt to recover lost partitions |
| `sudo parted /dev/sda print free`        | Show free space on the disk        |
| `sudo parted /dev/sda quit`              | Exit Parted interactive mode       |

---

## 🔄 Workflows

### **Creating a New Partition Table**

1. Open Parted (`sudo parted /dev/sda`).
2. Create a new partition table (`mklabel gpt`).
3. Verify changes using `print`.

### **Resizing a Partition**

1. Identify the partition using `print`.
2. Resize using `resizepart 1 15GiB`.
3. Verify changes using `print`.

### **Checking Partition Alignment**

1. Run `align-check optimal 1`.
2. If misaligned, recreate the partition with proper alignment.

---

## 💡 Examples

```sh
# Create a new GPT partition table
sudo parted /dev/sda mklabel gpt

# Create a primary partition with ext4 filesystem
sudo parted /dev/sda mkpart primary ext4 1MiB 10GiB

# Resize partition 1 to 15GiB
sudo parted /dev/sda resizepart 1 15GiB
```

---

## 📚 References

- **[Linux Parted Cheat Sheet](https://opensource.com/downloads/parted-cheat-sheet)**
- **[10+ Parted Command Examples](https://www.golinuxcloud.com/parted-command-in-linux/)**

```
<!-- end list -->
```
