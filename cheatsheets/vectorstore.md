title: Vector Store Cheatsheet

category: Vector AI
description: A quick reference guide for essential vector store commands, embedding storage techniques, and best practices for AI-powered applications.

---

## 🛠️ Commands

### **Basic Vector Store Operations**

| Command                   | Description                                    |
| ------------------------- | ---------------------------------------------- |
| `pip install langchain` | Install LangChain for vector store integration |
| `pip install faiss-cpu` | Install FAISS for efficient vector storage     |
| `pip install chromadb`  | Install ChromaDB for vector-based retrieval    |

### **Creating & Managing Vector Stores**

| Command                                                  | Description                          |
| -------------------------------------------------------- | ------------------------------------ |
| `from langchain.vectorstores import FAISS`             | Import FAISS vector store            |
| `vectorstore = FAISS.from_documents(docs, embeddings)` | Create a vector store from documents |
| `vectorstore.save_local("faiss_index")`                | Save vector store locally            |
| `vectorstore.load_local("faiss_index", embeddings)`    | Load a saved vector store            |

### **Embedding & Retrieval Techniques**

| Command                                               | Description                                  |
| ----------------------------------------------------- | -------------------------------------------- |
| `from langchain.embeddings import OpenAIEmbeddings` | Import OpenAI embeddings                     |
| `embeddings = OpenAIEmbeddings()`                   | Initialize embeddings for vector storage     |
| `vectorstore.similarity_search("query", k=5)`       | Perform similarity search with top 5 results |

### **Using Vector Stores with LangChain**

| Command                                       | Description                                |
| --------------------------------------------- | ------------------------------------------ |
| `retriever = vectorstore.as_retriever()`    | Convert vector store into a retriever      |
| `retriever.get_relevant_documents("query")` | Retrieve relevant documents based on query |

### **Self-Hosting & Deployment**

| Command                                     | Description                                |
| ------------------------------------------- | ------------------------------------------ |
| `docker run -p 8000:8000 chromadb/chroma` | Run ChromaDB using Docker                  |
| `vectorstore.persist()`                   | Persist vector store for long-term storage |

---

## 🔄 Workflows

### **Creating a Vector Store for AI Applications**

1. Install LangChain and FAISS using `pip install langchain faiss-cpu`.
2. Create a vector store using `FAISS.from_documents(docs, embeddings)`.
3. Save the vector store using `vectorstore.save_local("faiss_index")`.

### **Retrieving Relevant Documents Using Vector Search**

1. Convert vector store into a retriever using `vectorstore.as_retriever()`.
2. Perform similarity search using `vectorstore.similarity_search("query", k=5)`.

### **Deploying Vector Store for Scalable AI Applications**

1. Use ChromaDB for efficient vector storage with `pip install chromadb`.
2. Run ChromaDB using `docker run -p 8000:8000 chromadb/chroma`.

---

## 💡 Examples

```python
# Install LangChain and FAISS
pip install langchain faiss-cpu

# Create a vector store from documents
from langchain.vectorstores import FAISS
vectorstore = FAISS.from_documents(docs, embeddings)

# Perform similarity search
vectorstore.similarity_search("AI research", k=5)
```

---

## 📚 References

- **[How to Use Vector Store in LangChain](https://cheatsheet.md/langchain-tutorials/vector-store-langchain.en)**
- **[C++ STL Cheat Sheet - GeeksforGeeks](https://www.geeksforgeeks.org/cpp-stl-cheat-sheet/)**
- **[Learn C++: Vectors Cheatsheet - Codecademy](https://www.codecademy.com/learn/learn-c-plus-plus/modules/learn-cpp-vectors/cheatsheet)**

```
<!-- end list -->
```

---

This **Vector Store cheatsheet** strictly follows your template format and provides a complete reference! Let me know if you need modifications or additional details. 🚀
