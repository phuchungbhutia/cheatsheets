title: Untitled
category: Uncategorized
description: No description provided.

**title:** Sorting Algorithms Cheatsheet

**category:** Computer Science & Algorithms
**description:** A structured reference guide for sorting algorithms, covering types, complexities, and applications.

---

## 🔢 **Core Principles for Sorting Algorithms**

### **Fundamental Concepts**

| Algorithm                | Description                                                       | Time Complexity (Best/Average/Worst)          |
| ------------------------ | ----------------------------------------------------------------- | --------------------------------------------- |
| **Bubble Sort**    | Repeatedly swaps adjacent elements if they are in the wrong order | \( O(n) / O(n^2) / O(n^2) \)                  |
| **Selection Sort** | Finds the smallest element and moves it to the front              | \( O(n^2) / O(n^2) / O(n^2) \)                |
| **Insertion Sort** | Builds a sorted array one element at a time                       | \( O(n) / O(n^2) / O(n^2) \)                  |
| **Merge Sort**     | Divides the array into halves and merges them in sorted order     | \( O(n \log n) / O(n \log n) / O(n \log n) \) |
| **Quick Sort**     | Uses partitioning to sort elements recursively                    | \( O(n \log n) / O(n \log n) / O(n^2) \)      |
| **Heap Sort**      | Uses a binary heap to sort elements efficiently                   | \( O(n \log n) / O(n \log n) / O(n \log n) \) |
| **Counting Sort**  | Sorts elements by counting occurrences (non-comparison-based)     | \( O(n + k) / O(n + k) / O(n + k) \)          |

### **Essential Sorting Techniques**

| Technique                          | Function                                                                   |
| ---------------------------------- | -------------------------------------------------------------------------- |
| **Comparison-Based Sorting** | Compares elements to determine order (e.g., Quick Sort, Merge Sort)        |
| **Non-Comparison Sorting**   | Uses counting or distribution (e.g., Counting Sort, Radix Sort)            |
| **Stable Sorting**           | Maintains relative order of equal elements (e.g., Merge Sort, Bubble Sort) |
| **In-Place Sorting**         | Sorts without extra memory (e.g., Quick Sort, Heap Sort)                   |

---

## 🔄 **Workflows**

### **Optimizing Sorting Algorithm Selection**

1. **Use Quick Sort for general-purpose sorting** due to efficiency.
2. **Apply Merge Sort** when stability is required.
3. **Use Counting Sort** for integer-based sorting with limited range.

### **Enhancing Algorithm Efficiency**

1. **Choose Heap Sort** for priority-based sorting.
2. **Use Insertion Sort** for small datasets.
3. **Optimize sorting with hybrid approaches** like Timsort.

---

## 💡 **Examples**

```plaintext
# Example: Implementing Quick Sort in Python
def quick_sort(arr):  
    if len(arr) <= 1:  
        return arr  
    pivot = arr[len(arr) // 2]  
    left = [x for x in arr if x < pivot]  
    middle = [x for x in arr if x == pivot]  
    right = [x for x in arr if x > pivot]  
    return quick_sort(left) + middle + quick_sort(right)  
```

---

## 📚 **References**

- **[Sorting Algorithms Cheat Sheet](https://cheatography.com/pryl/cheat-sheets/sorting-algorithms/pdf/)**
- **[Sorting Algorithm Guide](https://www.interviewcake.com/sorting-algorithm-cheat-sheet)**
- **[Sorting in C++ STL](https://www.geeksforgeeks.org/sort-algorithms-the-c-standard-template-library-stl/)**

```
<!-- end list -->
```