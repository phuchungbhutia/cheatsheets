title: XML Cheatsheet

category: XML
description: A quick reference guide for essential XML syntax, structure, and examples for efficient data representation.

---

## 🛠️ Commands

### **Basic XML Syntax**

| Command                                          | Description                                     |
| ------------------------------------------------ | ----------------------------------------------- |
| `<?xml version="1.0" encoding="UTF-8"?>`       | XML declaration specifying version and encoding |
| `<root>`                                       | Defines the root element                        |
| `<element>Content</element>`                   | Basic XML element with content                  |
| `<element attribute="value">Content</element>` | XML element with an attribute                   |
| `<!-- This is a comment -->`                   | XML comment                                     |
| `<![CDATA[This is unescaped text]]>`           | CDATA section for raw text                      |

### **Attributes & Namespaces**

| Command                                          | Description                           |
| ------------------------------------------------ | ------------------------------------- |
| `<element attr="value">`                       | Define an attribute within an element |
| `<prefix:element xmlns:prefix="namespaceURI">` | Define an XML namespace               |
| `<element xmlns="defaultNamespace">`           | Set a default namespace               |

### **Entities & Special Characters**

| Command    | Description                     |
| ---------- | ------------------------------- |
| `&lt;`   | Represents `<` (less than)    |
| `&gt;`   | Represents `>` (greater than) |
| `&amp;`  | Represents `&` (ampersand)    |
| `&quot;` | Represents `"` (double quote) |
| `&apos;` | Represents `'` (single quote) |

### **Document Type Definition (DTD)**

| Command                                     | Description                |
| ------------------------------------------- | -------------------------- |
| `<!DOCTYPE root SYSTEM "file.dtd">`       | Link an external DTD file  |
| `<!ELEMENT element (child1, child2)>`     | Define element structure   |
| `<!ATTLIST element attr CDATA #REQUIRED>` | Define required attributes |

### **XML Schema (XSD)**

| Command                                           | Description                |
| ------------------------------------------------- | -------------------------- |
| `<xs:element name="element" type="xs:string"/>` | Define an element in XSD   |
| `<xs:attribute name="attr" type="xs:int"/>`     | Define an attribute in XSD |
| `<xs:complexType>`                              | Define a complex data type |

---

## 🔄 Workflows

### **Creating a Basic XML Document**

1. Define the XML declaration:
   ```xml
   <?xml version="1.0" encoding="UTF-8"?>
   ```
2. Create a root element:
   ```xml
   <catalog>
       <book>
           <title>The Hitchhiker's Guide</title>
           <author>Douglas Adams</author>
       </book>
   </catalog>
   ```

### **Using Namespaces**

1. Define a namespace:
   ```xml
   <library xmlns="http://example.com/library">
       <book>
           <title>XML Guide</title>
       </book>
   </library>
   ```

### **Validating XML with XSD**

1. Define an XML Schema:
   ```xml
   <xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
       <xs:element name="book" type="xs:string"/>
   </xs:schema>
   ```

---

## 💡 Examples

```xml
<!-- Define an XML document -->
<?xml version="1.0" encoding="UTF-8"?>
<catalog>
    <book isbn="978-0345391803">
        <title>The Hitchhiker's Guide</title>
        <author>Douglas Adams</author>
    </book>
</catalog>

<!-- Define an XML Schema -->
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
    <xs:element name="book">
        <xs:complexType>
            <xs:sequence>
                <xs:element name="title" type="xs:string"/>
                <xs:element name="author" type="xs:string"/>
            </xs:sequence>
        </xs:complexType>
    </xs:element>
</xs:schema>
```

---

## 📚 References

- **XML Cheatsheet**: [HackingNote](https://www.hackingnote.com/en/cheatsheets/xml/)
- **XML Syntax Guide**: [DevTools Daily](https://www.devtoolsdaily.com/cheatsheets/xml/)
- **XML Vulnerabilities & Security**: [GitHub](https://gist.github.com/mgeeky/4f726d3b374f0a34267d4f19c9004870)

```
<!-- end list -->
```
