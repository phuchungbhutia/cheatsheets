title: ODBC Cheatsheet

category: Database Management
description: A quick reference guide for essential ODBC commands, connection string configurations, and best practices for accessing databases.

---

## 🛠️ Commands

### **Basic ODBC Operations**

| Command                                                                    | Description                        |
| -------------------------------------------------------------------------- | ---------------------------------- |
| `DriverManager.getConnection("jdbc:odbc:DataSource")`                    | Establish ODBC connection in Java  |
| `SQLAllocHandle(SQL_HANDLE_ENV, SQL_NULL_HANDLE, &henv)`                 | Allocate environment handle in C   |
| `SQLConnect(hdbc, "DSN", SQL_NTS, "User", SQL_NTS, "Password", SQL_NTS)` | Connect to database using ODBC API |

### **ODBC Connection Strings**

| Connection Type                            | Example                                                                                                 |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------- |
| **SQL Server (Windows Auth)**        | `Server=myServer;Database=myDB;Trusted_Connection=True;Driver={ODBC Driver 17 for SQL Server}`        |
| **SQL Server (Username & Password)** | `Server=myServer;Database=myDB;User ID=myUser;Password=myPass;Driver={ODBC Driver 17 for SQL Server}` |
| **MySQL**                            | `Driver={MySQL ODBC 8.0 Driver};Server=myServer;Database=myDB;User=myUser;Password=myPass;Option=3;`  |
| **PostgreSQL**                       | `Driver={PostgreSQL ODBC Driver};Server=myServer;Port=5432;Database=myDB;Uid=myUser;Pwd=myPass;`      |

### **Executing SQL Queries**

| Command                                                               | Description                    |
| --------------------------------------------------------------------- | ------------------------------ |
| `SQLExecDirect(hstmt, "SELECT * FROM table", SQL_NTS)`              | Execute SQL query              |
| `SQLFetch(hstmt)`                                                   | Fetch next row from result set |
| `SQLGetData(hstmt, 1, SQL_C_CHAR, buffer, sizeof(buffer), &length)` | Retrieve column data           |

### **Handling Transactions**

| Command                                                                 | Description          |
| ----------------------------------------------------------------------- | -------------------- |
| `SQLSetConnectAttr(hdbc, SQL_ATTR_AUTOCOMMIT, SQL_AUTOCOMMIT_OFF, 0)` | Disable auto-commit  |
| `SQLEndTran(SQL_HANDLE_DBC, hdbc, SQL_COMMIT)`                        | Commit transaction   |
| `SQLEndTran(SQL_HANDLE_DBC, hdbc, SQL_ROLLBACK)`                      | Rollback transaction |

---

## 🔄 Workflows

### **Connecting to a Database Using ODBC**

1. Define connection string using `Driver={ODBC Driver};Server=myServer;Database=myDB;User=myUser;Password=myPass;`.
2. Establish connection using `SQLConnect()`.
3. Execute queries using `SQLExecDirect()`.
4. Fetch results using `SQLFetch()`.

### **Executing SQL Queries**

1. Prepare SQL statement using `SQLPrepare()`.
2. Bind parameters using `SQLBindParameter()`.
3. Execute query using `SQLExecDirect()`.

### **Managing Transactions**

1. Disable auto-commit using `SQLSetConnectAttr()`.
2. Commit transaction using `SQLEndTran(SQL_COMMIT)`.
3. Rollback transaction if needed using `SQLEndTran(SQL_ROLLBACK)`.

---

## 💡 Examples

```c
// ODBC Connection Example in C
SQLHENV henv;
SQLHDBC hdbc;
SQLAllocHandle(SQL_HANDLE_ENV, SQL_NULL_HANDLE, &henv);
SQLAllocHandle(SQL_HANDLE_DBC, henv, &hdbc);
SQLConnect(hdbc, "DSN=myDataSource", SQL_NTS, "User", SQL_NTS, "Password", SQL_NTS);
```

---

## 📚 References

- **[SQL Server Connection Strings CheatSheet](https://gist.github.com/nullbind/91c573b0e27682733f97d4e6eebe36f8)**
- **[JSONPath Expression Examples – JSON Cheatsheet (SSIS / ODBC)](https://zappysys.com/blog/jsonpath-examples-expression-cheetsheet/)**
- **[ConnectionStrings.com - Database Connection Reference](https://www.connectionstrings.com/)**

```
<!-- end list -->
```
