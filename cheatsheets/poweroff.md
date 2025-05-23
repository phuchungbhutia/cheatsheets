title: Poweroff Cheatsheet

category: Linux
description: A quick reference guide for essential Poweroff commands, options, and workflows for safely shutting down a Linux system.

---

## 🛠️ Commands

### **Basic Poweroff Commands**

| Command                    | Description                          |
| -------------------------- | ------------------------------------ |
| `sudo poweroff`          | Immediately power off the system     |
| `sudo shutdown -h now`   | Halt and power off the system        |
| `sudo shutdown -h +5`    | Schedule shutdown in 5 minutes       |
| `sudo shutdown -h 22:00` | Schedule shutdown at 10 PM           |
| `sudo halt`              | Halt the system without powering off |

### **Reboot & Restart Options**

| Command                   | Description                     |
| ------------------------- | ------------------------------- |
| `sudo reboot`           | Restart the system immediately  |
| `sudo shutdown -r now`  | Reboot the system               |
| `sudo shutdown -r +10`  | Schedule a reboot in 10 minutes |
| `sudo systemctl reboot` | Reboot using systemd            |

### **Advanced Shutdown Options**

| Command                      | Description                               |
| ---------------------------- | ----------------------------------------- |
| `sudo shutdown -c`         | Cancel a scheduled shutdown               |
| `sudo systemctl poweroff`  | Power off using systemd                   |
| `sudo shutdown --poweroff` | Explicitly power off the system           |
| `sudo shutdown --halt`     | Halt the system without turning off power |

### **Troubleshooting & Logs**

| Command              | Description                              |
| -------------------- | ---------------------------------------- |
| `journalctl -b -1` | View logs from the last boot             |
| `uptime`           | Check system uptime before shutdown      |
| `who`              | See logged-in users before shutting down |
| `last reboot`      | View previous reboot history             |

---

## 🔄 Workflows

### **Safely Shutting Down the System**

1. Notify users using `wall "System shutting down in 5 minutes"` (optional).
2. Schedule shutdown using `sudo shutdown -h +5`.
3. Verify shutdown using `shutdown -c` if needed.

### **Scheduling a Reboot**

1. Use `sudo shutdown -r +10` to reboot in 10 minutes.
2. Cancel the reboot using `shutdown -c` if necessary.
3. Check system uptime using `uptime`.

### **Checking System Logs Before Shutdown**

1. View active users using `who`.
2. Check previous shutdowns using `last reboot`.
3. Inspect logs using `journalctl -b -1`.

---

## 💡 Examples

```sh
# Shut down the system immediately
sudo poweroff

# Schedule a shutdown at 10 PM
sudo shutdown -h 22:00

# Cancel a scheduled shutdown
sudo shutdown -c
```

---

## 📚 References

- **[Linux Poweroff Command Guide](https://labex.io/tutorials/linux-linux-poweroff-command-with-practical-examples-422862)**
- **[Linux Shutdown &amp; Reboot Commands](https://www.redhat.com/en/blog/linux-boot-shutdown-systemd)**

```
<!-- end list -->
```
