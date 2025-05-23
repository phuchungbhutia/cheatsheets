title: Pandas Cheatsheet

category: Python
description: A quick reference guide for essential Pandas commands, data manipulation techniques, and best practices for handling structured datasets.

---

## 🛠️ Commands

### **Basic Pandas Operations**

| Command                          | Description                              |
| -------------------------------- | ---------------------------------------- |
| `import pandas as pd`          | Import Pandas library                    |
| `df = pd.read_csv('file.csv')` | Load a CSV file into a DataFrame         |
| `df.head()`                    | View first few rows of the dataset       |
| `df.tail()`                    | View last few rows of the dataset        |
| `df.info()`                    | Display dataset structure and data types |
| `df.describe()`                | Generate summary statistics              |

### **Data Cleaning & Handling Missing Values**

| Command                                      | Description                                |
| -------------------------------------------- | ------------------------------------------ |
| `df.isnull().sum()`                        | Count missing values in each column        |
| `df.dropna()`                              | Remove rows with missing values            |
| `df.fillna(value)`                         | Fill missing values with a specified value |
| `df['column'].fillna(df['column'].mean())` | Replace missing values with column mean    |

### **Filtering & Selecting Data**

| Command                              | Description                         |
| ------------------------------------ | ----------------------------------- |
| `df['column']`                     | Select a single column              |
| `df[['col1', 'col2']]`             | Select multiple columns             |
| `df[df['column'] > value]`         | Filter rows based on condition      |
| `df.loc[row_index, column_name]`   | Select specific rows and columns    |
| `df.iloc[row_index, column_index]` | Select rows and columns by position |

### **Sorting & Grouping Data**

| Command                                | Description                               |
| -------------------------------------- | ----------------------------------------- |
| `df.sort_values('column')`           | Sort rows by column values                |
| `df.groupby('column').mean()`        | Group data and compute mean               |
| `df.groupby(['col1', 'col2']).sum()` | Group by multiple columns and compute sum |

### **Merging & Joining DataFrames**

| Command                                              | Description                         |
| ---------------------------------------------------- | ----------------------------------- |
| `pd.concat([df1, df2])`                            | Append rows of DataFrames           |
| `df1.merge(df2, on='key_column')`                  | Merge DataFrames on a common column |
| `df1.join(df2, lsuffix='_left', rsuffix='_right')` | Join DataFrames with suffixes       |

### **Data Visualization with Pandas**

| Command                                         | Description                               |
| ----------------------------------------------- | ----------------------------------------- |
| `df.plot(kind='scatter', x='col1', y='col2')` | Create a scatter plot                     |
| `df.plot(kind='bar')`                         | Generate a bar chart                      |
| `df.plot(kind='box')`                         | Create a box plot                         |
| `df.hist()`                                   | Generate histograms for numerical columns |

---

## 🔄 Workflows

### **Performing Exploratory Data Analysis (EDA)**

1. Load dataset using `df = pd.read_csv('data.csv')`.
2. Check missing values using `df.isnull().sum()`.
3. Generate summary statistics using `df.describe()`.
4. Visualize distributions using `df.hist()`.

### **Cleaning & Transforming Data**

1. Remove duplicates using `df.drop_duplicates()`.
2. Handle missing values using `df.fillna(df.mean())`.
3. Convert categorical variables using `pd.get_dummies(df, columns=['category_column'])`.

### **Merging & Aggregating Data**

1. Merge datasets using `df1.merge(df2, on='key_column')`.
2. Group data using `df.groupby('column').mean()`.

---

## 💡 Examples

```python
# Load dataset
import pandas as pd
df = pd.read_csv('data.csv')

# Perform exploratory data analysis
print(df.info())
print(df.describe())

# Filter data
filtered_df = df[df['column'] > 50]

# Visualize data
df.plot(kind='scatter', x='feature1', y='feature2')
```

---

## 📚 References

- **[Pandas Cheat Sheet for Data Science in Python - DataCamp](https://www.datacamp.com/cheat-sheet/pandas-cheat-sheet-for-data-science-in-python)**
- **[Pandas Cheat Sheet - GeeksforGeeks](https://www.geeksforgeeks.org/pandas-cheat-sheet/)**
- **[Data Wrangling with Pandas Cheat Sheet - Official Pandas Docs](https://pandas.pydata.org/Pandas_Cheat_Sheet.pdf)**

```
<!-- end list -->
```
