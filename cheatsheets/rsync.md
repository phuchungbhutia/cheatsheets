title: Rsync Cheatsheet

category: Linux
description: A quick reference guide for essential Rsync commands, options, and workflows for efficient file transfer and synchronization.

---

## 🛠️ Commands

### **Basic Rsync Commands**

| Command                                   | Description                                  |
| ----------------------------------------- | -------------------------------------------- |
| `rsync -av source/ destination/`        | Sync files and directories with archive mode |
| `rsync -z source/ destination/`         | Compress files during transfer               |
| `rsync -r source/ destination/`         | Recursively copy directories                 |
| `rsync -u source/ destination/`         | Skip files that are newer in the destination |
| `rsync --progress source/ destination/` | Show progress during transfer                |

### **Remote Synchronization**

| Command                                        | Description                                             |
| ---------------------------------------------- | ------------------------------------------------------- |
| `rsync -av user@remote:/path/ local/`        | Sync files from a remote server                         |
| `rsync -av local/ user@remote:/path/`        | Sync files to a remote server                           |
| `rsync -e ssh -av user@remote:/path/ local/` | Use SSH for secure transfer                             |
| `rsync --delete source/ destination/`        | Delete files in destination that don’t exist in source |

### **Backup & Exclusion Options**

| Command                                                       | Description                              |
| ------------------------------------------------------------- | ---------------------------------------- |
| `rsync -av --backup --suffix=.bak source/ destination/`     | Create backups with a `.bak` suffix    |
| `rsync -av --exclude '*.log' source/ destination/`          | Exclude specific file types              |
| `rsync -av --exclude-from=exclude.txt source/ destination/` | Exclude files listed in `exclude.txt`  |
| `rsync -av --dry-run source/ destination/`                  | Simulate transfer without making changes |

### **Advanced Rsync Options**

| Command                                                 | Description                            |
| ------------------------------------------------------- | -------------------------------------- |
| `rsync -av --bwlimit=1000 source/ destination/`       | Limit bandwidth usage (KB/s)           |
| `rsync -av --checksum source/ destination/`           | Use checksums to verify file integrity |
| `rsync -av --partial source/ destination/`            | Resume interrupted transfers           |
| `rsync -av --log-file=rsync.log source/ destination/` | Log transfer details to a file         |

---

## 🔄 Workflows

### **Syncing Local Directories**

1. Use `rsync -av source/ destination/` to copy files.
2. Add `--progress` to monitor transfer speed.
3. Use `--delete` to remove outdated files in the destination.

### **Backing Up Files to a Remote Server**

1. Connect via SSH using `rsync -e ssh -av local/ user@remote:/backup/`.
2. Use `--exclude '*.tmp'` to skip unnecessary files.
3. Schedule backups using a cron job.

### **Restoring Files from a Backup**

1. Locate the backup directory.
2. Use `rsync -av backup/ original/` to restore files.
3. Verify integrity using `--checksum`.

---

## 💡 Examples

```bash
# Sync files with progress display
rsync -av --progress source/ destination/

# Backup files while excluding logs
rsync -av --exclude '*.log' source/ destination/

# Securely transfer files over SSH
rsync -e ssh -av local/ user@remote:/backup/
```

---

## 📚 References

- **[Rsync Command Guide](https://www.golinuxcloud.com/rsync-command-in-linux/)**
- **[Rsync Cheat Sheet](https://cheatography.com/richardjh/cheat-sheets/rsync/pdf/)**

```
<!-- end list -->
```
