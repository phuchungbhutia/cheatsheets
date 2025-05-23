title: LLM Cheatsheet

category: AI
description: A quick reference guide for essential LLM concepts, commands, workflows, and examples for efficient AI application development.

---

## 🛠️ Commands

### **LLM Basics**

| Command                      | Description                                                |
| ---------------------------- | ---------------------------------------------------------- |
| `Temperature`              | Controls randomness in responses (higher = more creative)  |
| `Top-p (nucleus sampling)` | Limits response diversity by selecting top probable tokens |
| `Max tokens`               | Defines the maximum length of generated output             |
| `Stop sequences`           | Specifies when the model should stop generating text       |
| `Prompt engineering`       | Optimizing input prompts for better responses              |

### **LLM Architectures**

| Model                                            | Description                                 |
| ------------------------------------------------ | ------------------------------------------- |
| `GPT (Generative Pre-trained Transformer)`     | Autoregressive model for text generation    |
| `BERT (Bidirectional Encoder Representations)` | Context-aware model for NLP tasks           |
| `T5 (Text-to-Text Transfer Transformer)`       | Converts all NLP tasks into text generation |
| `LLaMA (Large Language Model Meta AI)`         | Open-source LLM optimized for efficiency    |

### **Fine-Tuning & Training**

| Command                                               | Description                                      |
| ----------------------------------------------------- | ------------------------------------------------ |
| `Pretraining`                                       | Training on large datasets for general knowledge |
| `Fine-tuning`                                       | Adapting a model for specific tasks              |
| `Transfer learning`                                 | Using a pre-trained model for new applications   |
| `RLHF (Reinforcement Learning from Human Feedback)` | Improving model responses using human feedback   |

### **Prompt Engineering Techniques**

| Technique                      | Description                                          |
| ------------------------------ | ---------------------------------------------------- |
| `Zero-shot prompting`        | Asking the model to perform a task without examples  |
| `Few-shot prompting`         | Providing a few examples to guide the model          |
| `Chain-of-thought prompting` | Encouraging step-by-step reasoning                   |
| `Self-consistency`           | Generating multiple responses and selecting the best |

### **LLM Applications**

| Application            | Description                              |
| ---------------------- | ---------------------------------------- |
| `Text generation`    | Creating human-like text responses       |
| `Summarization`      | Condensing long texts into key points    |
| `Translation`        | Converting text between languages        |
| `Sentiment analysis` | Identifying emotions in text             |
| `Code generation`    | Writing and debugging code automatically |

---

## 🔄 Workflows

### **Using an LLM for Text Generation**

1. Select an LLM (e.g., GPT-4).
2. Define a prompt:
   ```python
   prompt = "Write a short story about space exploration."
   ```
3. Set parameters (temperature, max tokens).
4. Generate output using an API call.

### **Fine-Tuning an LLM**

1. Collect domain-specific data.
2. Preprocess data for training.
3. Train the model using fine-tuning techniques.
4. Evaluate performance and adjust parameters.

### **Optimizing Prompts for Better Responses**

1. Use structured prompts:
   ```python
   prompt = "Explain quantum mechanics in simple terms."
   ```
2. Apply chain-of-thought reasoning for complex tasks.
3. Experiment with temperature settings for creativity.

---

## 💡 Examples

```python
# Generate text using OpenAI GPT
from openai import OpenAI
llm = OpenAI(model="gpt-4")
response = llm.invoke("Tell me a joke about AI.")
print(response)

# Fine-tune a model
from transformers import Trainer, TrainingArguments
training_args = TrainingArguments(output_dir="./results")
trainer = Trainer(model=model, args=training_args, train_dataset=train_data)
trainer.train()
```

---

## 📚 References

- **LLM Cheat Sheet on GitHub**: [GitHub Repository](https://github.com/Abonia1/CheatSheet-LLM)
- **Intro to LLMs Cheatsheet**: [Codecademy](https://www.codecademy.com/learn/intro-to-llms/modules/intro-to-ll-ms/cheatsheet)
- **LLM Overview & Guide**: [KDnuggets](https://www.kdnuggets.com/2023/08/langchain-cheat-sheet.html)

```
<!-- end list -->
```
