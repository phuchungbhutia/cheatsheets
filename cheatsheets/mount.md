title: Mount Cheatsheet

category: Linux
description: A quick reference guide for essential mount commands, options, and workflows for managing filesystems in Linux.

---

## 🛠️ Commands

### **Basic Mount Commands**

| Command                          | Description                               |
| -------------------------------- | ----------------------------------------- |
| `mount`                        | Display all currently mounted filesystems |
| `mount -t ext4 /dev/sda1 /mnt` | Mount an ext4 filesystem on `/mnt`      |
| `mount -o ro /dev/sdb1 /mnt`   | Mount a filesystem in read-only mode      |
| `mount -o loop image.iso /mnt` | Mount an ISO file using a loop device     |
| `umount /mnt`                  | Unmount a filesystem                      |

### **Mounting External Devices**

| Command                              | Description                                 |
| ------------------------------------ | ------------------------------------------- |
| `mkdir /media/usb-drive`           | Create a mount point for a USB drive        |
| `mount /dev/sdc1 /media/usb-drive` | Mount a USB drive manually                  |
| `umount /media/usb-drive`          | Unmount a USB drive                         |
| `mount -t vfat /dev/sdb1 /mnt`     | Mount a FAT32 USB drive                     |
| `mount -t ntfs-3g /dev/sdb1 /mnt`  | Mount an NTFS drive with read/write support |

### **Network & Remote Mounting**

| Command                                                              | Description                        |
| -------------------------------------------------------------------- | ---------------------------------- |
| `mount -t nfs server:/path /mnt`                                   | Mount an NFS share                 |
| `mount -t cifs //server/share /mnt -o username=user,password=pass` | Mount a Windows SMB/CIFS share     |
| `sshfs user@remote:/path /mnt`                                     | Mount a remote filesystem over SSH |
| `fusermount -u /mnt`                                               | Unmount an SSHFS mount             |

### **Advanced Mount Options**

| Command                                          | Description                                             |
| ------------------------------------------------ | ------------------------------------------------------- |
| `mount -o noexec /dev/sda1 /mnt`               | Prevent execution of binaries on the mounted filesystem |
| `mount -o nosuid /dev/sda1 /mnt`               | Ignore SUID permissions on the mounted filesystem       |
| `mount -o rw,uid=1000,gid=1000 /dev/sdb1 /mnt` | Mount with specific user and group permissions          |
| `mount -o remount,rw /mnt`                     | Remount a filesystem with read/write permissions        |

---

## 🔄 Workflows

### **Mounting a USB Drive**

1. Identify the device using `lsblk` or `fdisk -l`.
2. Create a mount point (`mkdir /media/usb-drive`).
3. Mount the device (`mount /dev/sdc1 /media/usb-drive`).
4. Verify using `df -h`.

### **Unmounting a Filesystem**

1. Ensure no processes are using the mount (`lsof | grep /mnt`).
2. Unmount using `umount /mnt`.
3. If busy, force unmount (`umount -l /mnt`).

### **Mounting a Network Share**

1. Install required packages (`sudo apt install nfs-common` or `cifs-utils`).
2. Mount the share (`mount -t nfs server:/path /mnt`).
3. Verify using `df -h`.

---

## 💡 Examples

```sh
# Mount an ext4 partition
mount -t ext4 /dev/sda1 /mnt

# Mount an ISO file
mount -o loop image.iso /mnt

# Mount a Windows network share
mount -t cifs //server/share /mnt -o username=user,password=pass
```

---

## 📚 References

- **[Linux Mount Command Guide](https://linuxconfig.org/mount-command-in-linux-with-examples)**
- **[Mounting Filesystems in Linux](https://phoenixnap.com/kb/linux-mount-command)**

```
<!-- end list -->
```
