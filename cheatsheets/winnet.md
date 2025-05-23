title: Windows Networking Cheatsheet

category: Network Configuration
description: A quick reference guide for essential Windows networking commands, tools, and workflows for efficient network management.

---

## 🛠️ Commands

### **Basic Network Configuration**

| Command                | Description                         |
| ---------------------- | ----------------------------------- |
| `ipconfig`           | Display basic network configuration |
| `ipconfig /all`      | Show detailed network settings      |
| `ipconfig /release`  | Release the current IP address      |
| `ipconfig /renew`    | Renew the IP address from DHCP      |
| `ipconfig /flushdns` | Clear the DNS cache                 |

### **Network Connectivity & Testing**

| Command                  | Description                                   |
| ------------------------ | --------------------------------------------- |
| `ping google.com`      | Test network connectivity                     |
| `tracert google.com`   | Trace the route packets take to a destination |
| `nslookup example.com` | Query DNS records for a domain                |
| `netstat -tulnp`       | Show active network connections               |
| `arp -a`               | Display the ARP table                         |

### **Firewall & Security**

| Command                                                                                                 | Description                       |
| ------------------------------------------------------------------------------------------------------- | --------------------------------- |
| `netsh advfirewall show currentprofile`                                                               | Display current firewall settings |
| `netsh advfirewall firewall add rule name="Allow HTTP" dir=in action=allow protocol=TCP localport=80` | Allow incoming HTTP traffic       |
| `netsh advfirewall set allprofiles state off`                                                         | Disable Windows Firewall          |
| `netsh advfirewall set allprofiles state on`                                                          | Enable Windows Firewall           |

### **Wi-Fi & Wireless Management**

| Command                                 | Description                               |
| --------------------------------------- | ----------------------------------------- |
| `netsh wlan show profiles`            | List saved Wi-Fi profiles                 |
| `netsh wlan show networks mode=bssid` | Show available Wi-Fi networks             |
| `netsh wlan connect name="HomeWiFi"`  | Connect to a saved Wi-Fi network          |
| `netsh wlan disconnect`               | Disconnect from the current Wi-Fi network |

### **Remote Access & File Sharing**

| Command                       | Description                  |
| ----------------------------- | ---------------------------- |
| `net use Z: \\server\share` | Map a network drive          |
| `net user /domain`          | List domain users            |
| `net share`                 | Display shared folders       |
| `net session`               | Show active network sessions |

---

## 🔄 Workflows

### **Checking Network Configuration**

1. Open Command Prompt.
2. Run `ipconfig /all` to view detailed settings.
3. Verify IP address, subnet mask, and gateway.

### **Troubleshooting Network Issues**

1. Test connectivity using `ping google.com`.
2. Trace network routes with `tracert example.com`.
3. Check open ports using `netstat -tulnp`.

### **Managing Wi-Fi Networks**

1. List available networks using `netsh wlan show networks mode=bssid`.
2. Connect to a saved network using `netsh wlan connect name="HomeWiFi"`.
3. Export Wi-Fi profiles using `netsh wlan export profile name="HomeWiFi" folder=C:\WiFiProfiles`.

---

## 💡 Examples

```sh
# Check network connectivity
ping google.com

# Securely copy a file from a remote server
net use Z: \\server\share

# Scan active devices on a network
netstat -tulnp
```

---

## 📚 References

- **[Windows Networking Commands Cheat Sheet](https://ccm.net/computing/networks/1983-windows-network-commands-for-tcp-ip/)**
- **[Windows Command Line-Networking Cheat Sheet](https://cheatography.com/boogie/cheat-sheets/windows-command-line-networking/pdf/)**
- **[15 Useful Windows Networking Commands](https://homenetworkgeek.com/15-useful-windows-networking-commands-you-should-know/)**

```
<!-- end list -->
```
