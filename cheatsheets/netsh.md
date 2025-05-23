title: Netsh Cheatsheet

category: Network Configuration
description: A quick reference guide for essential Netsh commands, contexts, and workflows for managing Windows network settings.

---

## 🛠️ Commands

### **Basic Netsh Commands**

| Command                                   | Description                              |
| ----------------------------------------- | ---------------------------------------- |
| `netsh interface show interface`        | Display all network interfaces           |
| `netsh interface ip show config`        | Show IP configuration for all interfaces |
| `netsh wlan show profiles`              | List saved Wi-Fi profiles                |
| `netsh wlan show networks mode=bssid`   | Show available Wi-Fi networks            |
| `netsh advfirewall show currentprofile` | Display current firewall settings        |

### **Network Configuration**

| Command                                                                                      | Description                  |
| -------------------------------------------------------------------------------------------- | ---------------------------- |
| `netsh interface ip set address "Ethernet" static 192.168.1.100 255.255.255.0 192.168.1.1` | Set a static IP address      |
| `netsh interface ip set dns "Ethernet" static 8.8.8.8`                                     | Set a static DNS server      |
| `netsh interface ip set address "Ethernet" dhcp`                                           | Enable DHCP for an interface |
| `netsh interface set interface "Wi-Fi" admin=disable`                                      | Disable a network interface  |
| `netsh interface set interface "Wi-Fi" admin=enable`                                       | Enable a network interface   |

### **Firewall & Security**

| Command                                                                                                 | Description                 |
| ------------------------------------------------------------------------------------------------------- | --------------------------- |
| `netsh advfirewall firewall add rule name="Allow HTTP" dir=in action=allow protocol=TCP localport=80` | Allow incoming HTTP traffic |
| `netsh advfirewall firewall delete rule name="Allow HTTP"`                                            | Remove a firewall rule      |
| `netsh advfirewall set allprofiles state off`                                                         | Disable Windows Firewall    |
| `netsh advfirewall set allprofiles state on`                                                          | Enable Windows Firewall     |

### **Wireless & Wi-Fi Management**

| Command                                                              | Description                               |
| -------------------------------------------------------------------- | ----------------------------------------- |
| `netsh wlan show drivers`                                          | Display Wi-Fi adapter details             |
| `netsh wlan connect name="HomeWiFi"`                               | Connect to a saved Wi-Fi network          |
| `netsh wlan disconnect`                                            | Disconnect from the current Wi-Fi network |
| `netsh wlan export profile name="HomeWiFi" folder=C:\WiFiProfiles` | Export a Wi-Fi profile                    |
| `netsh wlan delete profile name="HomeWiFi"`                        | Delete a saved Wi-Fi profile              |

### **Troubleshooting & Diagnostics**

| Command                                      | Description                   |
| -------------------------------------------- | ----------------------------- |
| `netsh interface ip reset`                 | Reset TCP/IP stack            |
| `netsh winsock reset`                      | Reset Winsock settings        |
| `netsh int tcp show global`                | Display TCP global parameters |
| `netsh trace start capture=yes report=yes` | Start network packet capture  |
| `netsh trace stop`                         | Stop network packet capture   |

---

## 🔄 Workflows

### **Configuring a Static IP Address**

1. Open Command Prompt as Administrator.
2. Run `netsh interface ip set address "Ethernet" static 192.168.1.100 255.255.255.0 192.168.1.1`.
3. Verify settings using `netsh interface ip show config`.

### **Managing Wi-Fi Networks**

1. List available networks using `netsh wlan show networks mode=bssid`.
2. Connect to a saved network using `netsh wlan connect name="HomeWiFi"`.
3. Export Wi-Fi profiles using `netsh wlan export profile name="HomeWiFi" folder=C:\WiFiProfiles`.

### **Resetting Network Settings**

1. Reset TCP/IP stack using `netsh interface ip reset`.
2. Reset Winsock settings using `netsh winsock reset`.
3. Restart the computer to apply changes.

---

## 💡 Examples

```shell
# Set a static IP address
netsh interface ip set address "Ethernet" static 192.168.1.100 255.255.255.0 192.168.1.1

# Allow incoming HTTP traffic through firewall
netsh advfirewall firewall add rule name="Allow HTTP" dir=in action=allow protocol=TCP localport=80

# Reset network settings
netsh winsock reset
```

---

## 📚 References

- **[Netsh Command Syntax &amp; Formatting](https://learn.microsoft.com/en-us/windows-server/networking/technologies/netsh/netsh-contexts)**
- **[Most Useful Netsh Commands](https://www.cyberithub.com/31-most-useful-netsh-command-examples-in-windows/)**

```
<!-- end list -->
```
