title: LangChain Cheatsheet

category: LangChain
description: A quick reference guide for essential LangChain commands, workflows, and examples for efficient AI application development.

---

## 🛠️ Commands

### **Basic Setup**

| Command                      | Description                         |
| ---------------------------- | ----------------------------------- |
| `pip install langchain`    | Install LangChain library           |
| `pip install openai`       | Install OpenAI API support          |
| `pip install chromadb`     | Install ChromaDB for vector storage |
| `pip install langchainhub` | Install LangChain Hub for templates |

### **LLM Integration**

| Command                               | Description                        |
| ------------------------------------- | ---------------------------------- |
| `from langchain.llms import OpenAI` | Import OpenAI LLM                  |
| `llm = OpenAI(model_name="gpt-4")`  | Initialize GPT-4 model             |
| `llm.invoke("Hello, AI!")`          | Generate a response from the model |

### **Prompt Engineering**

| Command                                                                           | Description                      |
| --------------------------------------------------------------------------------- | -------------------------------- |
| `from langchain.prompts import PromptTemplate`                                  | Import prompt template           |
| `template = PromptTemplate(input_variables=["name"], template="Hello {name}!")` | Define a prompt template         |
| `template.format(name="Alice")`                                                 | Format the prompt with variables |

### **Chains & Agents**

| Command                                                                       | Description                        |
| ----------------------------------------------------------------------------- | ---------------------------------- |
| `from langchain.chains import LLMChain`                                     | Import LLM chain                   |
| `chain = LLMChain(llm=llm, prompt=template)`                                | Create a chain with LLM and prompt |
| `chain.run("Alice")`                                                        | Execute the chain                  |
| `from langchain.agents import initialize_agent`                             | Import agent initialization        |
| `agent = initialize_agent(tools, llm, agent="zero-shot-react-description")` | Create an AI agent                 |

### **Memory & Persistence**

| Command                                                              | Description                                 |
| -------------------------------------------------------------------- | ------------------------------------------- |
| `from langchain.memory import ConversationBufferMemory`            | Import memory module                        |
| `memory = ConversationBufferMemory()`                              | Initialize memory for conversation tracking |
| `memory.save_context({"input": "Hello"}, {"output": "Hi there!"})` | Save conversation context                   |

### **Vector Stores & Retrieval**

| Command                                                           | Description                         |
| ----------------------------------------------------------------- | ----------------------------------- |
| `from langchain.vectorstores import Chroma`                     | Import ChromaDB                     |
| `vectorstore = Chroma.from_documents(docs, embedding_function)` | Create a vector store               |
| `retriever = vectorstore.as_retriever()`                        | Convert vector store into retriever |

---

## 🔄 Workflows

### **Setting Up LangChain with OpenAI**

1. Install dependencies:
   ```bash
   pip install langchain openai
   ```
2. Import and initialize LLM:
   ```python
   from langchain.llms import OpenAI
   llm = OpenAI(model_name="gpt-4")
   ```
3. Generate a response:
   ```python
   llm.invoke("Hello, AI!")
   ```

### **Creating a Prompt Template**

1. Define a template:
   ```python
   from langchain.prompts import PromptTemplate
   template = PromptTemplate(input_variables=["name"], template="Hello {name}!")
   ```
2. Format the prompt:
   ```python
   print(template.format(name="Alice"))
   ```

### **Building an AI Agent**

1. Initialize an agent:
   ```python
   from langchain.agents import initialize_agent
   agent = initialize_agent(tools, llm, agent="zero-shot-react-description")
   ```
2. Run the agent:
   ```python
   agent.run("What's the weather today?")
   ```

---

## 💡 Examples

```python
# Create a simple LangChain pipeline
from langchain.llms import OpenAI
from langchain.prompts import PromptTemplate
from langchain.chains import LLMChain

llm = OpenAI(model_name="gpt-4")
template = PromptTemplate(input_variables=["name"], template="Hello {name}!")
chain = LLMChain(llm=llm, prompt=template)

print(chain.run("Alice"))
```

---

## 📚 References

- **LangChain Expression Language Cheatsheet**: [LangChain Docs](https://python.langchain.com/docs/how_to/lcel_cheatsheet/)
- **LangChain Cheat Sheet on GitHub**: [GitHub Repository](https://github.com/gunterzhang480/LangChain-CheatSheet)
- **LangChain Overview & Guide**: [KDnuggets](https://www.kdnuggets.com/2023/08/langchain-cheat-sheet.html)

```
<!-- end list -->
```
