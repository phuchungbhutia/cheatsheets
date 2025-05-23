title: DNS Cheatsheet

category: Network Configuration
description: A quick reference guide for essential DNS commands, record types, and workflows for efficient domain name resolution.

---

## 🛠️ Commands

### **Basic DNS Commands**

| Command                     | Description                    |
| --------------------------- | ------------------------------ |
| `nslookup example.com`    | Query DNS records for a domain |
| `dig example.com`         | Perform detailed DNS lookup    |
| `host example.com`        | Get IP address of a domain     |
| `cat /etc/resolv.conf`    | View DNS configuration         |
| `systemctl restart named` | Restart DNS service (Bind)     |

### **Common DNS Record Types**

| Record Type | Description                                                 |
| ----------- | ----------------------------------------------------------- |
| `A`       | Maps a domain to an IPv4 address                            |
| `AAAA`    | Maps a domain to an IPv6 address                            |
| `CNAME`   | Aliases one domain name to another                          |
| `MX`      | Directs email to mail servers                               |
| `NS`      | Specifies the authoritative nameserver for a domain         |
| `SOA`     | Contains administrative information about the domain        |
| `TXT`     | Stores text information, often used for verification        |
| `PTR`     | Maps an IP address to a domain name for reverse DNS lookups |

### **DNS Troubleshooting**

| Command                    | Description                              |
| -------------------------- | ---------------------------------------- |
| `ping example.com`       | Test network connectivity                |
| `traceroute example.com` | Trace the route packets take to a domain |
| `dig example.com +short` | Get a quick IP address lookup            |
| `dig -x 8.8.8.8`         | Perform reverse DNS lookup               |
| `netstat -tulnp            | grep named`                              |

### **DNS Security & Optimization**

| Command                                                    | Description                   |
| ---------------------------------------------------------- | ----------------------------- |
| `iptables -A INPUT -p udp --dport 53 -j ACCEPT`          | Allow DNS traffic             |
| `fail2ban-client status`                                 | Monitor failed login attempts |
| `systemctl restart bind9`                                | Restart Bind DNS server       |
| `dnssec-keygen -a RSASHA256 -b 2048 -n ZONE example.com` | Generate DNSSEC keys          |

---

## 🔄 Workflows

### **Checking DNS Configuration**

1. Run `cat /etc/resolv.conf` to view DNS settings.
2. Use `nslookup example.com` to check domain resolution.
3. Verify authoritative nameservers using `dig example.com NS`.

### **Troubleshooting DNS Issues**

1. Test connectivity using `ping example.com`.
2. Trace network routes with `traceroute example.com`.
3. Perform reverse lookup using `dig -x 8.8.8.8`.

### **Securing DNS Services**

1. Enable DNSSEC using `dnssec-keygen`.
2. Configure firewall rules using `iptables -A INPUT -p udp --dport 53 -j ACCEPT`.
3. Monitor DNS logs using `journalctl -u named`.

---

## 💡 Examples

```sh
# Query DNS records
nslookup example.com

# Perform a reverse DNS lookup
dig -x 8.8.8.8

# Restart Bind DNS server
systemctl restart bind9
```

---

## 📚 References

- **[DNS Cheat Sheet](https://networkwalks.com/wp-content/uploads/2020/03/DNS-part-1-notes-cheatsheet-network-walks.pdf)**
- **[DNS Records Explained](https://onecompiler.com/cheatsheets/dns)**
- **[DNS Record Types Guide](https://phoenixnap.com/kb/dns-record-types)**

```
<!-- end list -->
```
