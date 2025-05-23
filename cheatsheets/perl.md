title: Perl Cheatsheet

category: Programming
description: A quick reference guide for essential Perl commands, syntax, and best practices for automation and system administration.

---

## 🛠️ Commands

### **Basic Perl Syntax**

| Command                      | Description             |
| ---------------------------- | ----------------------- |
| `print "Hello, World!\n";` | Print output to console |
| `# This is a comment`      | Single-line comment     |
| `=begin Comment ... =end`  | Multi-line comment      |

### **Data Types & Variables**

| Command                                           | Description                     |
| ------------------------------------------------- | ------------------------------- |
| `$scalar = "Hello";`                            | Scalar variable (single value)  |
| `@array = (1, 2, 3);`                           | Array variable (ordered list)   |
| `%hash = (key1 => "value1", key2 => "value2");` | Hash variable (key-value pairs) |

### **Operators**

| Command             | Description          |
| ------------------- | -------------------- |
| `+ - * / % **`    | Arithmetic operators |
| `== != < > <= >=` | Comparison operators |
| `&&                 |                      |
| `= += -= *= /=`   | Assignment operators |

### **Control Structures**

| Command                                            | Description           |
| -------------------------------------------------- | --------------------- |
| `if ($x > 10) { print "Greater"; }`              | Conditional statement |
| `for ($i=0; $i<5; $i++) { print "$i\n"; }`       | Loop through values   |
| `while ($x < 10) { $x++; }`                      | While loop            |
| `foreach my $item (@array) { print "$item\n"; }` | Iterate over an array |

### **Regular Expressions**

| Command                    | Description                    |
| -------------------------- | ------------------------------ |
| `$string =~ /pattern/`   | Match pattern in string        |
| `$string =~ s/old/new/g` | Replace text in string         |
| `$string =~ tr/a-z/A-Z/` | Convert lowercase to uppercase |

### **File Handling**

| Command                          | Description           |
| -------------------------------- | --------------------- |
| `open(FILE, "<filename.txt");` | Open file for reading |
| `open(FILE, ">filename.txt");` | Open file for writing |
| `print FILE "Hello, Perl!";`   | Write to file         |
| `close(FILE);`                 | Close file            |

---

## 🔄 Workflows

### **Reading a File in Perl**

1. Open file using `open(FILE, "<filename.txt");`.
2. Read file line by line using `while (<FILE>) { print $_; }`.
3. Close file using `close(FILE);`.

### **Using Regular Expressions**

1. Match patterns using `$string =~ /pattern/`.
2. Replace text using `$string =~ s/old/new/g`.
3. Convert case using `$string =~ tr/a-z/A-Z/`.

### **Looping Through Data**

1. Use `for` loop for numeric iteration.
2. Use `foreach` loop for arrays.
3. Use `while` loop for conditional execution.

---

## 💡 Examples

```perl
# Perl Script Example
use strict;
use warnings;

# Define variables
my $name = "Perl";
print "Hello, $name!\n";

# Loop through an array
my @colors = ("Red", "Blue", "Green");
foreach my $color (@colors) {
    print "$color\n";
}
```

---

## 📚 References

- **[Perl 5 Cheat Sheet - Perldoc](https://perldoc.perl.org/perlcheat)**
- **[Perl Cheat Sheet - OneCompiler](https://onecompiler.com/cheatsheets/perl)**
- **[Perl Cheatsheet - TutorialsPoint](https://www.tutorialspoint.com/perl/perl_cheatsheet.htm)**

```
<!-- end list -->
```
