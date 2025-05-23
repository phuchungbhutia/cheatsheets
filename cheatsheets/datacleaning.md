title: Data Cleaning Cheatsheet

category: Data Science
description: A quick reference guide for essential data cleaning techniques, handling missing values, and best practices for preparing datasets.

---

## 🛠️ Techniques

### **Handling Missing Data**

| Command                                      | Description                                |
| -------------------------------------------- | ------------------------------------------ |
| `df.isnull().sum()`                        | Count missing values in each column        |
| `df.dropna()`                              | Remove rows with missing values            |
| `df.fillna(value)`                         | Fill missing values with a specified value |
| `df.interpolate()`                         | Fill missing values using interpolation    |
| `df['column'].fillna(df['column'].mean())` | Replace missing values with column mean    |

### **Detecting & Removing Duplicates**

| Command                                   | Description                                  |
| ----------------------------------------- | -------------------------------------------- |
| `df.duplicated().sum()`                 | Count duplicate rows                         |
| `df.drop_duplicates()`                  | Remove duplicate rows                        |
| `df.drop_duplicates(subset=['column'])` | Remove duplicates based on a specific column |

### **Handling Outliers**

| Command                                                | Description                              |
| ------------------------------------------------------ | ---------------------------------------- |
| `df['column'].describe()`                            | Detect outliers using summary statistics |
| `sns.boxplot(data=df['column'])`                     | Visualize outliers using a box plot      |
| `df[df['column'] < df['column'].quantile(0.99)]`     | Remove extreme values using quantiles    |
| `df[df['column'].between(lower_bound, upper_bound)]` | Filter values within a specific range    |

### **Standardizing & Formatting Data**

| Command                               | Description                        |
| ------------------------------------- | ---------------------------------- |
| `df['column'].str.lower()`          | Convert text to lowercase          |
| `df['column'].str.strip()`          | Remove leading and trailing spaces |
| `df['column'].astype(int)`          | Convert column data type           |
| `pd.to_datetime(df['date_column'])` | Convert column to datetime format  |

### **Encoding Categorical Data**

| Command                                                                         | Description                                      |
| ------------------------------------------------------------------------------- | ------------------------------------------------ |
| `pd.get_dummies(df, columns=['category_column'])`                             | Convert categorical variables to dummy variables |
| `from sklearn.preprocessing import LabelEncoder`                              | Import LabelEncoder for categorical encoding     |
| `df['category_column'] = LabelEncoder().fit_transform(df['category_column'])` | Apply label encoding                             |

---

## 🔄 Workflows

### **Cleaning a Dataset for Analysis**

1. Load dataset using `df = pd.read_csv('data.csv')`.
2. Check missing values using `df.isnull().sum()`.
3. Remove duplicates using `df.drop_duplicates()`.
4. Detect outliers using `df.describe()`.
5. Standardize text formatting using `df['column'].str.lower()`.

### **Handling Missing Values & Outliers**

1. Fill missing values using `df.fillna(df.mean())`.
2. Remove extreme outliers using `df[df['column'] < df['column'].quantile(0.99)]`.

### **Encoding Categorical Variables for Machine Learning**

1. Convert categorical variables using `pd.get_dummies(df, columns=['category_column'])`.
2. Apply label encoding using `LabelEncoder().fit_transform(df['category_column'])`.

---

## 💡 Examples

```python
# Load dataset
import pandas as pd
df = pd.read_csv('data.csv')

# Remove missing values
df.dropna(inplace=True)

# Convert text to lowercase
df['name'] = df['name'].str.lower()

# Detect and remove duplicates
df.drop_duplicates(inplace=True)

# Convert categorical variables to numerical format
from sklearn.preprocessing import LabelEncoder
df['category'] = LabelEncoder().fit_transform(df['category'])
```

---

## 📚 References

- **[Pandas Cheat Sheet: Data Cleaning](https://datascientyst.com/pandas-cheat-sheet-data-cleaning/)**
- **[Data Cleaning with Python Cheat Sheet - KDnuggets](https://www.kdnuggets.com/2023/02/data-cleaning-python-cheat-sheet.html)**
- **[Infographic: Data Cleaning Checklist | DataCamp](https://www.datacamp.com/blog/infographic-data-cleaning-checklist)**

```
<!-- end list -->
```
