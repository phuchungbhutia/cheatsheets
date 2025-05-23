title: DNSRecon Cheatsheet

category: Pentesting
description: A quick reference guide for essential DNSRecon commands, DNS enumeration techniques, and best practices for gathering domain information.

---

## 🛠️ Commands

### **Basic DNSRecon Operations**

| Command                                         | Description                          |
| ----------------------------------------------- | ------------------------------------ |
| `dnsrecon -d <target_domain>`                 | Perform basic DNS enumeration        |
| `dnsrecon -d <target_domain> -n <dns_server>` | Use a specific DNS server            |
| `dnsrecon -d <target_domain> -a`              | Attempt a zone transfer              |
| `dnsrecon -d <target_domain> -g`              | Perform Google lookup for subdomains |

### **Subdomain & Host Enumeration**

| Command                                              | Description                                   |
| ---------------------------------------------------- | --------------------------------------------- |
| `dnsrecon -d <target_domain> -D <subdomains_file>` | Brute-force subdomains using a wordlist       |
| `dnsrecon -d <target_domain> -t tld`               | Expand Top-Level Domains (TLDs)               |
| `dnsrecon -r <cidr_range>`                         | Perform reverse lookup on IPs in a CIDR range |

### **DNS Record Enumeration**

| Command                                | Description                                |
| -------------------------------------- | ------------------------------------------ |
| `dnsrecon -d <target_domain> -t soa` | Enumerate SOA (Start of Authority) records |
| `dnsrecon -d <target_domain> -t spf` | Enumerate SPF records                      |
| `dnsrecon -d <target_domain> -t std` | Perform standard DNS enumeration           |
| `dnsrecon -d <target_domain> -c`     | Check DNS server cached records            |

### **Output & Logging**

| Command                                               | Description                            |
| ----------------------------------------------------- | -------------------------------------- |
| `dnsrecon -d <target_domain> -o <output_file.xml>`  | Save results in XML format             |
| `dnsrecon -d <target_domain> -o <output_file.json>` | Save results in JSON format            |
| `dnsrecon -d <target_domain> -v`                    | Increase verbosity for detailed output |

---

## 🔄 Workflows

### **Performing a Basic DNS Enumeration**

1. Run `dnsrecon -d <target_domain>` to gather basic DNS records.
2. Use `dnsrecon -d <target_domain> -t std` for a full enumeration.
3. Save results using `dnsrecon -d <target_domain> -o output.json`.

### **Brute-Forcing Subdomains**

1. Prepare a wordlist of common subdomains.
2. Run `dnsrecon -d <target_domain> -D subdomains.txt -t brt`.
3. Analyze results for potential attack vectors.

### **Checking for Zone Transfers**

1. Run `dnsrecon -d <target_domain> -a` to attempt a zone transfer.
2. If successful, analyze the leaked DNS records for security risks.

---

## 💡 Examples

```sh
# Perform basic DNS enumeration
dnsrecon -d example.com

# Attempt a zone transfer
dnsrecon -d example.com -a

# Brute-force subdomains using a wordlist
dnsrecon -d example.com -D subdomains.txt -t brt
```

---

## 📚 References

- **[DNSRecon Cheat Sheet by EC-Council](https://www.eccouncil.org/wp-content/uploads/2023/09/DNSRecon-Cheat-Sheet-3.pdf)**
- **[GitHub DNSRecon Cheatsheet](https://github.com/wishmastersystem/nthuls_books/blob/main/dns_recon_cheatsheet.txt)**
- **[GeeksforGeeks DNSRecon Guide](https://www.geeksforgeeks.org/dnsrecon-a-powerful-dns-enumeration-script/)**

```
<!-- end list -->
```
