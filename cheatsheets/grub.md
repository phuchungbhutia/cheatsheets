title: GRUB Cheatsheet

category: Linux
description: A quick reference guide for essential GRUB commands, workflows, and examples for managing the bootloader efficiently.

---

## 🛠️ Commands

| Command                                        | Description                                       |
| ---------------------------------------------- | ------------------------------------------------- |
| `grub-install [device]`                      | Install GRUB on a device (e.g.,`/dev/sdX`)      |
| `grub-mkconfig -o /boot/grub/grub.cfg`       | Generate a new GRUB configuration file            |
| `grub-editenv list`                          | List GRUB environment variables                   |
| `grub-set-default [entry]`                   | Set the default boot entry                        |
| `grub-reboot [entry]`                        | Reboot into a specific boot entry                 |
| `grub-mkrescue -o rescue.iso`                | Create a GRUB rescue ISO                          |
| `grub-update`                                | Update GRUB configuration (on some distributions) |
| `ls (hdX,Y)/`                                | List files in a partition from GRUB shell         |
| `set root=(hdX,Y)`                           | Set the root partition in GRUB shell              |
| `linux /boot/vmlinuz-linux root=/dev/sdX ro` | Load the Linux kernel manually                    |
| `initrd /boot/initramfs-linux.img`           | Load the initial RAM disk manually                |
| `boot`                                       | Boot the system from GRUB shell                   |

---

## 🔄 Workflows

### **Installing GRUB on a Disk**

1. Install GRUB on the target disk:
   ```bash
   sudo grub-install /dev/sdX
   ```
2. Generate a new GRUB configuration file:
   ```bash
   sudo grub-mkconfig -o /boot/grub/grub.cfg
   ```

### **Setting Default Boot Entry**

1. List available boot entries:
   ```bash
   grep menuentry /boot/grub/grub.cfg
   ```
2. Set the default boot entry:
   ```bash
   sudo grub-set-default 2
   ```
3. Apply changes:
   ```bash
   sudo update-grub
   ```

### **Manually Booting from GRUB Shell**

1. Set the root partition:
   ```bash
   set root=(hd0,1)
   ```
2. Load the Linux kernel:
   ```bash
   linux /boot/vmlinuz-linux root=/dev/sda1 ro
   ```
3. Load the initial RAM disk:
   ```bash
   initrd /boot/initramfs-linux.img
   ```
4. Boot the system:
   ```bash
   boot
   ```

---

## 💡 Examples

```bash
# Install GRUB on a disk
sudo grub-install /dev/sdX

# Generate a new GRUB configuration file
sudo grub-mkconfig -o /boot/grub/grub.cfg

# Set default boot entry
sudo grub-set-default 1

# Create a GRUB rescue ISO
sudo grub-mkrescue -o rescue.iso
```

---

## 📚 References

- **GNU GRUB Manual**: [GNU GRUB Commands](https://www.gnu.org/software/grub/manual/grub/html_node/Commands.html)
- **GRUB2 Cheatsheet**: [Schotty.com](https://schotty.com/Cheatsheets/GRUB2_Cheatsheet/)

```
<!-- end list -->
```
