**title:** Wireshark Cheatsheet

**category:** Cybersecurity
**description:** A structured reference guide for Wireshark, covering essential commands, filters, and packet analysis techniques.

---

## 🔍 **Core Principles for Wireshark Usage**

### **Fundamental Concepts**

| Principle                             | Description                                        |
| ------------------------------------- | -------------------------------------------------- |
| **Packet Capture**              | Records network traffic for analysis               |
| **Display Filters**             | Filters packets based on specific criteria         |
| **Protocol Analysis**           | Examines network protocols like TCP, UDP, and HTTP |
| **Security Monitoring**         | Detects suspicious network activity                |
| **Performance Troubleshooting** | Identifies latency and connectivity issues         |

### **Essential Wireshark Commands & Filters**

| Command/Filter                     | Function                                  |
| ---------------------------------- | ----------------------------------------- |
| **ip.addr == [IP]**          | Filters packets by IP address             |
| **tcp.port == [Port]**       | Filters packets by TCP port               |
| **http.request**             | Displays HTTP requests only               |
| **dns.qry.name == [Domain]** | Filters DNS queries for a specific domain |
| **ssl.handshake.type == 1**  | Displays SSL/TLS Client Hello packets     |

---

## 🔄 **Workflows**

### **Optimizing Network Analysis**

1. **Capture packets** using Wireshark’s interface selection.
2. **Apply display filters** to focus on relevant traffic.
3. **Analyze protocol details** for troubleshooting.

### **Enhancing Security Monitoring**

1. **Monitor unusual traffic patterns** for potential threats.
2. **Inspect encrypted traffic** for anomalies.
3. **Use Wireshark’s built-in statistics** for deeper insights.

---

## 💡 **Examples**

```plaintext
# Example: Filtering TCP Traffic on Port 443
tcp.port == 443  
```

---

## 📚 **References**

- **[Wireshark Cheat Sheet](https://www.comparitech.com/net-admin/wireshark-cheat-sheet/)**
- **[Wireshark Display Filters Guide](https://www.pinterest.co.uk/pin/705587466591415814/)**
- **[Wireshark Packet Analysis Tutorial](https://www.stationx.net/wireshark-cheat-sheet/)**

```
<!-- end list -->
```
