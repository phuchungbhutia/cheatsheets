title: Grok Cheatsheet

category: AI
description: A quick reference guide for essential Grok commands, workflows, and examples for efficient log parsing and data extraction.

---

## 🛠️ Commands

### **Basic Grok Syntax**

| Command                   | Description                                |
| ------------------------- | ------------------------------------------ |
| `%{PATTERN:field}`      | Defines a Grok pattern for extracting data |
| `%{IP:client_ip}`       | Extracts an IP address                     |
| `%{NUMBER:status_code}` | Extracts a numeric value                   |
| `%{WORD:method}`        | Extracts a single word                     |
| `%{DATA:message}`       | Extracts any text (least restrictive)      |

### **Common Grok Patterns**

| Pattern           | Description                           |
| ----------------- | ------------------------------------- |
| `%{IP}`         | Matches an IP address                 |
| `%{NUMBER}`     | Matches a numeric value               |
| `%{WORD}`       | Matches a single word                 |
| `%{DATA}`       | Matches any text                      |
| `%{DATE}`       | Matches a date format                 |
| `%{GREEDYDATA}` | Matches long text (least restrictive) |

### **Advanced Grok Patterns**

| Pattern                | Description                      |
| ---------------------- | -------------------------------- |
| `%{HTTPD_COMMONLOG}` | Matches Apache common log format |
| `%{SYSLOGTIMESTAMP}` | Matches syslog timestamp format  |
| `%{USERNAME}`        | Matches a username               |
| `%{EMAILADDRESS}`    | Matches an email address         |
| `%{UUID}`            | Matches a UUID format            |

### **Testing & Debugging Grok Patterns**

| Command                             | Description                           |
| ----------------------------------- | ------------------------------------- |
| `grokdebugger.com`                | Online Grok pattern testing tool      |
| `logstash --config.test_and_exit` | Test Logstash configuration           |
| `logstash --debug`                | Enable debug mode for troubleshooting |

---

## 🔄 Workflows

### **Parsing Log Data with Grok**

1. Define a Grok pattern:
   ```grok
   %{IP:client_ip} - - \[%{HTTPDATE:timestamp}\] "%{WORD:method} %{DATA:request} HTTP/%{NUMBER:http_version}" %{NUMBER:status_code} %{NUMBER:bytes}
   ```
2. Apply the pattern to log data.
3. Extract structured fields for analysis.

### **Debugging Grok Patterns**

1. Use an online Grok debugger (`grokdebugger.com`).
2. Test patterns with sample log entries.
3. Refine patterns to improve accuracy.

### **Integrating Grok with Logstash**

1. Define a Logstash configuration file.
2. Use Grok filters to parse logs.
3. Output structured data to Elasticsearch or Kibana.

---

## 💡 Examples

```grok
# Extract IP, timestamp, and request method from logs
%{IP:client_ip} - - \[%{HTTPDATE:timestamp}\] "%{WORD:method} %{DATA:request}"
```

---

## 📚 References

- **Grok Pattern Examples & Guide**: [Logz.io](https://logz.io/blog/grok-pattern-examples-for-log-parsing/)
- **Grok Debugger & Testing Tool**: [Grok Debugger](https://grokdebugger.com)
- **Grok Cheat Sheet (PDF)**: [GitHub](https://github.com/somerongit/cheat-sheets/blob/master/pdf/cheatsheet-python-grok.pdf)

```
<!-- end list -->
```

---

This Grok cheatsheet strictly follows your template and provides a complete reference! Let me know if you need modifications or additional details. 🚀
