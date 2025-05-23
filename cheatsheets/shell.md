title: Shell Scripting Cheatsheet

category: Shell
description: A quick reference guide for essential Shell scripting commands, workflows, and examples for efficient automation in Linux.

---

## 🛠️ Commands

### **Basic Shell Commands**

| Command                   | Description                            |
| ------------------------- | -------------------------------------- |
| `echo "Hello, World!"`  | Prints text to the terminal            |
| `pwd`                   | Displays the current working directory |
| `ls -l`                 | Lists files with details               |
| `cd /path/to/directory` | Changes the current directory          |
| `mkdir new_folder`      | Creates a new directory                |
| `rm -rf folder`         | Deletes a folder and its contents      |

### **Variables & Input**

| Command                       | Description                      |
| ----------------------------- | -------------------------------- |
| `var="Hello"`               | Assigns a value to a variable    |
| `echo $var`                 | Prints the value of a variable   |
| `read name`                 | Reads user input into a variable |
| `echo "Your name is $name"` | Displays user input              |

### **Control Flow**

| Command                                                                   | Description           |
| ------------------------------------------------------------------------- | --------------------- |
| `if [ $var == "Hello" ]; then echo "Match"; fi`                         | Conditional statement |
| `for i in {1..5}; do echo $i; done`                                     | Loop through a range  |
| `while [ $count -lt 5 ]; do echo $count; count=$((count+1)); done`      | While loop            |
| `case $var in "Hello") echo "Greeting";; "Bye") echo "Farewell";; esac` | Case statement        |

### **Functions & Execution**

| Command                                    | Description                       |
| ------------------------------------------ | --------------------------------- |
| `function greet() { echo "Hello, $1"; }` | Defines a function                |
| `greet "Alice"`                          | Calls a function with an argument |
| `chmod +x script.sh`                     | Makes a script executable         |
| `./script.sh`                            | Runs a shell script               |

### **File Operations**

| Command                       | Description            |
| ----------------------------- | ---------------------- |
| `touch file.txt`            | Creates an empty file  |
| `cat file.txt`              | Displays file contents |
| `mv file.txt new_location/` | Moves a file           |
| `cp file.txt backup.txt`    | Copies a file          |

### **Process Management**

| Command             | Description                      |
| ------------------- | -------------------------------- |
| `ps aux`          | Lists running processes          |
| `kill -9 PID`     | Terminates a process by ID       |
| `top`             | Displays system resource usage   |
| `nohup command &` | Runs a command in the background |

---

## 🔄 Workflows

### **Creating & Running a Shell Script**

1. Open a terminal and create a script:
   ```shell
   nano script.sh
   ```
2. Add the following content:
   ```shell
   #!/bin/bash
   echo "Hello, Shell Scripting!"
   ```
3. Save and exit (`Ctrl + X`, `Y`, `Enter`).
4. Make the script executable:
   ```shell
   chmod +x script.sh
   ```
5. Run the script:
   ```shell
   ./script.sh
   ```

### **Using Loops & Conditionals**

1. Define a loop:
   ```shell
   for i in {1..5}; do echo "Iteration $i"; done
   ```
2. Use an `if` statement:
   ```shell
   if [ $var == "Hello" ]; then echo "Match found"; fi
   ```

### **Managing Processes**

1. List running processes:
   ```shell
   ps aux
   ```
2. Kill a process by ID:
   ```shell
   kill -9 1234
   ```

---

## 💡 Examples

```shell
# Print a message
echo "Hello, World!"

# Create and execute a function
function greet() { echo "Hello, $1"; }
greet "Alice"

# Loop through numbers
for i in {1..5}; do echo $i; done
```

---

## 📚 References

- **Bash Scripting Cheat Sheet [Free PDF Download]**: [LinuxSimply](https://linuxsimply.com/cheat-sheets/bash-scripting/)
- **Bash Cheat Sheet & Quick Reference**: [QuickRef](https://quickref.me/bash.html)

```
<!-- end list -->
```
