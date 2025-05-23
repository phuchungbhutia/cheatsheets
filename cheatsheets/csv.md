title: CSV Cheatsheet

category: Data Management
description: A quick reference guide for essential CSV commands, formats, and workflows for efficient data processing.

---

## 🛠️ Commands

### **Basic CSV Operations**

| Command                                 | Description                               |
| --------------------------------------- | ----------------------------------------- |
| `cat file.csv`                        | Display the contents of a CSV file        |
| `head -n 5 file.csv`                  | Show the first 5 lines of a CSV file      |
| `tail -n 5 file.csv`                  | Show the last 5 lines of a CSV file       |
| `cut -d',' -f1 file.csv`              | Extract the first column from a CSV file  |
| `awk -F',' '{print $1, $2}' file.csv` | Print the first two columns of a CSV file |

### **Reading & Writing CSV in Python**

| Command                                  | Description                     |
| ---------------------------------------- | ------------------------------- |
| `import csv`                           | Import the CSV module in Python |
| `csv.reader(open('file.csv'))`         | Read a CSV file in Python       |
| `csv.writer(open('output.csv', 'w'))`  | Write to a CSV file in Python   |
| `df = pd.read_csv('file.csv')`         | Read a CSV file using Pandas    |
| `df.to_csv('output.csv', index=False)` | Save a DataFrame as a CSV file  |

### **CSV Processing in Linux**

| Command                              | Description                            |
| ------------------------------------ | -------------------------------------- |
| `sort -t',' -k1 file.csv`          | Sort CSV file by the first column      |
| `uniq file.csv`                    | Remove duplicate lines from a CSV file |
| `grep "keyword" file.csv`          | Search for a keyword in a CSV file     |
| `sed 's/,/                           | /g' file.csv`                          |
| `awk -F',' '{print $NF}' file.csv` | Print the last column of a CSV file    |

### **Advanced CSV Manipulation**

| Command                                   | Description                                 |
| ----------------------------------------- | ------------------------------------------- |
| `csvcut -c column file.csv`             | Extract a specific column using csvkit      |
| `csvgrep -c column -m "value" file.csv` | Filter rows based on a column value         |
| `csvjoin -c column file1.csv file2.csv` | Join two CSV files on a common column       |
| `csvstat file.csv`                      | Get statistics about a CSV file             |
| `csvlook file.csv`                      | Display CSV file in a readable table format |

---

## 🔄 Workflows

### **Reading & Writing CSV Files in Python**

1. Import the CSV module (`import csv`).
2. Open a CSV file using `csv.reader(open('file.csv'))`.
3. Process data and write to a new CSV file using `csv.writer(open('output.csv', 'w'))`.

### **Filtering & Sorting CSV Data**

1. Use `grep "keyword" file.csv` to find specific rows.
2. Sort data using `sort -t',' -k1 file.csv`.
3. Remove duplicates using `uniq file.csv`.

### **Merging & Analyzing CSV Files**

1. Use `csvjoin -c column file1.csv file2.csv` to merge files.
2. Get statistics using `csvstat file.csv`.
3. Display CSV in a readable format using `csvlook file.csv`.

---

## 💡 Examples

```python
# Read a CSV file in Python
import csv
with open('file.csv', 'r') as f:
    reader = csv.reader(f)
    for row in reader:
        print(row)

# Filter CSV rows in Linux
csvgrep -c 2 -m "value" file.csv

# Convert CSV to a readable table format
csvlook file.csv
```

---

## 📚 References

- **[CSV Cheatsheet - HackingNote](https://www.hackingnote.com/en/cheatsheets/csv/)**
- **[Pandas CSV Cheat Sheet](https://www.geeksforgeeks.org/pandas-cheat-sheet/)**
- **[CSV Cheat Sheet - Deephaven](https://deephaven.io/core/docs/reference/cheat-sheets/csv/)**

```
<!-- end list -->
```
