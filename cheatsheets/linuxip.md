title: Linux IP Configuration Cheatsheet

category: Networking
description: A quick reference guide for essential Linux IP configuration commands, including network interface management, IP address assignment, and troubleshooting.

---

## 🛠️ Commands

### **Basic IP Configuration**

| Command         | Description                                                                    |
| --------------- | ------------------------------------------------------------------------------ |
| `ip a`        | Show all network interfaces and IP addresses (equivalent to `ipconfig /all`) |
| `ip -4 a`     | Show only IPv4 addresses                                                       |
| `ip -6 a`     | Show only IPv6 addresses                                                       |
| `ip r`        | Display the default gateway (equivalent to `ipconfig /all` gateway info)     |
| `hostname -I` | Show the system’s IP address                                                  |

### **Managing Network Interfaces**

| Command                   | Description                           |
| ------------------------- | ------------------------------------- |
| `ip link show`          | List all network interfaces           |
| `ip link set eth0 up`   | Enable a network interface            |
| `ip link set eth0 down` | Disable a network interface           |
| `ip a show eth0`        | Show details for a specific interface |
| `ip link ls up`         | Show only active interfaces           |

### **Assigning & Removing IP Addresses**

| Command                                     | Description                            |
| ------------------------------------------- | -------------------------------------- |
| `sudo ip a add 192.168.1.100/24 dev eth0` | Assign an IP address to an interface   |
| `sudo ip a del 192.168.1.100/24 dev eth0` | Remove an IP address from an interface |
| `sudo ip r add default via 192.168.1.1`   | Set a default gateway                  |
| `sudo ip r del default`                   | Remove the default gateway             |

### **Checking DNS & DHCP Information**

| Command                               | Description                                      |
| ------------------------------------- | ------------------------------------------------ |
| `cat /etc/resolv.conf`              | Show DNS servers                                 |
| `nmcli dev show eth0`               | Display network details, including DHCP settings |
| `cat /var/lib/dhcp/dhclient.leases` | View DHCP lease information                      |

### **Troubleshooting Network Issues**

| Command                               | Description                      |
| ------------------------------------- | -------------------------------- |
| `ping google.com`                   | Test network connectivity        |
| `traceroute google.com`             | Trace the route to a destination |
| `netstat -tulnp`                    | Show active network connections  |
| `sudo systemctl restart networking` | Restart the network service      |

---

## 🔄 Workflows

### **Checking Network Configuration**

1. Run `ip a` to view all network interfaces.
2. Use `ip r` to check the default gateway.
3. View DNS settings using `cat /etc/resolv.conf`.

### **Assigning a Static IP Address**

1. Identify the interface using `ip link show`.
2. Assign an IP using `sudo ip a add 192.168.1.100/24 dev eth0`.
3. Set the default gateway using `sudo ip r add default via 192.168.1.1`.

### **Troubleshooting Network Issues**

1. Test connectivity using `ping google.com`.
2. Check active connections using `netstat -tulnp`.
3. Restart networking using `sudo systemctl restart networking`.

---

## 💡 Examples

```sh
# Show all network interfaces and IP addresses
ip a

# Assign a static IP address
sudo ip a add 192.168.1.100/24 dev eth0

# Check DNS servers
cat /etc/resolv.conf
```

---

## 📚 References

- **[Linux IP Configuration Guide](https://linuxconfig.org/linux-ipconfig-equivalent)**
- **[Ubuntu Networking Commands](https://askubuntu.com/questions/79000/what-is-the-equivalent-terminal-command-to-ipconfig-all)**

```
<!-- end list -->
```
