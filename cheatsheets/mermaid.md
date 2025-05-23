title: Mermaid Cheatsheet

category: Visualization
description: A quick reference guide for essential Mermaid syntax, commands, and workflows for efficient diagram creation.

---

## 🛠️ Commands

### **Basic Diagram Structure**

| Command                                                  | Description                       |
| -------------------------------------------------------- | --------------------------------- |
| `graph TD; A-->B; B-->C;`                              | Creates a top-down flowchart      |
| `graph LR; A-->B; B-->C;`                              | Creates a left-to-right flowchart |
| `sequenceDiagram; Alice->>Bob: Hello!;`                | Creates a sequence diagram        |
| `classDiagram; class Person { +String name +Int age }` | Defines a class diagram           |

### **Flowchart Elements**

| Command             | Description                        |
| ------------------- | ---------------------------------- |
| `A --> B`         | Creates a connection between nodes |
| `A -- text --> B` | Adds a label to a connection       |
| `A((Start))`      | Defines a rounded node             |
| `B{Decision}`     | Defines a decision node            |
| `C[/Database/]`   | Defines a database node            |

### **Sequence Diagram Elements**

| Command                                 | Description                        |
| --------------------------------------- | ---------------------------------- |
| `Alice->>Bob: Message`                | Sends a message from Alice to Bob  |
| `Bob-->>Alice: Response`              | Sends a response from Bob to Alice |
| `Note right of Alice: This is a note` | Adds a note to Alice               |

### **Class Diagram Elements**

| Command                                    | Description       |
| ------------------------------------------ | ----------------- |
| `class Person { +String name +Int age }` | Defines a class   |
| `Person --                                 | > Employee`       |
| `Person *-- Address`                     | Shows composition |

### **Gantt Chart Elements**

| Command                                                                         | Description           |
| ------------------------------------------------------------------------------- | --------------------- |
| `gantt; title Project Timeline; section Development; Task1: 2025-05-01, 10d;` | Creates a Gantt chart |
| `section Testing; Task2: 2025-05-11, 5d;`                                     | Adds a testing phase  |

---

## 🔄 Workflows

### **Creating a Flowchart**

1. Define the diagram type:
   ```mermaid
   graph TD;
   A-->B;
   B-->C;
   ```
2. Add labels and styles.
3. Render the diagram in a Markdown viewer.

### **Building a Sequence Diagram**

1. Define participants:
   ```mermaid
   sequenceDiagram;
   Alice->>Bob: Hello!
   Bob-->>Alice: Hi!
   ```
2. Add notes and interactions.

### **Generating a Gantt Chart**

1. Define tasks and timelines:
   ```mermaid
   gantt;
   title Project Timeline;
   section Development;
   Task1: 2025-05-01, 10d;
   ```
2. Adjust dependencies and durations.

---

## 💡 Examples

```mermaid
# Flowchart Example
graph TD;
A((Start)) --> B{Decision};
B -- Yes --> C[/Database/];
B -- No --> D[End];

# Sequence Diagram Example
sequenceDiagram;
Alice->>Bob: Hello!
Bob-->>Alice: Hi!
```

---

## 📚 References

- **[Mermaid Syntax Guide](http://mermaid.js.org/intro/syntax-reference.html)**
- **[GitHub Mermaid Cheatsheet](https://github.com/JakeSteam/Mermaid)**

```
<!-- end list -->
```
