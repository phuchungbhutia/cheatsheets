title: Boolean Algebra Cheatsheet
category: Computer Science
description: A structured reference guide for Boolean algebra, covering logical operations, laws, and simplification techniques.

---

## 🔢 **Core Principles for Boolean Algebra**

### **Fundamental Concepts**

| Principle                     | Description                                     |
| ----------------------------- | ----------------------------------------------- |
| **Binary Variables**    | Represented as 0 (False) and 1 (True)           |
| **Logical Operations**  | AND (⋅), OR (+), NOT (¬)                      |
| **Truth Tables**        | Show output for all possible input combinations |
| **Boolean Expressions** | Mathematical representation of logic circuits   |
| **Logic Gates**         | Physical implementation of Boolean functions    |

### **Essential Boolean Algebra Laws**

| Law                             | Formula                                                                                  |
| ------------------------------- | ---------------------------------------------------------------------------------------- |
| **Identity Law**          | \( A + 0 = A \), \( A \cdot 1 = A \)                                                     |
| **Null Law**              | \( A + 1 = 1 \), \( A \cdot 0 = 0 \)                                                     |
| **Idempotent Law**        | \( A + A = A \), \( A \cdot A = A \)                                                     |
| **Complement Law**        | \( A + \bar{A} = 1 \), \( A \cdot \bar{A} = 0 \)                                         |
| **Associative Law**       | \( (A + B) + C = A + (B + C) \), \( (A \cdot B) \cdot C = A \cdot (B \cdot C) \)         |
| **Distributive Law**      | \( A \cdot (B + C) = A \cdot B + A \cdot C \)                                            |
| **De Morgan’s Theorems** | \( \bar{(A + B)} = \bar{A} \cdot \bar{B} \), \( \bar{(A \cdot B)} = \bar{A} + \bar{B} \) |

---

## 🔄 **Workflows**

### **Optimizing Boolean Algebra Problem Solving**

1. **Identify given Boolean expressions** and logic gates.
2. **Apply Boolean laws** to simplify expressions.
3. **Use truth tables** to verify logical equivalence.

### **Enhancing Digital Logic Design**

1. **Convert Boolean expressions into circuit diagrams.**
2. **Use Karnaugh maps** for simplification.
3. **Implement logic gates** in hardware or software.

---

## 💡 **Examples**

```plaintext
# Example: Simplifying a Boolean Expression
Given: \( A \cdot (A + B) \)  
Step 1: Apply Distributive Law → \( A \cdot A + A \cdot B \)  
Step 2: Apply Idempotent Law → \( A + A \cdot B \)  
Step 3: Apply Absorption Law → \( A \)  
Final Answer: \( A \)  
```

---

## 📚 **References**

- **[Boolean Algebra Cheat Sheet](https://cheatography.com/bladabuska/cheat-sheets/boolean-algebra/)**
- **[Boolean Algebra Laws &amp; Theorems](https://cheatography.com/johnshamoon/cheat-sheets/laws-of-boolean-algebra/)**
- **[Boolean Algebra Study Guide](https://mungfali.com/explore/Boolean-Algebra-Cheat-Sheet)**

```
<!-- end list -->
```