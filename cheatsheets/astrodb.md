title: AstroDB Cheatsheet

category: Database Management
description: A quick reference guide for essential AstroDB commands, schema management techniques, and best practices for integrating databases with Astro.

---

## 🛠️ Commands

### **Basic AstroDB Operations**

| Command                     | Description                          |
| --------------------------- | ------------------------------------ |
| `npm install @astrojs/db` | Install AstroDB integration          |
| `astro add db`            | Add AstroDB to your project          |
| `astro dev`               | Start local development with AstroDB |
| `astro db migrate`        | Apply schema migrations              |

### **Defining Database Schema**

| Command                                                                                                             | Description                     |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------- |
| `import { defineDb, defineTable, column } from 'astro:db'`                                                        | Import AstroDB schema utilities |
| `const User = defineTable({ columns: { userId: column.number({ primaryKey: true }), userName: column.text() } })` | Define a table schema           |
| `export default defineDb({ tables: { User } })`                                                                   | Export database schema          |

### **Seeding Data**

| Command                                                              | Description                        |
| -------------------------------------------------------------------- | ---------------------------------- |
| `import { db, User } from 'astro:db'`                              | Import database instance           |
| `await db.insert(User).values([{ userId: 1, userName: 'Alice' }])` | Insert seed data into the database |

### **Querying Data**

| Command                                                  | Description                        |
| -------------------------------------------------------- | ---------------------------------- |
| `await db.select().from(User)`                         | Retrieve all records from a table  |
| `await db.select().from(User).where('userId', '=', 1)` | Filter records based on conditions |

### **Deploying AstroDB**

| Command              | Description                           |
| -------------------- | ------------------------------------- |
| `astro db push`    | Deploy database schema to production  |
| `astro db migrate` | Apply schema migrations in production |

---

## 🔄 Workflows

### **Setting Up AstroDB in a Project**

1. Install AstroDB using `npm install @astrojs/db`.
2. Define database schema using `defineTable()`.
3. Seed initial data using `db.insert(User).values()`.
4. Query data using `db.select().from(User)`.

### **Deploying AstroDB for Production**

1. Push schema using `astro db push`.
2. Apply migrations using `astro db migrate`.

---

## 💡 Examples

```typescript
// Define database schema
import { defineDb, defineTable, column } from 'astro:db';

const User = defineTable({
  columns: {
    userId: column.number({ primaryKey: true }),
    userName: column.text(),
  },
});

export default defineDb({ tables: { User } });
```

---

## 📚 References

- **[AstroDB Documentation](https://docs.astro.build/en/guides/astro-db/)**
- **[AstroDB Blog](https://astro.build/blog/astro-db/)**
- **[Learning with AstroDB](https://dev.to/ryanjames1729/learning-with-astrodb-25og)**

```
<!-- end list -->
```
