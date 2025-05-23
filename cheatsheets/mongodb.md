title: MongoDB Cheatsheet

category: Database Management
description: A quick reference guide for essential MongoDB commands, CRUD operations, indexing, and best practices for handling large-scale data.

---

## 🛠️ Commands

### **Basic MongoDB Operations**

| Command              | Description                          |
| -------------------- | ------------------------------------ |
| `mongo`            | Start MongoDB shell                  |
| `use mydatabase`   | Switch to a database                 |
| `show dbs`         | List all databases                   |
| `show collections` | List all collections in the database |

### **CRUD Operations**

| Command                                                          | Description               |
| ---------------------------------------------------------------- | ------------------------- |
| `db.collection.insertOne({name: "Alice"})`                     | Insert a single document  |
| `db.collection.insertMany([{name: "Bob"}, {name: "Charlie"}])` | Insert multiple documents |
| `db.collection.find()`                                         | Retrieve all documents    |
| `db.collection.find({name: "Alice"})`                          | Find specific documents   |
| `db.collection.updateOne({name: "Alice"}, {$set: {age: 25}})`  | Update a single document  |
| `db.collection.deleteOne({name: "Alice"})`                     | Delete a single document  |

### **Indexing & Performance**

| Command                                  | Description                           |
| ---------------------------------------- | ------------------------------------- |
| `db.collection.createIndex({name: 1})` | Create an index on the `name` field |
| `db.collection.getIndexes()`           | List all indexes                      |
| `db.collection.dropIndex("name_1")`    | Remove an index                       |

### **Aggregation & Query Optimization**

| Command                                                                             | Description               |
| ----------------------------------------------------------------------------------- | ------------------------- |
| `db.collection.aggregate([{ $group: { _id: "$category", count: { $sum: 1 } } }])` | Group and count documents |
| `db.collection.explain("executionStats").find({name: "Alice"})`                   | Analyze query performance |

### **Security & Authentication**

| Command                                                                   | Description         |
| ------------------------------------------------------------------------- | ------------------- |
| `db.createUser({user: "admin", pwd: "password", roles: ["readWrite"]})` | Create a new user   |
| `db.auth("admin", "password")`                                          | Authenticate a user |
| `db.dropUser("admin")`                                                  | Remove a user       |

---

## 🔄 Workflows

### **Setting Up MongoDB**

1. Install MongoDB and start the server using `mongod`.
2. Connect to MongoDB shell using `mongo`.
3. Create or switch databases using `use mydatabase`.

### **Handling Data Efficiently**

1. Use indexes to speed up queries (`createIndex`).
2. Optimize queries using `explain("executionStats")`.
3. Use aggregation pipelines for complex data processing.

### **Securing MongoDB**

1. Enable authentication using `createUser()`.
2. Restrict access with role-based permissions.
3. Regularly monitor database performance.

---

## 💡 Examples

```javascript
// Example: Insert and retrieve data in MongoDB
db.users.insertOne({name: "Alice", age: 25})
db.users.find({name: "Alice"})
```

```javascript
// Example: Aggregation query
db.sales.aggregate([
  { $group: { _id: "$category", totalSales: { $sum: "$amount" } } }
])
```

---

## 📚 References

- **[MongoDB Cheat Sheet - MongoDB Developer Center](https://www.mongodb.com/developer/products/mongodb/cheat-sheet/)**
- **[MongoDB Cheat Sheet (Basic to Advanced) - GeeksforGeeks](https://www.geeksforgeeks.org/mongodb-cheat-sheet/)**
- **[All MongoDB Commands You Will Ever Need - CodeWithHarry](https://www.codewithharry.com/blogpost/mongodb-cheatsheet)**

```
<!-- end list -->
```
