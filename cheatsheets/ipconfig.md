title: Ipconfig Cheatsheet

category: Network Configuration
description: A quick reference guide for essential Ipconfig commands, options, and workflows for managing Windows network settings.

---

## 🛠️ Commands

### **Basic Ipconfig Commands**

| Command                | Description                                                   |
| ---------------------- | ------------------------------------------------------------- |
| `ipconfig`           | Display basic network configuration                           |
| `ipconfig /all`      | Show detailed network settings, including MAC address and DNS |
| `ipconfig /release`  | Release the current IP address                                |
| `ipconfig /renew`    | Renew the IP address from DHCP                                |
| `ipconfig /flushdns` | Clear the DNS cache                                           |

### **Advanced Network Configuration**

| Command                                 | Description                            |
| --------------------------------------- | -------------------------------------- |
| `ipconfig /displaydns`                | Show cached DNS entries                |
| `ipconfig /registerdns`               | Refresh DNS registration               |
| `ipconfig /showclassid Ethernet`      | Display DHCP class ID for an interface |
| `ipconfig /setclassid Ethernet 12345` | Set a DHCP class ID                    |

### **Troubleshooting & Diagnostics**

| Command                       | Description                                |
| ----------------------------- | ------------------------------------------ |
| `ipconfig /release`         | Disconnect from the network                |
| `ipconfig /renew`           | Reconnect to the network                   |
| `ipconfig /flushdns`        | Resolve DNS-related issues                 |
| `ipconfig /allcompartments` | Show network settings for all compartments |

---

## 🔄 Workflows

### **Resetting Network Settings**

1. Open Command Prompt as Administrator.
2. Run `ipconfig /release` to disconnect.
3. Run `ipconfig /renew` to reconnect.
4. Clear DNS cache using `ipconfig /flushdns`.

### **Checking Network Configuration**

1. Open Command Prompt.
2. Run `ipconfig /all` to view detailed settings.
3. Verify IP address, subnet mask, and gateway.

### **Fixing DNS Issues**

1. Run `ipconfig /flushdns` to clear cache.
2. Use `ipconfig /registerdns` to refresh DNS registration.
3. Restart the computer to apply changes.

---

## 💡 Examples

```shell
# Release and renew IP address
ipconfig /release
ipconfig /renew

# Flush DNS cache
ipconfig /flushdns

# Show detailed network settings
ipconfig /all
```

---

## 📚 References

- **[Ipconfig Command Guide](https://learn.microsoft.com/en-us/windows-server/networking/technologies/ipconfig-command)**
- **[Windows Networking Cheat Sheet](https://www.computerhope.com/ipconfig.htm)**

```
<!-- end list -->
```
