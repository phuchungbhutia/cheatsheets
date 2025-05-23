title: Linux Firewall Cheatsheet

category: Linux
description: A quick reference guide for essential Linux firewall commands, rules, and workflows for efficient network protection.

---

## 🛠️ Commands

### **Basic Firewall Management**

| Command                              | Description                  |
| ------------------------------------ | ---------------------------- |
| `sudo systemctl start firewalld`   | Start the firewall service   |
| `sudo systemctl stop firewalld`    | Stop the firewall service    |
| `sudo systemctl restart firewalld` | Restart the firewall service |
| `sudo firewall-cmd --state`        | Check firewall status        |
| `sudo firewall-cmd --reload`       | Reload firewall rules        |

### **Zone & Rule Configuration**

| Command                                                    | Description                    |
| ---------------------------------------------------------- | ------------------------------ |
| `sudo firewall-cmd --get-zones`                          | List available firewall zones  |
| `sudo firewall-cmd --get-active-zones`                   | Show active zones              |
| `sudo firewall-cmd --zone=public --add-port=8080/tcp`    | Open port 8080 for TCP traffic |
| `sudo firewall-cmd --zone=public --remove-port=8080/tcp` | Close port 8080                |
| `sudo firewall-cmd --zone=public --add-service=http`     | Allow HTTP traffic             |

### **Advanced Firewall Rules**

| Command                                                                                                        | Description                                  |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| `sudo firewall-cmd --list-all`                                                                               | Show all firewall rules                      |
| `sudo firewall-cmd --zone=public --add-rich-rule='rule family="ipv4" source address="192.168.1.100" accept'` | Allow traffic from a specific IP             |
| `sudo firewall-cmd --zone=public --add-masquerade`                                                           | Enable NAT masquerading                      |
| `sudo firewall-cmd --zone=public --add-forward-port=port=8080:proto=tcp:toport=80:toaddr=192.168.1.200`      | Forward traffic from port 8080 to another IP |

### **Iptables Firewall Commands**

| Command                                                | Description                 |
| ------------------------------------------------------ | --------------------------- |
| `sudo iptables -L`                                   | List all firewall rules     |
| `sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT` | Allow SSH traffic           |
| `sudo iptables -A INPUT -p tcp --dport 80 -j DROP`   | Block HTTP traffic          |
| `sudo iptables -D INPUT -p tcp --dport 80 -j DROP`   | Remove a rule blocking HTTP |
| `sudo iptables-save > /etc/iptables.rules`           | Save firewall rules         |

---

## 🔄 Workflows

### **Setting Up a Basic Firewall**

1. Start the firewall service (`sudo systemctl start firewalld`).
2. Enable common services (`sudo firewall-cmd --zone=public --add-service=http`).
3. Open necessary ports (`sudo firewall-cmd --zone=public --add-port=443/tcp`).
4. Reload firewall rules (`sudo firewall-cmd --reload`).

### **Blocking & Allowing Traffic**

1. Block an IP address (`sudo firewall-cmd --zone=public --add-rich-rule='rule family="ipv4" source address="192.168.1.100" drop'`).
2. Allow SSH access (`sudo firewall-cmd --zone=public --add-service=ssh`).
3. Remove a blocked IP (`sudo firewall-cmd --zone=public --remove-rich-rule='rule family="ipv4" source address="192.168.1.100" drop'`).

### **Managing Firewall Rules with Iptables**

1. List current rules (`sudo iptables -L`).
2. Add a rule to allow SSH (`sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT`).
3. Save rules (`sudo iptables-save > /etc/iptables.rules`).

---

## 💡 Examples

```bash
# Allow HTTP traffic
sudo firewall-cmd --zone=public --add-service=http

# Block traffic from a specific IP
sudo firewall-cmd --zone=public --add-rich-rule='rule family="ipv4" source address="192.168.1.100" drop'

# Open port 443 for secure web traffic
sudo firewall-cmd --zone=public --add-port=443/tcp
```

---

## 📚 References

- **[Linux Firewall Cheat Sheet](https://opensource.com/downloads/firewall-cheat-sheet)**
- **[Firewalld Command Cheat Sheet](https://www.golinuxcloud.com/firewalld-cheat-sheet/)**
- **[Linux Security Command Guide](https://www.geeksforgeeks.org/linux-security-command-cheat-sheet/)**

```
<!-- end list -->
```
