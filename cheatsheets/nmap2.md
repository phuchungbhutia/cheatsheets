title: Nmap Cheatsheet

category: Pentesting
description: A quick reference guide for essential Nmap commands, options, and workflows for network reconnaissance and security testing.

---

## 🛠️ Commands

### **Basic Nmap Scanning**

| Command                     | Description              |
| --------------------------- | ------------------------ |
| `nmap target_ip`          | Scan a single target     |
| `nmap target1,target2`    | Scan multiple targets    |
| `nmap -iL targets.txt`    | Scan targets from a file |
| `nmap target_ip -p 80`    | Scan a specific port     |
| `nmap target_ip -p 1-100` | Scan a range of ports    |

### **Host Discovery**

| Command                        | Description                                         |
| ------------------------------ | --------------------------------------------------- |
| `nmap -sL target_ip`         | List targets without scanning                       |
| `nmap -sn target_ip`         | Disable port scanning, only check host availability |
| `nmap -Pn target_ip`         | Disable host discovery, scan ports only             |
| `nmap -PS22-25,80 target_ip` | TCP SYN discovery on specific ports                 |
| `nmap -PU53 target_ip`       | UDP discovery on port 53                            |

### **Scan Techniques**

| Command                | Description                 |
| ---------------------- | --------------------------- |
| `nmap -sS target_ip` | TCP SYN scan (stealth scan) |
| `nmap -sT target_ip` | TCP Connect scan            |
| `nmap -sU target_ip` | UDP scan                    |
| `nmap -sA target_ip` | TCP ACK scan                |
| `nmap -sW target_ip` | TCP Window scan             |

### **Firewall Evasion & Stealth Scanning**

| Command                             | Description                           |
| ----------------------------------- | ------------------------------------- |
| `nmap -f target_ip`               | Fragment packets to bypass firewalls  |
| `nmap --mtu 64 target_ip`         | Set a specific MTU size               |
| `nmap -D RND:10 target_ip`        | Use decoy scanning to hide the source |
| `nmap -sI zombie_host target_ip`  | Idle scan using a zombie host         |
| `nmap --source-port 53 target_ip` | Use a specific source port            |

### **Service & OS Detection**

| Command                          | Description                                           |
| -------------------------------- | ----------------------------------------------------- |
| `nmap -sV target_ip`           | Detect service versions                               |
| `nmap -O target_ip`            | Detect operating system                               |
| `nmap --script vuln target_ip` | Run vulnerability detection scripts                   |
| `nmap -A target_ip`            | Enable aggressive scanning (OS, services, traceroute) |

---

## 🔄 Workflows

### **Scanning a Network for Live Hosts**

1. Use `nmap -sn 192.168.1.0/24` to find active hosts.
2. Scan open ports using `nmap -p 1-100 192.168.1.1`.
3. Detect services using `nmap -sV 192.168.1.1`.

### **Performing a Stealth Scan**

1. Use `nmap -sS target_ip` for a stealthy SYN scan.
2. Fragment packets using `nmap -f target_ip`.
3. Use decoy scanning with `nmap -D RND:10 target_ip`.

### **Checking for Vulnerabilities**

1. Run `nmap --script vuln target_ip` to detect vulnerabilities.
2. Use `nmap -O target_ip` to identify the OS.
3. Scan for outdated services using `nmap -sV target_ip`.

---

## 💡 Examples

```sh
# Scan a single target
nmap 192.168.1.1

# Perform a stealth SYN scan
nmap -sS 192.168.1.1

# Detect service versions
nmap -sV 192.168.1.1
```

---

## 📚 References

- **[Nmap Cheat Sheet](https://www.stationx.net/nmap-cheat-sheet/)^2^**
- **[Nmap Commands Guide](https://www.geeksforgeeks.org/nmap-cheat-sheet/)^3^**
- **[Nmap Scanning Techniques](https://www.hackthebox.com/blog/nmap-cheatsheet-every-command-you-need)^4^**

```
<!-- end list -->
```
