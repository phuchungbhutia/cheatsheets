title: Langflow Cheatsheet

category: RAG AI
description: A quick reference guide for essential Langflow commands, workflow automation techniques, and best practices for building AI-powered applications.

---

## 🛠️ Commands

### **Basic Langflow Operations**

| Command                         | Description              |
| ------------------------------- | ------------------------ |
| `pip install langflow`        | Install Langflow via pip |
| `langflow start`              | Start Langflow locally   |
| `langflow export <flow_id>`   | Export a workflow        |
| `langflow import <file.json>` | Import a workflow        |

### **Workflow Automation & Components**

| Command                    | Description                            |
| -------------------------- | -------------------------------------- |
| `Drag & Drop Components` | Build AI workflows visually            |
| `Connect Nodes`          | Link components for data processing    |
| `Modify Parameters`      | Adjust settings for AI models and APIs |

### **Expressions & Data Processing**

| Command                                        | Description                          |
| ---------------------------------------------- | ------------------------------------ |
| `{{ $json.field }}`                          | Access field from incoming JSON data |
| `{{ new Date().toISOString() }}`             | Generate an ISO timestamp            |
| `{{ $node["ComponentName"].json["value"] }}` | Access data from another node        |

### **Using Langflow with APIs & Integrations**

| Command                | Description                                       |
| ---------------------- | ------------------------------------------------- |
| `HTTP Request Node`  | Make API calls to external services               |
| `Database Nodes`     | Connect to MySQL, PostgreSQL, and other databases |
| `Vector Store Nodes` | Store and retrieve embeddings for AI models       |

### **Self-Hosting & Deployment**

| Command                              | Description                          |
| ------------------------------------ | ------------------------------------ |
| `docker run -p 3000:3000 langflow` | Run Langflow using Docker            |
| `langflow --port <port>`           | Run Langflow on a custom port        |
| `langflow --tunnel`                | Enable tunneling for external access |

---

## 🔄 Workflows

### **Creating a Basic AI Workflow**

1. Add a **Trigger Node** (Webhook, Schedule, or Manual).
2. Connect processing nodes (LLM, Function, or Database).
3. Define expressions for dynamic data handling.
4. Execute and monitor workflow execution.

### **Automating API Calls**

1. Use **HTTP Request Node** to fetch data from an API.
2. Process response using **Function Node**.
3. Store results in a database or send notifications.

### **Self-Hosting Langflow with Docker**

1. Pull the latest Langflow image using `docker pull langflow`.
2. Run Langflow using `docker run -p 3000:3000 langflow`.
3. Access the Langflow UI via `http://localhost:3000`.

---

## 💡 Examples

```sh
# Install Langflow
pip install langflow

# Start Langflow locally
langflow start

# Export a workflow
langflow export my_flow.json
```

---

## 📚 References

- **[Langflow Overview](https://docs.langflow.org/concepts-overview)**
- **[Langflow Official Website](https://www.langflow.org/)**
- **[Processing Components in Langflow](https://docs.datastax.com/en/langflow/components/processing.html)**

```
<!-- end list -->
```
