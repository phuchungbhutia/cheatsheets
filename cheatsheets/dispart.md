title: DiskPart Cheatsheet

category: Disk Management
description: A quick reference guide for essential DiskPart commands, workflows, and examples for efficient disk partitioning and management in Windows.

---

## 🛠️ Commands

### **Basic Disk Management**

| Command             | Description                           |
| ------------------- | ------------------------------------- |
| `list disk`       | Displays all available disks          |
| `select disk X`   | Selects disk X for operations         |
| `list partition`  | Shows partitions on the selected disk |
| `list volume`     | Displays all volumes on the system    |
| `select volume X` | Selects volume X for operations       |

### **Partition & Volume Operations**

| Command                       | Description                                         |
| ----------------------------- | --------------------------------------------------- |
| `create partition primary`  | Creates a primary partition                         |
| `create partition extended` | Creates an extended partition                       |
| `create partition logical`  | Creates a logical partition                         |
| `delete partition`          | Deletes the selected partition                      |
| `extend`                    | Expands the selected partition into available space |

### **Formatting & File System Management**

| Command                   | Description                                   |
| ------------------------- | --------------------------------------------- |
| `format fs=ntfs quick`  | Formats the partition with NTFS               |
| `format fs=fat32 quick` | Formats the partition with FAT32              |
| `assign letter=X`       | Assigns drive letter X to the selected volume |
| `remove letter=X`       | Removes the assigned drive letter             |

### **Advanced Disk Operations**

| Command          | Description                                            |
| ---------------- | ------------------------------------------------------ |
| `clean`        | Removes all partitions and data from the selected disk |
| `convert mbr`  | Converts the disk to MBR format                        |
| `convert gpt`  | Converts the disk to GPT format                        |
| `active`       | Marks the selected partition as active                 |
| `offline disk` | Takes the selected disk offline                        |
| `online disk`  | Brings the selected disk online                        |

### **Virtual Disk Management**

| Command           | Description                                              |
| ----------------- | -------------------------------------------------------- |
| `attach vdisk`  | Mounts a virtual hard disk (VHD)                         |
| `detach vdisk`  | Unmounts a virtual hard disk (VHD)                       |
| `compact vdisk` | Reduces the physical size of a dynamically expanding VHD |
| `expand vdisk`  | Increases the size of a VHD                              |

---

## 🔄 Workflows

### **Creating & Formatting a New Partition**

1. Open Command Prompt as Administrator.
2. Type `diskpart` and press Enter.
3. Select the disk:
   ```shell
   list disk
   select disk X
   ```
4. Create a partition:
   ```shell
   create partition primary
   ```
5. Format the partition:
   ```shell
   format fs=ntfs quick
   ```
6. Assign a drive letter:
   ```shell
   assign letter=D
   ```

### **Cleaning & Converting a Disk**

1. Open DiskPart (`diskpart`).
2. Select the disk:
   ```shell
   list disk
   select disk X
   ```
3. Clean the disk:
   ```shell
   clean
   ```
4. Convert to GPT:
   ```shell
   convert gpt
   ```

### **Managing Virtual Hard Disks (VHDs)**

1. Attach a VHD:
   ```shell
   attach vdisk
   ```
2. Detach a VHD:
   ```shell
   detach vdisk
   ```
3. Expand a VHD:
   ```shell
   expand vdisk maximum=50000
   ```

---

## 💡 Examples

```shell
# Create a new partition and format it
diskpart
select disk 1
create partition primary
format fs=ntfs quick
assign letter=E

# Convert a disk to GPT
diskpart
select disk 2
convert gpt
```

---

## 📚 References

- **Microsoft DiskPart Documentation**: [Microsoft Learn](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/diskpart)
- **Complete DiskPart Command List (PDF)**: [WindowsChimp](https://www.windowschimp.com/wp-content/uploads/2021/06/Diskpart-Commands-Full-List.pdf)
- **DiskPart Guide & Usage**: [The Windows Club](https://www.thewindowsclub.com/list-of-diskpart-commands-windows)

```
<!-- end list -->
```
