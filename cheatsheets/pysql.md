title: PySQL Cheatsheet

category: Python
description: A quick reference guide for using PySQL (PyMySQL) to interact with MySQL databases, execute queries, and manage transactions.

---

## 🛠️ Commands

### **Database Connection**

| Command                                                                                             | Description                   |
| --------------------------------------------------------------------------------------------------- | ----------------------------- |
| `import pymysql`                                                                                  | Import PyMySQL module         |
| `connection = pymysql.connect(host='localhost', user='root', password='password', db='database')` | Connect to MySQL database     |
| `cursor = connection.cursor()`                                                                    | Create a cursor object        |
| `connection.close()`                                                                              | Close the database connection |

### **Executing Queries**

| Command                                                                            | Description                    |
| ---------------------------------------------------------------------------------- | ------------------------------ |
| `cursor.execute("SELECT * FROM users")`                                          | Execute a SQL query            |
| `cursor.fetchall()`                                                              | Fetch all results              |
| `cursor.fetchone()`                                                              | Fetch a single result          |
| `cursor.execute("INSERT INTO users (name, age) VALUES (%s, %s)", ('Alice', 25))` | Insert data into a table       |
| `connection.commit()`                                                            | Commit changes to the database |

### **Transaction Management**

| Command                   | Description          |
| ------------------------- | -------------------- |
| `connection.begin()`    | Start a transaction  |
| `connection.commit()`   | Commit transaction   |
| `connection.rollback()` | Rollback transaction |

### **Error Handling**

| Command                                      | Description         |
| -------------------------------------------- | ------------------- |
| `try: ... except pymysql.MySQLError as e:` | Handle MySQL errors |
| `print("Error:", e)`                       | Print error message |

---

## 🔄 Workflows

### **Connecting to a MySQL Database**

1. Import PyMySQL using `import pymysql`.
2. Establish a connection using `pymysql.connect()`.
3. Create a cursor object using `cursor = connection.cursor()`.

### **Executing SQL Queries**

1. Use `cursor.execute()` to run queries.
2. Fetch results using `cursor.fetchall()`.
3. Commit changes using `connection.commit()`.

### **Handling Transactions**

1. Start a transaction using `connection.begin()`.
2. Commit changes using `connection.commit()`.
3. Rollback if needed using `connection.rollback()`.

---

## 💡 Examples

```python
# Example: Connect to MySQL and fetch data
import pymysql

connection = pymysql.connect(host='localhost', user='root', password='password', db='database')
cursor = connection.cursor()

cursor.execute("SELECT * FROM users")
result = cursor.fetchall()
print(result)

connection.close()
```

```python
# Example: Insert data into a table
cursor.execute("INSERT INTO users (name, age) VALUES (%s, %s)", ('Alice', 25))
connection.commit()
```

---

## 📚 References

- **[PyMySQL CheatSheet](http://nonbleedingedge.com/cheatsheets/pymysql.html)**
- **[MySQL Cheat Sheet](https://learnsql.com/blog/mysql-cheat-sheet/)**

```
<!-- end list -->
```
