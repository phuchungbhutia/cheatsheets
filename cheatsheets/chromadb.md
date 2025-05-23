title: ChromaDB Cheatsheet

category: Vector AI
description: A quick reference guide for essential ChromaDB commands, embedding storage techniques, and best practices for AI-powered retrieval.

---

## 🛠️ Commands

### **Basic ChromaDB Operations**

| Command                                                | Description                             |
| ------------------------------------------------------ | --------------------------------------- |
| `pip install chromadb`                               | Install ChromaDB via pip                |
| `import chromadb`                                    | Import ChromaDB in Python               |
| `client = chromadb.PersistentClient(path="db_path")` | Initialize a persistent ChromaDB client |

### **Creating & Managing Collections**

| Command                                                         | Description                     |
| --------------------------------------------------------------- | ------------------------------- |
| `collection = client.create_collection(name="my_collection")` | Create a new collection         |
| `collection = client.get_collection(name="my_collection")`    | Retrieve an existing collection |
| `client.list_collections()`                                   | List all collections            |
| `client.delete_collection(name="my_collection")`              | Delete a collection             |

### **Adding & Retrieving Embeddings**

| Command                                                                                         | Description                    |
| ----------------------------------------------------------------------------------------------- | ------------------------------ |
| `collection.add(ids=["id1"], embeddings=[[1.5, 2.9, 3.4]], documents=["This is a document"])` | Add embeddings to a collection |
| `collection.get()`                                                                            | Retrieve stored embeddings     |
| `collection.query(query_embeddings=[[1.1, 2.3, 3.2]], n_results=2)`                           | Perform similarity search      |

### **Filtering & Metadata Handling**

| Command                                                                                            | Description                      |
| -------------------------------------------------------------------------------------------------- | -------------------------------- |
| `collection.add(ids=["id1"], embeddings=[[1.5, 2.9, 3.4]], metadatas=[{"source": "my_source"}])` | Add metadata to embeddings       |
| `collection.query(query_embeddings=[[1.1, 2.3, 3.2]], where={"source": "my_source"})`            | Filter results based on metadata |

### **Self-Hosting & Deployment**

| Command                                     | Description                              |
| ------------------------------------------- | ---------------------------------------- |
| `docker run -p 8000:8000 chromadb/chroma` | Run ChromaDB using Docker                |
| `collection.persist()`                    | Persist collection for long-term storage |

---

## 🔄 Workflows

### **Creating a Vector Store for AI Applications**

1. Install ChromaDB using `pip install chromadb`.
2. Initialize a persistent client using `chromadb.PersistentClient(path="db_path")`.
3. Create a collection using `client.create_collection(name="my_collection")`.
4. Add embeddings using `collection.add(ids=["id1"], embeddings=[[1.5, 2.9, 3.4]])`.

### **Retrieving Relevant Documents Using Vector Search**

1. Perform similarity search using `collection.query(query_embeddings=[[1.1, 2.3, 3.2]], n_results=2)`.
2. Filter results using metadata with `where={"source": "my_source"}`.

### **Deploying ChromaDB for Scalable AI Applications**

1. Run ChromaDB using `docker run -p 8000:8000 chromadb/chroma`.
2. Persist collections using `collection.persist()`.

---

## 💡 Examples

```python
# Install ChromaDB
pip install chromadb

# Initialize a persistent client
import chromadb
client = chromadb.PersistentClient(path="db_path")

# Create a collection
collection = client.create_collection(name="my_collection")

# Add embeddings
collection.add(ids=["id1"], embeddings=[[1.5, 2.9, 3.4]], documents=["This is a document"])

# Perform similarity search
collection.query(query_embeddings=[[1.1, 2.3, 3.2]], n_results=2)
```

---

## 📚 References

- **[Chroma Cookbook](https://cookbook.chromadb.dev/)**
- **[ChromaDB JS API Cheatsheet](https://gist.github.com/danielduckworth/b318e1297d9d953a2fe127738ce9e67c)**
- **[Step-by-Step Guide to ChromaDB](https://www.datacamp.com/tutorial/chromadb-tutorial-step-by-step-guide)**

```
<!-- end list -->
```
