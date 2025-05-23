title: Linux Networking Cheatsheet

category: Network Configuration
description: A quick reference guide for essential Linux networking commands, tools, and workflows for efficient network management.

---

## 🛠️ Commands

### **Network Configuration**

| Command                 | Description                                         |
| ----------------------- | --------------------------------------------------- |
| `hostname`            | Show the system hostname                            |
| `ip addr show`        | Display IP addresses assigned to network interfaces |
| `ifconfig`            | Show and configure network interfaces (deprecated)  |
| `nmcli dev wifi list` | List available Wi-Fi networks                       |
| `netplan apply`       | Apply network settings from YAML configuration      |

### **Network Connectivity**

| Command                               | Description                                   |
| ------------------------------------- | --------------------------------------------- |
| `ping google.com`                   | Test network connectivity                     |
| `traceroute google.com`             | Trace the route packets take to a destination |
| `curl -I https://example.com`       | Fetch HTTP headers from a website             |
| `wget https://example.com/file.zip` | Download a file from the internet             |
| `scp user@remote:/path/file.txt .`  | Securely copy a file from a remote server     |

### **DNS & Name Resolution**

| Command                  | Description                    |
| ------------------------ | ------------------------------ |
| `nslookup example.com` | Query DNS records for a domain |
| `dig example.com`      | Perform detailed DNS lookup    |
| `host example.com`     | Get IP address of a domain     |
| `cat /etc/resolv.conf` | View DNS configuration         |

### **Network Monitoring & Analysis**

| Command                     | Description                               |
| --------------------------- | ----------------------------------------- |
| `netstat -tulnp`          | Show active network connections           |
| `ss -tulnp`               | Display open ports and listening services |
| `tcpdump -i eth0`         | Capture network packets on interface eth0 |
| `iftop`                   | Monitor real-time network bandwidth usage |
| `nmap -sP 192.168.1.0/24` | Scan active devices on a network          |

### **Remote Access & Security**

| Command                    | Description                        |
| -------------------------- | ---------------------------------- |
| `ssh user@remote`        | Connect to a remote server via SSH |
| `ssh-keygen`             | Generate SSH key pairs             |
| `iptables -L`            | List firewall rules                |
| `ufw status`             | Check firewall status              |
| `fail2ban-client status` | View active security bans          |

---

## 🔄 Workflows

### **Checking Network Configuration**

1. Run `ip addr show` to view IP addresses.
2. Use `nmcli dev wifi list` to check available Wi-Fi networks.
3. Verify DNS settings using `cat /etc/resolv.conf`.

### **Troubleshooting Network Issues**

1. Test connectivity using `ping google.com`.
2. Trace network routes with `traceroute example.com`.
3. Check open ports using `netstat -tulnp`.

### **Securing Remote Access**

1. Generate SSH keys using `ssh-keygen`.
2. Configure firewall rules using `ufw allow 22/tcp`.
3. Monitor failed login attempts with `fail2ban-client status`.

---

## 💡 Examples

```sh
# Check network connectivity
ping google.com

# Securely copy a file from a remote server
scp user@remote:/path/file.txt .

# Scan active devices on a network
nmap -sP 192.168.1.0/24
```

---

## 📚 References

- **[Linux Network Commands Cheat Sheet](https://www.geeksforgeeks.org/linux-network-commands-cheat-sheet/)**
- **[Linux Network Commands PDF](https://linuxsimply.com/cheat-sheets/linux-network-commands/)**
- **[Linux Network Configuration Guide](https://phoenixnap.com/kb/linux-network-commands)**

```
<!-- end list -->
```
