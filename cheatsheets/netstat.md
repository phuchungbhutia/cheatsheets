title: Netstat Cheatsheet

category: Networking
description: A quick reference guide for essential Netstat commands, options, and workflows for analyzing network connections, routing tables, and performance.

---

## 🛠️ Commands

### **Basic Netstat Operations**

| Command        | Description                         |
| -------------- | ----------------------------------- |
| `netstat -a` | Show all active connections         |
| `netstat -t` | Display TCP connections             |
| `netstat -u` | Display UDP connections             |
| `netstat -l` | Show listening ports                |
| `netstat -n` | Display addresses in numeric format |

### **Monitoring Network Connections**

| Command         | Description                                  |
| --------------- | -------------------------------------------- |
| `netstat -an` | Show all connections in numeric format       |
| `netstat -at` | Show all TCP connections                     |
| `netstat -au` | Show all UDP connections                     |
| `netstat -c`  | Continuously display network statistics      |
| `netstat -p`  | Show process IDs associated with connections |

### **Routing & Interface Information**

| Command         | Description                                    |
| --------------- | ---------------------------------------------- |
| `netstat -r`  | Display the routing table                      |
| `netstat -i`  | Show network interfaces                        |
| `netstat -ie` | Show extended network interface details        |
| `netstat -rn` | Show routing table without resolving hostnames |

### **Network Statistics & Performance**

| Command         | Description                 |
| --------------- | --------------------------- |
| `netstat -s`  | Display network statistics  |
| `netstat -st` | Show TCP statistics         |
| `netstat -su` | Show UDP statistics         |
| `netstat -w`  | Show raw network statistics |

---

## 🔄 Workflows

### **Checking Active Network Connections**

1. Run `netstat -a` to view all active connections.
2. Use `netstat -t` for TCP connections or `netstat -u` for UDP connections.
3. Display numeric addresses using `netstat -n`.

### **Monitoring Network Performance**

1. Use `netstat -s` to view overall network statistics.
2. Check TCP performance using `netstat -st`.
3. Continuously monitor connections using `netstat -c`.

### **Analyzing Routing Information**

1. View the routing table using `netstat -r`.
2. Show network interfaces using `netstat -i`.
3. Display routing details without hostname resolution using `netstat -rn`.

---

## 💡 Examples

```sh
# Show all active connections
netstat -a

# Display TCP connections
netstat -t

# View routing table
netstat -r
```

---

## 📚 References

- **[Netstat Command Cheat Sheet](https://quickref.me/netstat.html)**
- **[20 Netstat Command Examples](https://www.golinuxcloud.com/netstat-command-in-linux/)**

```
<!-- end list -->
```
