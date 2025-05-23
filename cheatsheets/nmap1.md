title: Nmap Cheatsheet

category: Pentesting
description: A quick reference guide for essential Nmap commands, scanning techniques, and firewall evasion strategies.

---

## 🛠️ Commands

### **Basic Scanning Techniques**

| Command                    | Description              |
| -------------------------- | ------------------------ |
| `nmap <target>`          | Scan a single target     |
| `nmap <target1,target2>` | Scan multiple targets    |
| `nmap -iL targets.txt`   | Scan targets from a file |
| `nmap <IP range>`        | Scan a range of hosts    |
| `nmap <IP address/cidr>` | Scan an entire subnet    |

### **Host Discovery**

| Command               | Description                     |
| --------------------- | ------------------------------- |
| `nmap -sP <target>` | Perform a ping scan only        |
| `nmap -Pn <target>` | Disable ping and scan all ports |
| `nmap -PS <target>` | TCP SYN ping scan               |
| `nmap -PA <target>` | TCP ACK ping scan               |
| `nmap -PU <target>` | UDP ping scan                   |

### **Port Scanning**

| Command                     | Description                     |
| --------------------------- | ------------------------------- |
| `nmap -p <port>`          | Scan a specific port            |
| `nmap -p <port-range>`    | Scan a range of ports           |
| `nmap -p U:53,T:21-25,80` | Scan multiple TCP and UDP ports |
| `nmap -p- <target>`       | Scan all 65535 ports            |

### **Service & Version Detection**

| Command                         | Description                         |
| ------------------------------- | ----------------------------------- |
| `nmap -sV <target>`           | Detect service versions             |
| `nmap -A <target>`            | Enable aggressive scanning          |
| `nmap --script=vuln <target>` | Run vulnerability detection scripts |

### **Firewall Evasion Techniques**

| Command                           | Description                          |
| --------------------------------- | ------------------------------------ |
| `nmap -f <target>`              | Fragment packets to bypass firewalls |
| `nmap --mtu <MTU> <target>`     | Specify a custom MTU size            |
| `nmap -D RND:<number> <target>` | Use decoy scanning                   |
| `nmap -sI <zombie> <target>`    | Perform an idle scan                 |

---

## 🔄 Workflows

### **Performing a Basic Scan**

1. Run `nmap <target>` to scan a single host.
2. Use `nmap -p 80,443 <target>` to scan specific ports.
3. Enable service detection using `nmap -sV <target>`.

### **Detecting Vulnerabilities**

1. Run `nmap --script=vuln <target>` to check for known vulnerabilities.
2. Use `nmap -A <target>` for aggressive scanning.
3. Analyze results for security weaknesses.

### **Evading Firewalls & IDS**

1. Use `nmap -f <target>` to fragment packets.
2. Enable decoy scanning using `nmap -D RND:5 <target>`.
3. Perform an idle scan using `nmap -sI <zombie> <target>`.

---

## 💡 Examples

```sh
# Scan a single target
nmap 192.168.1.1

# Detect service versions
nmap -sV 192.168.1.1

# Perform a stealth scan
nmap -sS 192.168.1.1
```

---

## 📚 References

- **[Nmap Cheat Sheet 2025](https://www.stationx.net/nmap-cheat-sheet/)**
- **[GeeksforGeeks Nmap Guide](https://www.geeksforgeeks.org/nmap-cheat-sheet/)**
- **[Hack The Box Nmap Cheatsheet](https://www.hackthebox.com/blog/nmap-cheatsheet-every-command-you-need)**

```
<!-- end list -->
```

---

This **Nmap cheatsheet** strictly follows your template format and provides a complete reference! Let me know if you need modifications or additional details. 🚀
