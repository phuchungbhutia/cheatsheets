title: Common Ports and Protocols Cheatsheet

category: Cybersecurity
description: A quick reference guide for commonly used network ports and protocols, including their functions and security considerations.

---

## 🛠️ Ports & Protocols

### **Well-Known Ports (0-1023)**

| Port    | Protocol | Description                                  |
| ------- | -------- | -------------------------------------------- |
| `20`  | FTP-Data | File Transfer Protocol (Data)                |
| `21`  | FTP      | File Transfer Protocol (Control)             |
| `22`  | SSH      | Secure Shell for remote access               |
| `23`  | Telnet   | Unencrypted remote login                     |
| `25`  | SMTP     | Simple Mail Transfer Protocol (Email)        |
| `53`  | DNS      | Domain Name System resolution                |
| `67`  | DHCP     | Dynamic Host Configuration Protocol (Server) |
| `68`  | DHCP     | Dynamic Host Configuration Protocol (Client) |
| `69`  | TFTP     | Trivial File Transfer Protocol               |
| `80`  | HTTP     | Hypertext Transfer Protocol (Web)            |
| `110` | POP3     | Post Office Protocol (Email retrieval)       |
| `123` | NTP      | Network Time Protocol                        |
| `143` | IMAP     | Internet Message Access Protocol (Email)     |
| `161` | SNMP     | Simple Network Management Protocol           |
| `443` | HTTPS    | Secure HTTP (SSL/TLS)                        |

### **Registered Ports (1024-49151)**

| Port     | Protocol   | Description                 |
| -------- | ---------- | --------------------------- |
| `3306` | MySQL      | MySQL database service      |
| `3389` | RDP        | Remote Desktop Protocol     |
| `5432` | PostgreSQL | PostgreSQL database service |
| `5900` | VNC        | Virtual Network Computing   |
| `8080` | HTTP-Alt   | Alternative HTTP port       |

### **Dynamic & Private Ports (49152-65535)**

| Port            | Protocol        | Description                                     |
| --------------- | --------------- | ----------------------------------------------- |
| `49152-65535` | Ephemeral Ports | Temporary ports for client-server communication |

---

## 🔄 Workflows

### **Securing Network Services**

1. Use `SSH (22)` instead of `Telnet (23)` for secure remote access.
2. Configure `HTTPS (443)` instead of `HTTP (80)` for encrypted web traffic.
3. Restrict `FTP (21)` access to trusted users.

### **Troubleshooting Network Issues**

1. Use `netstat -tulnp` to check open ports.
2. Use `ping` and `traceroute` to diagnose connectivity.
3. Verify DNS resolution using `nslookup`.

### **Optimizing Server Performance**

1. Limit unnecessary open ports using firewall rules.
2. Monitor network traffic using `iftop`.
3. Use `NTP (123)` to synchronize system clocks.

---

## 💡 Examples

```bash
# Example: Check open ports on a Linux system
netstat -tulnp
```

```bash
# Example: Test connectivity to a web server
curl -I https://example.com
```

---

## 📚 References

- **[Common Ports Cheat Sheet](https://www.stationx.net/common-ports-cheat-sheet/)**
- **[Network Protocols &amp; Ports Guide](https://www.geeksforgeeks.org/network-protocols-and-ports/)**

```
<!-- end list -->
```
