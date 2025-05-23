title: n8n Cheatsheet

category: AI
description: A quick reference guide for essential n8n commands, workflow automation techniques, and best practices for connecting applications.

---

## 🛠️ Commands

### **Basic n8n Operations**

| Command                                        | Description          |
| ---------------------------------------------- | -------------------- |
| `docker run -it --rm -p 5678:5678 n8nio/n8n` | Run n8n using Docker |
| `n8n start`                                  | Start n8n locally    |
| `n8n export:workflow --id <workflow_id>`     | Export a workflow    |
| `n8n import:workflow --input <file.json>`    | Import a workflow    |

### **Workflow Automation & Triggers**

| Command            | Description                                |
| ------------------ | ------------------------------------------ |
| `Webhook Node`   | Trigger workflows via HTTP requests        |
| `Schedule Node`  | Automate workflows based on time intervals |
| `Manual Trigger` | Execute workflows manually for testing     |

### **Expressions & Data Transformation**

| Command                                   | Description                          |
| ----------------------------------------- | ------------------------------------ |
| `{{ $json.field }}`                     | Access field from incoming JSON data |
| `{{ new Date().toISOString() }}`        | Generate an ISO timestamp            |
| `{{ $node["NodeName"].json["value"] }}` | Access data from another node        |

### **Using n8n with APIs & Integrations**

| Command               | Description                                       |
| --------------------- | ------------------------------------------------- |
| `HTTP Request Node` | Make API calls to external services               |
| `Webhook Node`      | Receive data from external applications           |
| `Database Nodes`    | Connect to MySQL, PostgreSQL, and other databases |

### **Self-Hosting & Deployment**

| Command                  | Description                          |
| ------------------------ | ------------------------------------ |
| `docker-compose up -d` | Deploy n8n using Docker Compose      |
| `n8n --tunnel`         | Enable tunneling for external access |
| `n8n --port <port>`    | Run n8n on a custom port             |

---

## 🔄 Workflows

### **Creating a Basic Workflow**

1. Add a **Trigger Node** (Webhook, Schedule, or Manual).
2. Connect processing nodes (HTTP Request, Function, or Database).
3. Define expressions for dynamic data handling.
4. Execute and monitor workflow execution.

### **Automating API Calls**

1. Use **HTTP Request Node** to fetch data from an API.
2. Process response using **Function Node**.
3. Store results in a database or send notifications.

### **Self-Hosting n8n with Docker**

1. Pull the latest n8n image using `docker pull n8nio/n8n`.
2. Run n8n using `docker run -it --rm -p 5678:5678 n8nio/n8n`.
3. Access the n8n UI via `http://localhost:5678`.

---

## 💡 Examples

```sh
# Run n8n using Docker
docker run -it --rm -p 5678:5678 n8nio/n8n

# Export a workflow
n8n export:workflow --id 123

# Make an API request using HTTP Request Node
{
  "method": "GET",
  "url": "https://api.example.com/data"
}
```

---

## 📚 References

- **[n8n Cheat Sheet - Community Guide](https://community.n8n.io/t/i-made-an-n8n-cheat-sheet/100548)**
- **[The Ultimate n8n Cheatsheet for Building AI Agents](https://www.spreadshare.co/the-ultimate-n8n-cheatsheet-for-building-ai-agents)**
- **[n8n Cheat Sheet Dashboard](https://openerpsolutions.co.uk/n8n_cheetsheet.html)**

```
<!-- end list -->
```

---

This **n8n cheatsheet** strictly follows your template format and provides a complete reference! Let me know if you need modifications or additional details. 🚀
