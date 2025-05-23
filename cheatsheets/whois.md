title: WHOIS Cheatsheet

category: Networking
description: A quick reference guide for essential WHOIS commands, domain lookups, and best practices for retrieving registration details.

---

## 🛠️ Commands

### **Basic WHOIS Queries**

| Command                              | Description                             |
| ------------------------------------ | --------------------------------------- |
| `whois <domain>`                   | Retrieve WHOIS information for a domain |
| `whois <IP>`                       | Get WHOIS details for an IP address     |
| `whois -h <whois_server> <domain>` | Query a specific WHOIS server           |
| `whois -p <port> <domain>`         | Specify a port for WHOIS lookup         |

### **Advanced WHOIS Queries**

| Command                           | Description                                    |
| --------------------------------- | ---------------------------------------------- |
| `whois -r <domain>`             | Display raw WHOIS output                       |
| `whois -6 <IPv6>`               | Perform WHOIS lookup using IPv6                |
| `whois -h whois.iana.org <TLD>` | Get information about a top-level domain (TLD) |

### **Using WHOIS for Security & Reconnaissance**

| Command            | Description         |
| ------------------ | ------------------- |
| `whois`<domain>` | grep "Registrar"`   |
| `whois`<domain>` | grep "Expiration"`  |
| `whois`<domain>` | grep "Name Server"` |

### **WHOIS Output & Logging**

| Command                         | Description                  |
| ------------------------------- | ---------------------------- |
| `whois <domain> > output.txt` | Save WHOIS results to a file |
| `whois`<domain>`              | tee output.txt`              |

---

## 🔄 Workflows

### **Performing a Basic WHOIS Lookup**

1. Run `whois <domain>` to retrieve domain registration details.
2. Use `whois <IP>` to get information about an IP address.
3. Query a specific WHOIS server using `whois -h <whois_server> <domain>`.

### **Extracting Key Information from WHOIS Results**

1. Find the registrar using `whois <domain> | grep "Registrar"`.
2. Check domain expiration using `whois <domain> | grep "Expiration"`.
3. List authoritative name servers using `whois <domain> | grep "Name Server"`.

### **Saving WHOIS Output for Analysis**

1. Save results using `whois <domain> > output.txt`.
2. Display and save results simultaneously using `whois <domain> | tee output.txt`.

---

## 💡 Examples

```sh
# Retrieve WHOIS information for a domain
whois example.com

# Get WHOIS details for an IP address
whois 8.8.8.8

# Query a specific WHOIS server
whois -h whois.verisign-grs.com google.com
```

---

## 📚 References

- **[WHOIS and DNS Cheat Sheet](https://cheatography.com/binca/cheat-sheets/whois-and-dns/pdf/)**
- **[How to Use WHOIS on Ubuntu](https://www.geeksforgeeks.org/how-to-use-the-whois-command-on-ubuntu-linux/)**
- **[Linux WHOIS Command with Practical Examples](https://labex.io/tutorials/linux-linux-whois-command-with-practical-examples-423010)**

```
<!-- end list -->
```
