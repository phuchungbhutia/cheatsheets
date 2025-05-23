title: GitHub Copilot Cheatsheet

category: AI
description: A quick reference guide for essential GitHub Copilot commands, shortcuts, and best practices for AI-assisted coding.

---

## 🛠️ Commands

### **Basic GitHub Copilot Operations**

| Command               | Description                              |
| --------------------- | ---------------------------------------- |
| `Tab`               | Accept Copilot's code suggestion         |
| `Esc`               | Dismiss suggestion                       |
| `Ctrl + Enter`      | View alternative suggestions             |
| `Ctrl + →`         | Accept one word from suggestion          |
| `Alt + ] / Alt + [` | Navigate between alternative suggestions |

### **Copilot in VS Code**

| Feature                           | Description                                                   |
| --------------------------------- | ------------------------------------------------------------- |
| **Inline Code Suggestions** | Get AI-powered autocompletions while typing                   |
| **Copilot Chat**            | Ask Copilot for explanations, debugging, and code generation  |
| **Smart Actions**           | Invoke Copilot for refactoring, documentation, and unit tests |

### **Copilot Chat Commands**

| Command      | Description              |
| ------------ | ------------------------ |
| `/explain` | Explain selected code    |
| `/fix`     | Suggest fixes for errors |
| `/tests`   | Generate unit tests      |
| `/help`    | Get Copilot usage tips   |

### **AI-Powered Code Assistance**

| Feature                            | Description                                 |
| ---------------------------------- | ------------------------------------------- |
| **Code Generation**          | Generate functions, classes, and algorithms |
| **Debugging Help**           | Identify and fix errors in code             |
| **Documentation Assistance** | Generate comments and explanations          |

---

## 🔄 Workflows

### **Using Copilot for Code Completion**

1. Start typing a function or method.
2. Accept Copilot’s suggestion using `Tab`.
3. View alternative suggestions using `Ctrl + Enter`.

### **Enhancing Productivity with Copilot Chat**

1. Open Copilot Chat using `Ctrl + I`.
2. Ask Copilot to explain, debug, or generate code.
3. Use `/commands` for quick actions.

### **Optimizing AI-Assisted Coding**

1. Provide clear comments for better suggestions.
2. Use Copilot for repetitive coding tasks.
3. Review AI-generated code for accuracy.

---

## 💡 Examples

```python
# Example Copilot Code Suggestion
def fibonacci(n):
    if n <= 0:
        return []
    elif n == 1:
        return [0]
    elif n == 2:
        return [0, 1]
    else:
        sequence = [0, 1]
        for i in range(2, n):
            sequence.append(sequence[i-1] + sequence[i-2])
        return sequence
```

---

## 📚 References

- **[GitHub Copilot Cheat Sheet - GitHub](https://github.com/kierunb/CopilotCheatSheet)**
- **[GitHub Copilot Chat Cheat Sheet](https://docs.github.com/en/copilot/using-github-copilot/copilot-chat/github-copilot-chat-cheat-sheet)**
- **[GitHub Copilot in VS Code Cheat Sheet](https://code.visualstudio.com/docs/copilot/reference/copilot-vscode-features)**

```
<!-- end list -->
```
