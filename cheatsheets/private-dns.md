**title:** Private DNS Cheatsheet

**category:** Cybersecurity

**description:** A structured reference guide for Private DNS, covering configuration, security, and troubleshooting.

---

## 🌐 **Core Principles for Private DNS**

### **Fundamental Concepts**

| Principle                      | Description                                                                   |
| ------------------------------ | ----------------------------------------------------------------------------- |
| **Private DNS**          | Resolves domain names within a private network instead of the public internet |
| **DNS Forwarding**       | Redirects queries to external DNS servers when necessary                      |
| **Split-Horizon DNS**    | Provides different DNS responses based on the requester’s network location   |
| **DNS-over-TLS (DoT)**   | Encrypts DNS queries for enhanced security                                    |
| **DNS-over-HTTPS (DoH)** | Uses HTTPS to secure DNS requests                                             |

### **Essential Private DNS Configuration**

| Configuration                         | Function                                               |
| ------------------------------------- | ------------------------------------------------------ |
| **Custom DNS Zones**            | Defines internal domain names for private networks     |
| **Recursive DNS Queries**       | Resolves domain names within the private network first |
| **Access Control Lists (ACLs)** | Restricts DNS queries to authorized devices            |
| **Logging & Monitoring**        | Tracks DNS requests for security analysis              |
| **DNSSEC Implementation**       | Protects against DNS spoofing and cache poisoning      |

---

## 🔄 **Workflows**

### **Optimizing Private DNS Setup**

1. **Define private DNS zones** for internal domain resolution.
2. **Enable DNS forwarding** for external queries when needed.
3. **Implement encryption protocols** like DoT or DoH for security.

### **Enhancing Network Security**

1. **Use access control lists** to restrict unauthorized DNS queries.
2. **Monitor DNS logs** for suspicious activity.
3. **Apply DNSSEC** to prevent tampering with DNS records.

---

## 💡 **Examples**

```plaintext
# Example: Configuring Private DNS in Linux
1. Edit `/etc/resolv.conf`  
2. Set `nameserver 192.168.1.1` (Private DNS server IP)  
3. Save and restart networking services  
```

---

## 📚 **References**

- **[Custom Private DNS Configuration](https://learn.microsoft.com/en-us/samples/azure/azure-quickstart-templates/custom-private-dns/)**
- **[DNS Cheat Sheet](https://chrisachard.com/cheatsheets/dns-cheatsheet.pdf)**
- **[DNS Security Guide](https://cheatography.com/janek/cheat-sheets/dns/pdf/)**

```
<!-- end list -->
```
