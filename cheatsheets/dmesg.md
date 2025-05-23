title: dmesg Cheatsheet

category: Linux
description: A quick reference guide for using the `dmesg` command to view kernel messages, troubleshoot hardware issues, and monitor system logs.

---

## 🛠️ Command Breakdown

| Command           | Description                                      |
| ----------------- | ------------------------------------------------ |
| `dmesg`         | Display all kernel messages                      |
| `dmesg -H`      | Show human-readable output                       |
| `dmesg -T`      | Display timestamps in human-readable format      |
| `dmesg -l err`  | Filter messages by log level (e.g., errors only) |
| `dmesg -k`      | Show only kernel messages                        |
| `dmesg -s 1024` | Limit output to 1024 bytes                       |

### **Filtering & Searching**

| Command           | Description                                    |
| ----------------- | ---------------------------------------------- |
| `dmesg            | grep "error"`                                  |
| `dmesg            | tail -20`                                      |
| `dmesg -l warn` | Display only warning messages                  |
| `dmesg -f kern` | Filter messages by facility (kernel logs only) |

### **Clearing & Logging**

| Command              | Description                                                  |
| -------------------- | ------------------------------------------------------------ |
| `dmesg -C`         | Clear the kernel ring buffer                                 |
| `dmesg > logs.txt` | Save dmesg output to a file                                  |
| `dmesg -w`         | Continuously monitor new kernel messages                     |
| `dmesg -x`         | Decode facility and level numbers to human-readable prefixes |

---

## 🔄 Workflows

### **Monitoring System Logs**

1. Run `dmesg -T` to view logs with timestamps.
2. Use `dmesg | grep "error"` to filter for errors.
3. Continuously monitor logs using `dmesg -w`.

### **Troubleshooting Hardware Issues**

1. Check for device errors using `dmesg -l err`.
2. Filter logs by kernel messages using `dmesg -k`.
3. Save logs for analysis using `dmesg > logs.txt`.

### **Clearing & Managing Logs**

1. Clear logs using `dmesg -C`.
2. Use `dmesg -s 1024` to limit output size.
3. Decode log levels using `dmesg -x`.

---

## 💡 Examples

```bash
# Example: View recent kernel messages
dmesg | tail -20
```

```bash
# Example: Filter logs for USB device errors
dmesg | grep "usb"
```

---

## 📚 References

- **[Linux dmesg Command: Syntax, Options, Examples](https://phoenixnap.com/kb/dmesg-linux)**
- **[How to View Kernel Messages in Linux](https://www.geeksforgeeks.org/how-to-use-the-dmesg-command-on-linux/)**
- **[Dmesg Command in Linux - Options + Examples](https://linuxopsys.com/topics/dmesg-command-in-linux)**

```
<!-- end list -->
```
