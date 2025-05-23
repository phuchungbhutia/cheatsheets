title: JDK Cheatsheet

category: Java
description: A quick reference guide for essential JDK commands, tools, and workflows for compiling and running Java applications.

---

## 🛠️ Commands

### **Basic JDK Operations**

| Command                          | Description                             |
| -------------------------------- | --------------------------------------- |
| `java -version`                | Check installed Java version            |
| `javac HelloWorld.java`        | Compile a Java source file              |
| `java HelloWorld`              | Run a compiled Java program             |
| `jar cvf myapp.jar *.class`    | Create a JAR file from compiled classes |
| `javadoc -d docs MyClass.java` | Generate documentation for a Java class |

### **Java Compilation & Execution**

| Command                           | Description                                         |
| --------------------------------- | --------------------------------------------------- |
| `javac -d bin src/MyClass.java` | Compile Java source files into a specific directory |
| `java -cp bin MyClass`          | Run a Java program from a specific directory        |
| `javac -source 11 MyClass.java` | Compile Java code for a specific Java version       |
| `java -Xmx512m MyClass`         | Run Java with a specified memory limit              |

### **JAR File Management**

| Command                            | Description                                   |
| ---------------------------------- | --------------------------------------------- |
| `jar tf myapp.jar`               | List contents of a JAR file                   |
| `jar xf myapp.jar`               | Extract files from a JAR archive              |
| `jar uf myapp.jar MyClass.class` | Update a JAR file with new class files        |
| `java -jar myapp.jar`            | Run a Java application packaged in a JAR file |

### **JDK Tools & Debugging**

| Command                   | Description                                  |
| ------------------------- | -------------------------------------------- |
| `jdb MyClass`           | Start the Java debugger                      |
| `jstack process_id`     | Print stack traces of a running Java process |
| `jmap -heap process_id` | Display heap memory usage of a Java process  |
| `jconsole`              | Launch Java Monitoring & Management Console  |

---

## 🔄 Workflows

### **Compiling & Running a Java Program**

1. Write Java code in `HelloWorld.java`.
2. Compile using `javac HelloWorld.java`.
3. Run using `java HelloWorld`.

### **Creating & Running a JAR File**

1. Compile Java files using `javac -d bin src/*.java`.
2. Package into a JAR using `jar cvf myapp.jar -C bin .`.
3. Run using `java -jar myapp.jar`.

### **Debugging a Java Application**

1. Start debugging using `jdb MyClass`.
2. Inspect stack traces using `jstack process_id`.
3. Monitor memory usage using `jmap -heap process_id`.

---

## 💡 Examples

```sh
# Compile a Java program
javac HelloWorld.java

# Run a Java program
java HelloWorld

# Create a JAR file
jar cvf myapp.jar *.class
```

---

## 📚 References

- **[Java Cheat Sheet](https://www.geeksforgeeks.org/java-cheat-sheet/)**
- **[JDK Documentation](https://docs.oracle.com/en/java/javase/17/docs/)**

```
<!-- end list -->
```
