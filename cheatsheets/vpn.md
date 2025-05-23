title: VPN Cheatsheet

category: Network Security
description: A quick reference guide for essential VPN protocols, configurations, and troubleshooting techniques for secure online access.

---

## 🛠️ Commands

### **Common VPN Protocols**

| Protocol      | Description                                           |
| ------------- | ----------------------------------------------------- |
| `OpenVPN`   | Open-source VPN protocol with strong encryption       |
| `WireGuard` | Lightweight and fast VPN protocol                     |
| `IPSec`     | Secure VPN protocol used in enterprise environments   |
| `L2TP`      | Layer 2 Tunneling Protocol, often combined with IPSec |
| `PPTP`      | Older VPN protocol with weaker security               |

### **VPN Configuration Commands**

| Command                          | Description                              |
| -------------------------------- | ---------------------------------------- |
| `openvpn --config client.ovpn` | Start OpenVPN using a configuration file |
| `wg-quick up wg0`              | Start WireGuard VPN                      |
| `wg-quick down wg0`            | Stop WireGuard VPN                       |
| `ipsec start`                  | Start IPSec VPN service                  |
| `ipsec stop`                   | Stop IPSec VPN service                   |

### **VPN Troubleshooting**

| Command                    | Description                  |
| -------------------------- | ---------------------------- |
| `ping 8.8.8.8`           | Test network connectivity    |
| `traceroute example.com` | Trace network routes         |
| `netstat -tulnp            | grep vpn`                    |
| `journalctl -u openvpn`  | View OpenVPN logs            |
| `wg show`                | Display WireGuard VPN status |

### **VPN Security Enhancements**

| Command                                             | Description                          |
| --------------------------------------------------- | ------------------------------------ |
| `iptables -A INPUT -p udp --dport 1194 -j ACCEPT` | Allow OpenVPN traffic                |
| `ufw allow 51820/udp`                             | Allow WireGuard traffic              |
| `fail2ban-client status`                          | Monitor failed login attempts        |
| `sysctl -w net.ipv4.ip_forward=1`                 | Enable IP forwarding for VPN routing |

---

## 🔄 Workflows

### **Setting Up OpenVPN**

1. Install OpenVPN (`sudo apt install openvpn`).
2. Download the `.ovpn` configuration file.
3. Start VPN using `openvpn --config client.ovpn`.

### **Configuring WireGuard VPN**

1. Install WireGuard (`sudo apt install wireguard`).
2. Configure `wg0.conf` with VPN settings.
3. Start VPN using `wg-quick up wg0`.

### **Troubleshooting VPN Connectivity**

1. Check network status using `ping 8.8.8.8`.
2. Verify VPN logs using `journalctl -u openvpn`.
3. Restart VPN service if needed (`systemctl restart openvpn`).

---

## 💡 Examples

```sh
# Start OpenVPN
openvpn --config client.ovpn

# Check WireGuard VPN status
wg show

# Allow VPN traffic through firewall
ufw allow 51820/udp
```

---

## 📚 References

- **[VPN Cheat Sheet on GitHub](https://github.com/CyberT33N/VPN-cheat-sheet)**
- **[Network Interview VPN Cheat Sheet](https://networkinterview.com/cheatsheets/vpn-cheatsheet/)**
- **[Cisco VPN Cheat Sheet](https://learningnetwork.cisco.com/s/article/vpn-vrf-aware-ipsec-cheat-sheet-real-world-part1)**

```
<!-- end list -->
```
