**title:** Nmap Cheatsheet

**category:** Cybersecurity
**description:** A structured reference guide for Nmap, covering essential commands, scanning techniques, and optimization strategies.

---

## 🔍 **Core Principles for Nmap Usage**

### **Fundamental Concepts**

| Principle                             | Description                                    |
| ------------------------------------- | ---------------------------------------------- |
| **Host Discovery**              | Identifies active devices on a network         |
| **Port Scanning**               | Detects open ports and services                |
| **Service & Version Detection** | Determines running applications and versions   |
| **OS Fingerprinting**           | Identifies the operating system of a target    |
| **Firewall Evasion**            | Bypasses security measures for deeper analysis |

### **Essential Nmap Commands & Options**

| Command                               | Function                                                      |
| ------------------------------------- | ------------------------------------------------------------- |
| **nmap -sP [target]**           | Ping scan to check if the target is online                    |
| **nmap -sS [target]**           | Stealthy TCP SYN scan                                         |
| **nmap -sU [target]**           | UDP scan to detect open UDP ports                             |
| **nmap -A [target]**            | Aggressive scan (OS detection, version detection, traceroute) |
| **nmap -p- [target]**           | Scan all 65,535 ports                                         |
| **nmap -O [target]**            | OS fingerprinting                                             |
| **nmap --script=vuln [target]** | Runs vulnerability detection scripts                          |

---

## 🔄 **Workflows**

### **Optimizing Network Scanning**

1. **Perform host discovery** to identify active devices.
2. **Use stealth scans** to avoid detection by firewalls.
3. **Analyze service versions** for potential vulnerabilities.

### **Enhancing Security Auditing**

1. **Run vulnerability scripts** to detect weaknesses.
2. **Use firewall evasion techniques** for deeper penetration testing.
3. **Monitor network traffic** for unusual activity.

---

## 💡 **Examples**

```plaintext
# Example: Running a Full Port Scan
nmap -p- -sS -T4 [target]  
```

---

## 📚 **References**

- **[Nmap Cheat Sheet](https://github.com/jasonniebauer/Nmap-Cheatsheet)**
- **[Nmap Commands Guide](https://www.geeksforgeeks.org/nmap-cheat-sheet/)**
- **[Advanced Nmap Techniques](https://www.codelivly.com/nmap-cheat-sheet/)**

```
<!-- end list -->
```
