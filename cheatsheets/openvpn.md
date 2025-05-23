title: OpenVPN Cheatsheet

category: Network Security
description: A quick reference guide for essential OpenVPN commands, configurations, and troubleshooting techniques for secure remote access.

---

## 🛠️ Commands

### **Basic OpenVPN Commands**

| Command                              | Description                              |
| ------------------------------------ | ---------------------------------------- |
| `openvpn --config client.ovpn`     | Start OpenVPN using a configuration file |
| `systemctl start openvpn@server`   | Start OpenVPN server                     |
| `systemctl stop openvpn@server`    | Stop OpenVPN server                      |
| `systemctl restart openvpn@server` | Restart OpenVPN service                  |
| `journalctl -u openvpn`            | View OpenVPN logs                        |

### **Client Configuration**

| Command                                      | Description                            |
| -------------------------------------------- | -------------------------------------- |
| `scp user@server:/home/user/client.ovpn .` | Copy OpenVPN client config from server |
| `openvpn --config client.ovpn --daemon`    | Start OpenVPN in background mode       |
| `pkill openvpn`                            | Stop OpenVPN client                    |
| `cat /etc/openvpn/client.conf`             | View client configuration              |

### **Server Configuration**

| Command                                             | Description                       |
| --------------------------------------------------- | --------------------------------- |
| `nano /etc/openvpn/server.conf`                   | Edit OpenVPN server configuration |
| `systemctl enable openvpn@server`                 | Enable OpenVPN to start on boot   |
| `iptables -A INPUT -p udp --dport 1194 -j ACCEPT` | Allow OpenVPN traffic             |
| `iptables -A FORWARD -i tun0 -o eth0 -j ACCEPT`   | Enable forwarding for VPN traffic |

### **Troubleshooting OpenVPN**

| Command                    | Description                  |
| -------------------------- | ---------------------------- |
| `ping 8.8.8.8`           | Test network connectivity    |
| `traceroute example.com` | Trace network routes         |
| `netstat -tulnp            | grep openvpn`                |
| `wg show`                | Display WireGuard VPN status |

---

## 🔄 Workflows

### **Setting Up OpenVPN Server**

1. Install OpenVPN (`sudo apt install openvpn`).
2. Configure `/etc/openvpn/server.conf` with VPN settings.
3. Start VPN using `systemctl start openvpn@server`.

### **Connecting to OpenVPN Client**

1. Copy the `.ovpn` configuration file from the server.
2. Start OpenVPN using `openvpn --config client.ovpn`.
3. Verify connection using `ping 8.8.8.8`.

### **Troubleshooting VPN Connectivity**

1. Check network status using `ping 8.8.8.8`.
2. Verify VPN logs using `journalctl -u openvpn`.
3. Restart VPN service if needed (`systemctl restart openvpn@server`).

---

## 💡 Examples

```sh
# Start OpenVPN client
openvpn --config client.ovpn

# Check OpenVPN logs
journalctl -u openvpn

# Allow VPN traffic through firewall
iptables -A INPUT -p udp --dport 1194 -j ACCEPT
```

---

## 📚 References

- **[OpenVPN Cheat Sheet](https://cheatsheets.stephane.plus/networks/openvpn/)**
- **[Subnet Mask Cheat Sheet for Network Admins](https://openvpn.net/as-docs/subnet-mask-cheat-sheet.html)**

```
<!-- end list -->
```
