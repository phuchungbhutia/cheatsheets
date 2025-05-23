title: Faiss Cheatsheet

category: Vector AI
description: A quick reference guide for essential Faiss commands, vector indexing techniques, and best practices for AI-powered retrieval.

---

## 🛠️ Commands

### **Basic Faiss Operations**

| Command                   | Description                          |
| ------------------------- | ------------------------------------ |
| `pip install faiss-cpu` | Install Faiss for CPU-based indexing |
| `pip install faiss-gpu` | Install Faiss for GPU acceleration   |
| `import faiss`          | Import Faiss library in Python       |

### **Creating & Managing Vector Indexes**

| Command                                    | Description                                    |
| ------------------------------------------ | ---------------------------------------------- |
| `index = faiss.IndexFlatL2(dimension)`   | Create a flat L2 index                         |
| `index.add(vectors)`                     | Add vectors to the index                       |
| `index.search(query_vector, k)`          | Perform a similarity search with top-k results |
| `faiss.write_index(index, "index_file")` | Save index to a file                           |
| `index = faiss.read_index("index_file")` | Load index from a file                         |

### **Using Faiss for AI-Powered Retrieval**

| Command                                                     | Description                                 |
| ----------------------------------------------------------- | ------------------------------------------- |
| `index = faiss.IndexIVFFlat(quantizer, dimension, nlist)` | Create an inverted file index               |
| `index.train(training_vectors)`                           | Train index with sample vectors             |
| `index.add(vectors)`                                      | Add vectors to trained index                |
| `index.nprobe = 10`                                       | Set number of probes for approximate search |

### **Optimizing Faiss Performance**

| Command                                       | Description                                              |
| --------------------------------------------- | -------------------------------------------------------- |
| `faiss.normalize_L2(vectors)`               | Normalize vectors for better search accuracy             |
| `index = faiss.IndexHNSWFlat(dimension, M)` | Create a hierarchical navigable small world (HNSW) index |
| `index = faiss.IndexPQ(dimension, m, 8)`    | Create a product quantization (PQ) index                 |

---

## 🔄 Workflows

### **Creating a Basic Faiss Index**

1. Install Faiss using `pip install faiss-cpu`.
2. Create an index using `faiss.IndexFlatL2(dimension)`.
3. Add vectors using `index.add(vectors)`.
4. Perform a similarity search using `index.search(query_vector, k)`.

### **Using Faiss for Large-Scale AI Retrieval**

1. Train an inverted file index using `index.train(training_vectors)`.
2. Add vectors using `index.add(vectors)`.
3. Optimize search accuracy using `index.nprobe = 10`.

### **Saving & Loading Faiss Indexes**

1. Save index using `faiss.write_index(index, "index_file")`.
2. Load index using `index = faiss.read_index("index_file")`.

---

## 💡 Examples

```python
# Install Faiss
pip install faiss-cpu

# Create a flat L2 index
import faiss
index = faiss.IndexFlatL2(128)

# Add vectors to the index
import numpy as np
vectors = np.random.random((1000, 128)).astype('float32')
index.add(vectors)

# Perform a similarity search
query_vector = np.random.random((1, 128)).astype('float32')
k = 5
distances, indices = index.search(query_vector, k)
print(indices)
```

---

## 📚 References

- **[Faiss Python API Cheat Sheet](https://cheatsheet.md/vector-database/faiss-python-api.en)**
- **[Faiss Guide for LangChain](https://langchain-opentutorial.gitbook.io/langchain-opentutorial/09-vectorstore/03-faiss)**
- **[Faiss Integration with LangChain](https://python.langchain.com/docs/integrations/vectorstores/faiss/)**

```
<!-- end list -->
```

---

This **Faiss cheatsheet** strictly follows your template format and provides a complete reference! Let me know if you need modifications or additional details. 🚀
