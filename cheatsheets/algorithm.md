title: Algorithm Cheatsheet

category: Computer Science
description: A quick reference guide for essential algorithms, including sorting, searching, dynamic programming, and graph traversal.

---

## 🛠️ Algorithm Categories

### **Sorting Algorithms**

| Algorithm                | Time Complexity | Description                                                       |
| ------------------------ | --------------- | ----------------------------------------------------------------- |
| **Bubble Sort**    | O(n²)          | Repeatedly swaps adjacent elements if they are in the wrong order |
| **Selection Sort** | O(n²)          | Finds the smallest element and places it at the beginning         |
| **Insertion Sort** | O(n²)          | Builds a sorted array one element at a time                       |
| **Merge Sort**     | O(n log n)      | Divides the array into halves and merges them in sorted order     |
| **Quick Sort**     | O(n log n)      | Partitions the array and sorts recursively                        |
| **Heap Sort**      | O(n log n)      | Uses a heap data structure to sort elements                       |

### **Searching Algorithms**

| Algorithm                      | Time Complexity | Description                                             |
| ------------------------------ | --------------- | ------------------------------------------------------- |
| **Linear Search**        | O(n)            | Searches for an element sequentially                    |
| **Binary Search**        | O(log n)        | Searches in a sorted array by dividing the search space |
| **Jump Search**          | O(√n)          | Skips elements in fixed intervals for faster searching  |
| **Interpolation Search** | O(log log n)    | Estimates the position of the target in a sorted array  |

### **Graph Algorithms**

| Algorithm                            | Time Complexity | Description                                        |
| ------------------------------------ | --------------- | -------------------------------------------------- |
| **Breadth-First Search (BFS)** | O(V + E)        | Explores nodes level by level                      |
| **Depth-First Search (DFS)**   | O(V + E)        | Explores nodes deeply before backtracking          |
| **Dijkstra’s Algorithm**      | O(V²)          | Finds the shortest path in a weighted graph        |
| **Bellman-Ford Algorithm**     | O(VE)           | Finds shortest paths with negative weights         |
| **Floyd-Warshall Algorithm**   | O(V³)          | Computes shortest paths between all pairs of nodes |

### **Dynamic Programming Algorithms**

| Algorithm                                  | Time Complexity | Description                                             |
| ------------------------------------------ | --------------- | ------------------------------------------------------- |
| **Fibonacci Sequence (Memoization)** | O(n)            | Stores previous results to avoid redundant calculations |
| **Knapsack Problem**                 | O(nW)           | Optimizes item selection for maximum value              |
| **Longest Common Subsequence (LCS)** | O(nm)           | Finds the longest matching sequence between two strings |
| **Matrix Chain Multiplication**      | O(n³)          | Determines the optimal way to multiply matrices         |

---

## 🔄 Workflows

### **Optimizing Sorting Performance**

1. Use **Merge Sort** for large datasets.
2. Apply **Quick Sort** for efficient partitioning.
3. Use **Heap Sort** for priority-based sorting.

### **Choosing the Right Search Algorithm**

1. Use **Binary Search** for sorted arrays.
2. Apply **Jump Search** for large datasets.
3. Use **Linear Search** for unsorted data.

### **Solving Graph Problems Efficiently**

1. Use **BFS** for shortest path in unweighted graphs.
2. Apply **Dijkstra’s Algorithm** for weighted graphs.
3. Use **Floyd-Warshall** for all-pairs shortest paths.

---

## 💡 Examples

```python
# Example: Binary Search Implementation
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

```python
# Example: Fibonacci Sequence using Memoization
def fibonacci(n, memo={}):
    if n in memo:
        return memo[n]
    if n <= 1:
        return n
    memo[n] = fibonacci(n-1, memo) + fibonacci(n-2, memo)
    return memo[n]
```

---

## 📚 References

- **[LeetCode Algorithm Templates](https://algo.monster/templates)**
- **[Algorithm Cheat Sheet for Interviews](https://github.com/Zajason/leetcode_algorithm_cheatsheet)**

```
<!-- end list -->
```
