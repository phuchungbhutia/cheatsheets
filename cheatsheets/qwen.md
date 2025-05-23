title: Qwen Cheatsheet

category: AI
description: A quick reference guide for using Qwen, including model interaction, fine-tuning, and deployment.

---

## 🛠️ Commands

### **Basic Qwen Operations**

| Command                                                  | Description                   |
| -------------------------------------------------------- | ----------------------------- |
| `pip install qwen`                                     | Install Qwen library          |
| `from qwen import QwenModel`                           | Import Qwen model             |
| `model = QwenModel.from_pretrained("Qwen-7B")`         | Load a pre-trained Qwen model |
| `tokenizer = QwenTokenizer.from_pretrained("Qwen-7B")` | Load a tokenizer              |
| `output = model.generate("Hello, Qwen!")`              | Generate text using Qwen      |

### **Fine-Tuning & Training**

| Command                                                                          | Description                |
| -------------------------------------------------------------------------------- | -------------------------- |
| `from qwen import Trainer, TrainingArguments`                                  | Import training utilities  |
| `training_args = TrainingArguments(output_dir="./results")`                    | Define training parameters |
| `trainer = Trainer(model=model, args=training_args, train_dataset=train_data)` | Initialize model trainer   |
| `trainer.train()`                                                              | Start training the model   |

### **Inference & Tokenization**

| Command                                                                   | Description                 |
| ------------------------------------------------------------------------- | --------------------------- |
| `inputs = tokenizer("AI-powered text generation", return_tensors="pt")` | Tokenize input text         |
| `outputs = model(**inputs)`                                             | Run inference on input text |
| `print(outputs.logits)`                                                 | Display model output logits |

### **Model Deployment & API Usage**

| Command                                                           | Description                  |
| ----------------------------------------------------------------- | ---------------------------- |
| `from qwen import pipeline`                                     | Load a model pipeline        |
| `text_generator = pipeline("text-generation", model="Qwen-7B")` | Use Qwen for text generation |
| `text_generator("Once upon a time")`                            | Generate text from a prompt  |
| `qwen-cli login`                                                | Authenticate with Qwen Hub   |

---

## 🔄 Workflows

### **Setting Up Qwen Models**

1. Install the library using `pip install qwen`.
2. Load a pre-trained model using `QwenModel.from_pretrained()`.
3. Tokenize input text using `QwenTokenizer.from_pretrained()`.

### **Training & Fine-Tuning Models**

1. Define training arguments using `TrainingArguments()`.
2. Initialize a trainer using `Trainer()`.
3. Start training using `trainer.train()`.

### **Deploying AI Models**

1. Use `pipeline()` for easy model inference.
2. Authenticate with Qwen Hub using `qwen-cli login`.
3. Deploy models via Qwen Cloud.

---

## 💡 Examples

```python
# Example: Load and use a text generation model
from qwen import pipeline

text_generator = pipeline("text-generation", model="Qwen-7B")
print(text_generator("Once upon a time"))
```

```python
# Example: Tokenize and run inference
from qwen import QwenTokenizer, QwenModel

tokenizer = QwenTokenizer.from_pretrained("Qwen-7B")
model = QwenModel.from_pretrained("Qwen-7B")

inputs = tokenizer("AI-powered text generation", return_tensors="pt")
outputs = model(**inputs)

print(outputs.logits)
```

---

## 📚 References

- **[Qwen GitHub Repository](https://github.com/pychang-ai/Qwen_template)**
- **[Qwen2.5 Template](https://ollama.com/library/qwen2.5/blobs/eb4402837c78)**
- **[Qwen-3 Chat Template Deep Dive](https://huggingface.co/blog/qwen-3-chat-template-deep-dive)**

```
<!-- end list -->
```
