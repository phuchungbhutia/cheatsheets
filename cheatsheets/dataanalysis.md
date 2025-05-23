title: Data Analysis Cheatsheet

category: Data Science
description: A quick reference guide for essential data analysis techniques, statistical methods, and best practices for extracting insights.

---

## 🛠️ Techniques

### **Data Wrangling & Cleaning**

| Command                                         | Description                                |
| ----------------------------------------------- | ------------------------------------------ |
| `df.info()`                                   | Display dataset structure and data types   |
| `df.describe()`                               | Generate summary statistics                |
| `df.dropna()`                                 | Remove missing values                      |
| `df.fillna(value)`                            | Fill missing values with a specified value |
| `df.rename(columns={'old_name': 'new_name'})` | Rename columns                             |

### **Exploratory Data Analysis (EDA)**

| Command                         | Description                               |
| ------------------------------- | ----------------------------------------- |
| `df.head()`                   | View first few rows of the dataset        |
| `df.tail()`                   | View last few rows of the dataset         |
| `df['column'].value_counts()` | Count occurrences of unique values        |
| `df.corr()`                   | Compute correlation matrix                |
| `df.hist()`                   | Generate histograms for numerical columns |

### **Data Visualization**

| Command                                         | Description                      |
| ----------------------------------------------- | -------------------------------- |
| `import matplotlib.pyplot as plt`             | Import Matplotlib for plotting   |
| `df.plot(kind='scatter', x='col1', y='col2')` | Create a scatter plot            |
| `df.plot(kind='bar')`                         | Generate a bar chart             |
| `df.plot(kind='box')`                         | Create a box plot                |
| `sns.heatmap(df.corr(), annot=True)`          | Generate a heatmap using Seaborn |

### **Statistical Analysis**

| Command                                     | Description                                 |
| ------------------------------------------- | ------------------------------------------- |
| `df.mean()`                               | Compute mean of numerical columns           |
| `df.median()`                             | Compute median values                       |
| `df.std()`                                | Calculate standard deviation                |
| `df.groupby('column').mean()`             | Group data and compute mean                 |
| `stats.ttest_ind(df['col1'], df['col2'])` | Perform t-test for statistical significance |

### **Machine Learning & Predictive Modeling**

| Command                                                  | Description                                  |
| -------------------------------------------------------- | -------------------------------------------- |
| `from sklearn.model_selection import train_test_split` | Split dataset into training and testing sets |
| `from sklearn.linear_model import LinearRegression`    | Import linear regression model               |
| `model.fit(X_train, y_train)`                          | Train a machine learning model               |
| `model.predict(X_test)`                                | Make predictions using trained model         |
| `from sklearn.metrics import accuracy_score`           | Evaluate model performance                   |

---

## 🔄 Workflows

### **Performing Exploratory Data Analysis (EDA)**

1. Load dataset using `df = pd.read_csv('data.csv')`.
2. Check missing values using `df.isnull().sum()`.
3. Generate summary statistics using `df.describe()`.
4. Visualize distributions using `df.hist()`.

### **Building a Machine Learning Model**

1. Split dataset using `train_test_split(X, y, test_size=0.2)`.
2. Train model using `model.fit(X_train, y_train)`.
3. Make predictions using `model.predict(X_test)`.
4. Evaluate accuracy using `accuracy_score(y_test, y_pred)`.

### **Creating Data Visualizations**

1. Generate scatter plots using `df.plot(kind='scatter', x='col1', y='col2')`.
2. Create heatmaps using `sns.heatmap(df.corr(), annot=True)`.
3. Build bar charts using `df.plot(kind='bar')`.

---

## 💡 Examples

```python
# Load dataset
import pandas as pd
df = pd.read_csv('data.csv')

# Perform exploratory data analysis
print(df.info())
print(df.describe())

# Visualize data
import matplotlib.pyplot as plt
df.plot(kind='scatter', x='feature1', y='feature2')
plt.show()
```

---

## 📚 References

- **[Data Analysis Cheat Sheets - DataCamp](https://www.datacamp.com/cheat-sheet/category/data-analysis)**
- **[SQL for Data Analysis Cheat Sheet - LearnSQL.com](https://learnsql.com/blog/sql-for-data-analysis-cheat-sheet/)**
- **[Data Analytics Cheatsheets - Codecademy](https://www.codecademy.com/resources/cheatsheets/subject/data-analytics)**

```
<!-- end list -->
```
