title: Untitled
category: Uncategorized
description: No description provided.

**title:** Searching Algorithms Cheatsheet

**category:** Algorithms
**description:** A structured reference guide for searching algorithms, covering types, complexities, and applications.

---

## 🔍 **Core Principles for Searching Algorithms**

### **Fundamental Concepts**

| Algorithm                            | Description                                             | Time Complexity (Best/Average/Worst)          |
| ------------------------------------ | ------------------------------------------------------- | --------------------------------------------- |
| **Linear Search**              | Checks each element sequentially                        | \( O(1) / O(n) / O(n) \)                      |
| **Binary Search**              | Divides sorted data in half repeatedly                  | \( O(1) / O(\log n) / O(\log n) \)            |
| **Jump Search**                | Skips ahead by fixed steps in sorted data               | \( O(\sqrt{n}) / O(\sqrt{n}) / O(\sqrt{n}) \) |
| **Interpolation Search**       | Estimates position based on value distribution          | \( O(1) / O(\log \log n) / O(n) \)            |
| **Exponential Search**         | Expands search range exponentially before binary search | \( O(1) / O(\log n) / O(\log n) \)            |
| **Depth-First Search (DFS)**   | Explores graph nodes deeply before backtracking         | \( O(V + E) \)                                |
| **Breadth-First Search (BFS)** | Explores graph nodes level by level                     | \( O(V + E) \)                                |

### **Essential Searching Techniques**

| Technique                   | Function                                               |
| --------------------------- | ------------------------------------------------------ |
| **Sequential Search** | Searches elements one by one                           |
| **Divide & Conquer**  | Splits data into smaller sections for faster searching |
| **Graph Traversal**   | Navigates nodes in graphs using DFS or BFS             |
| **Hash-Based Lookup** | Uses hash tables for constant-time search              |

---

## 🔄 **Workflows**

### **Optimizing Searching Algorithm Selection**

1. **Use Linear Search for unsorted data** when simplicity is preferred.
2. **Apply Binary Search** for sorted datasets to improve efficiency.
3. **Use Graph Traversal** for network-based problems.

### **Enhancing Algorithm Efficiency**

1. **Choose Interpolation Search** for uniformly distributed data.
2. **Use Hash Tables** for fast key-based lookups.
3. **Optimize searching with hybrid approaches** like Exponential Search.

---

## 💡 **Examples**

```plaintext
# Example: Implementing Binary Search in Python
def binary_search(arr, target):  
    left, right = 0, len(arr) - 1  
    while left <= right:  
        mid = (left + right) // 2  
        if arr[mid] == target:  
            return mid  
        elif arr[mid] < target:  
            left = mid + 1  
        else:  
            right = mid - 1  
    return -1  
```

---

## 📚 **References**

- **[Searching Algorithms Cheat Sheet](https://www.geeksforgeeks.org/searching-algorithms/)**
- **[Algorithm Complexity Guide](https://www.bigocheatsheet.com/)**
- **[Graph Traversal Techniques](https://www.programiz.com/dsa/graph-searching-algorithms)**

```
<!-- end list -->
```