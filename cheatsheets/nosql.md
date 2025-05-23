title: NoSQL Cheatsheet

category: Database Management
description: A quick reference guide for essential NoSQL database types, commands, and best practices for handling large-scale data.

---

## 🛠️ NoSQL Database Types

| Type                          | Description                               | Example          |
| ----------------------------- | ----------------------------------------- | ---------------- |
| **Document Store**      | Stores data as JSON-like documents        | MongoDB          |
| **Key-Value Store**     | Stores data as key-value pairs            | Redis            |
| **Column-Family Store** | Stores data in columns for fast retrieval | Apache Cassandra |
| **Graph Database**      | Stores relationships between entities     | Neo4j            |

### **Basic NoSQL Operations**

| Command                   | Description                 |
| ------------------------- | --------------------------- |
| `CREATE DATABASE mydb;` | Create a new database       |
| `USE mydb;`             | Switch to a database        |
| `SHOW DATABASES;`       | List all databases          |
| `SHOW COLLECTIONS;`     | List all collections/tables |

### **CRUD Operations**

| Command                                         | Description          |
| ----------------------------------------------- | -------------------- |
| `INSERT INTO users VALUES ("Alice", 25);`     | Insert a record      |
| `SELECT * FROM users;`                        | Retrieve all records |
| `UPDATE users SET age=26 WHERE name="Alice";` | Update a record      |
| `DELETE FROM users WHERE name="Alice";`       | Delete a record      |

### **Indexing & Performance**

| Command                                   | Description               |
| ----------------------------------------- | ------------------------- |
| `CREATE INDEX idx_name ON users(name);` | Create an index           |
| `DROP INDEX idx_name;`                  | Remove an index           |
| `EXPLAIN SELECT * FROM users;`          | Analyze query performance |

### **Security & Authentication**

| Command                                             | Description        |
| --------------------------------------------------- | ------------------ |
| `CREATE USER 'admin' WITH PASSWORD 'securepass';` | Create a new user  |
| `GRANT READ, WRITE ON mydb TO 'admin';`           | Assign permissions |
| `REVOKE WRITE ON mydb FROM 'admin';`              | Remove permissions |

---

## 🔄 Workflows

### **Setting Up a NoSQL Database**

1. Install the NoSQL database (MongoDB, Redis, Cassandra, etc.).
2. Start the database server and connect using a client.
3. Create a database and define collections/tables.

### **Handling Data Efficiently**

1. Use indexes to speed up queries (`CREATE INDEX`).
2. Optimize queries using `EXPLAIN SELECT`.
3. Use aggregation pipelines for complex data processing.

### **Securing NoSQL Databases**

1. Enable authentication using `CREATE USER`.
2. Restrict access with role-based permissions.
3. Regularly monitor database performance.

---

## 💡 Examples

```json
// Example: Insert and retrieve data in MongoDB
db.users.insertOne({ "name": "Alice", "age": 25 })
db.users.find({ "name": "Alice" })
```

```sql
-- Example: Query data in Cassandra
SELECT * FROM users WHERE age > 20;
```

---

## 📚 References

- **[NoSQL Cheat Sheet - Cheatography](https://cheatography.com/xplendit/cheat-sheets/nosql/pdf/)**
- **[NoSQL Injection Cheatsheet - Null Sweep](https://nullsweep.com/nosql-injection-cheatsheet/)**

```
<!-- end list -->
```
