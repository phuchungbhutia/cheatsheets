title: Python Libraries Cheatsheet

category: Python
description: A quick reference guide for essential Python libraries, their functions, and best practices for development.

---

## 🛠️ Libraries

### **Data Science & Machine Learning**

| Library          | Description                     |
| ---------------- | ------------------------------- |
| `NumPy`        | Numerical computing with arrays |
| `Pandas`       | Data manipulation and analysis  |
| `Matplotlib`   | Data visualization              |
| `Seaborn`      | Statistical data visualization  |
| `Scikit-learn` | Machine learning algorithms     |

### **Web Development**

| Library           | Description                    |
| ----------------- | ------------------------------ |
| `Flask`         | Lightweight web framework      |
| `Django`        | Full-stack web framework       |
| `Requests`      | HTTP requests handling         |
| `BeautifulSoup` | Web scraping                   |
| `FastAPI`       | High-performance API framework |

### **Automation & Scripting**

| Library       | Description             |
| ------------- | ----------------------- |
| `Selenium`  | Web automation          |
| `PyAutoGUI` | GUI automation          |
| `OpenPyXL`  | Excel file manipulation |
| `PyPDF2`    | PDF processing          |
| `Schedule`  | Task scheduling         |

### **Data Processing & File Handling**

| Library        | Description                |
| -------------- | -------------------------- |
| `CSV`        | CSV file handling          |
| `JSON`       | JSON parsing               |
| `Pillow`     | Image processing           |
| `PyTorch`    | Deep learning framework    |
| `TensorFlow` | Machine learning framework |

---

## 🔄 Workflows

### **Using Pandas for Data Analysis**

1. Load data using `pd.read_csv()`.
2. Clean data using `df.dropna()`.
3. Analyze data using `df.describe()`.

### **Building a Web App with Flask**

1. Install Flask using `pip install flask`.
2. Define routes using `@app.route()`.
3. Run the app using `app.run()`.

### **Automating Tasks with Selenium**

1. Install Selenium using `pip install selenium`.
2. Open a browser using `webdriver.Chrome()`.
3. Interact with elements using `find_element_by_xpath()`.

---

## 💡 Examples

```python
# Example: Load and analyze data with Pandas
import pandas as pd
df = pd.read_csv("data.csv")
print(df.describe())
```

```python
# Example: Create a simple Flask web app
from flask import Flask
app = Flask(__name__)

@app.route("/")
def home():
    return "Hello, World!"

if __name__ == "__main__":
    app.run()
```

---

## 📚 References

- **[Python CheatSheet (2025) - GeeksforGeeks](https://www.geeksforgeeks.org/python-cheat-sheet/)**
- **[The Full Python Cheatsheet: From Basics to Data Science](https://www.techiediaries.com/python-cheatsheet/)**
- **[Python Cheatsheet](https://www.pythoncheatsheet.org/)**

```
<!-- end list -->
```
