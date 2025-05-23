title: PyPDF2 Cheatsheet

category: Python 
description: A quick reference guide for essential PyPDF2 commands, PDF manipulation, and best practices for handling PDF files in Python.

---

## 🛠️ Commands

### **Basic PyPDF2 Operations**

| Command                            | Description                   |
| ---------------------------------- | ----------------------------- |
| `pip install PyPDF2`             | Install PyPDF2 library        |
| `from PyPDF2 import PdfReader`   | Import PyPDF2 module          |
| `reader = PdfReader("file.pdf")` | Load a PDF file               |
| `len(reader.pages)`              | Get the total number of pages |

### **Extracting Text & Metadata**

| Command                            | Description                      |
| ---------------------------------- | -------------------------------- |
| `reader.pages[0].extract_text()` | Extract text from the first page |
| `reader.metadata`                | Retrieve PDF metadata            |
| `reader.metadata.author`         | Get the author of the PDF        |

### **Merging & Splitting PDFs**

| Command                          | Description              |
| -------------------------------- | ------------------------ |
| `from PyPDF2 import PdfMerger` | Import PDF merger module |
| `merger = PdfMerger()`         | Create a merger object   |
| `merger.append("file1.pdf")`   | Append a PDF file        |
| `merger.write("merged.pdf")`   | Save the merged PDF      |

### **Rotating & Encrypting PDFs**

| Command                           | Description                         |
| --------------------------------- | ----------------------------------- |
| `reader.pages[0].rotate(90)`    | Rotate the first page by 90 degrees |
| `writer.encrypt("password")`    | Encrypt a PDF file                  |
| `writer.write("protected.pdf")` | Save the encrypted PDF              |

---

## 🔄 Workflows

### **Extracting Text from a PDF**

1. Load the PDF using `PdfReader("file.pdf")`.
2. Access pages using `reader.pages[index]`.
3. Extract text using `extract_text()`.

### **Merging Multiple PDFs**

1. Create a `PdfMerger()` object.
2. Append PDFs using `merger.append("file.pdf")`.
3. Save the merged file using `merger.write("merged.pdf")`.

### **Securing PDF Files**

1. Encrypt the PDF using `writer.encrypt("password")`.
2. Save the protected file using `writer.write("protected.pdf")`.
3. Ensure password security for sensitive documents.

---

## 💡 Examples

```python
# Example: Extract text from a PDF
from PyPDF2 import PdfReader

reader = PdfReader("example.pdf")
text = reader.pages[0].extract_text()
print(text)
```

```python
# Example: Merge multiple PDFs
from PyPDF2 import PdfMerger

merger = PdfMerger()
merger.append("file1.pdf")
merger.append("file2.pdf")
merger.write("merged.pdf")
```

---

## 📚 References

- **[Introduction to PyPDF2 - GeeksforGeeks](https://www.geeksforgeeks.org/introduction-to-python-pypdf2-library/)**
- **[PyPDF2 Guide - AskPython](https://www.askpython.com/python-modules/pypdf2-python-library-for-pdf-files)**
- **[PyPDF2 GitHub Repository](https://github.com/dylanschoenmakers/PyPDF2)**

```
<!-- end list -->
```
