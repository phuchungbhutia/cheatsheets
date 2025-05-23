title: JDBC Cheatsheet

category: Database Management
description: A quick reference guide for essential JDBC commands, database connection techniques, and best practices for executing SQL queries.

---

## 🛠️ Commands

### **Basic JDBC Operations**

| Command                                                                 | Description                            |
| ----------------------------------------------------------------------- | -------------------------------------- |
| `Class.forName("com.mysql.jdbc.Driver")`                              | Load JDBC driver                       |
| `Connection conn = DriverManager.getConnection(url, user, password);` | Establish database connection          |
| `Statement stmt = conn.createStatement();`                            | Create a SQL statement                 |
| `ResultSet rs = stmt.executeQuery("SELECT * FROM table");`            | Execute SQL query and retrieve results |

### **Using Prepared Statements**

| Command                                                                                 | Description                 |
| --------------------------------------------------------------------------------------- | --------------------------- |
| `PreparedStatement pstmt = conn.prepareStatement("INSERT INTO users VALUES (?, ?)");` | Create a prepared statement |
| `pstmt.setString(1, "John");`                                                         | Set parameter value         |
| `pstmt.executeUpdate();`                                                              | Execute SQL update          |

### **Handling Transactions**

| Command                        | Description              |
| ------------------------------ | ------------------------ |
| `conn.setAutoCommit(false);` | Disable auto-commit mode |
| `conn.commit();`             | Commit transaction       |
| `conn.rollback();`           | Rollback transaction     |

### **Closing Database Resources**

| Command           | Description      |
| ----------------- | ---------------- |
| `rs.close();`   | Close ResultSet  |
| `stmt.close();` | Close Statement  |
| `conn.close();` | Close Connection |

---

## 🔄 Workflows

### **Connecting to a Database**

1. Load JDBC driver using `Class.forName("com.mysql.jdbc.Driver")`.
2. Establish connection using `DriverManager.getConnection(url, user, password)`.
3. Create a statement using `conn.createStatement()`.
4. Execute SQL queries using `stmt.executeQuery("SELECT * FROM table")`.

### **Executing SQL Queries with Prepared Statements**

1. Create a prepared statement using `conn.prepareStatement("INSERT INTO users VALUES (?, ?)")`.
2. Set parameter values using `pstmt.setString(1, "John")`.
3. Execute update using `pstmt.executeUpdate()`.

### **Managing Transactions**

1. Disable auto-commit using `conn.setAutoCommit(false)`.
2. Commit transaction using `conn.commit()`.
3. Rollback transaction if needed using `conn.rollback()`.

---

## 💡 Examples

```java
// Load JDBC driver
Class.forName("com.mysql.jdbc.Driver");

// Establish connection
Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/mydb", "user", "password");

// Create and execute SQL statement
Statement stmt = conn.createStatement();
ResultSet rs = stmt.executeQuery("SELECT * FROM users");

// Process results
while (rs.next()) {
    System.out.println(rs.getString("username"));
}

// Close resources
rs.close();
stmt.close();
conn.close();
```

---

## 📚 References

- **[JDBC Cheat Sheet - Codecademy](https://www.codecademy.com/learn/learn-advanced-java/modules/java-database-connectivity-jdbc/cheatsheet)**
- **[JDBC Cheatsheet - GitHub](https://github.com/rgarciacarmona/Java-Database-Cheatsheets/blob/master/JDBC%20Cheatsheet.md)**

```
<!-- end list -->
```
