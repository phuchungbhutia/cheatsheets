title: Hugging Face Cheatsheet

category: AI
description: A quick reference guide for using Hugging Face’s Transformers library, model training, and inference.

---

## 🛠️ Commands

### **Basic Hugging Face Operations**

| Command                                                            | Description                               |
| ------------------------------------------------------------------ | ----------------------------------------- |
| `pip install transformers`                                       | Install Hugging Face Transformers library |
| `from transformers import pipeline`                              | Import pipeline for easy model usage      |
| `model = pipeline("text-generation")`                            | Load a text generation model              |
| `tokenizer = AutoTokenizer.from_pretrained("bert-base-uncased")` | Load a tokenizer                          |
| `model = AutoModel.from_pretrained("bert-base-uncased")`         | Load a pre-trained model                  |

### **Model Training & Fine-Tuning**

| Command                                                                          | Description                |
| -------------------------------------------------------------------------------- | -------------------------- |
| `from transformers import Trainer, TrainingArguments`                          | Import training utilities  |
| `training_args = TrainingArguments(output_dir="./results")`                    | Define training parameters |
| `trainer = Trainer(model=model, args=training_args, train_dataset=train_data)` | Initialize model trainer   |
| `trainer.train()`                                                              | Start training the model   |

### **Inference & Tokenization**

| Command                                                      | Description                 |
| ------------------------------------------------------------ | --------------------------- |
| `inputs = tokenizer("Hello, world!", return_tensors="pt")` | Tokenize input text         |
| `outputs = model(**inputs)`                                | Run inference on input text |
| `print(outputs.logits)`                                    | Display model output logits |

### **Model Deployment & API Usage**

| Command                                                        | Description                        |
| -------------------------------------------------------------- | ---------------------------------- |
| `from transformers import pipeline`                          | Load a model pipeline              |
| `text_generator = pipeline("text-generation", model="gpt2")` | Use GPT-2 for text generation      |
| `text_generator("Once upon a time")`                         | Generate text from a prompt        |
| `huggingface-cli login`                                      | Authenticate with Hugging Face Hub |

---

## 🔄 Workflows

### **Setting Up Hugging Face Models**

1. Install the library using `pip install transformers`.
2. Load a pre-trained model using `AutoModel.from_pretrained()`.
3. Tokenize input text using `AutoTokenizer.from_pretrained()`.

### **Training & Fine-Tuning Models**

1. Define training arguments using `TrainingArguments()`.
2. Initialize a trainer using `Trainer()`.
3. Start training using `trainer.train()`.

### **Deploying AI Models**

1. Use `pipeline()` for easy model inference.
2. Authenticate with Hugging Face Hub using `huggingface-cli login`.
3. Deploy models via Hugging Face Spaces.

---

## 💡 Examples

```python
# Example: Load and use a text generation model
from transformers import pipeline

text_generator = pipeline("text-generation", model="gpt2")
print(text_generator("Once upon a time"))
```

```python
# Example: Tokenize and run inference
from transformers import AutoTokenizer, AutoModel

tokenizer = AutoTokenizer.from_pretrained("bert-base-uncased")
model = AutoModel.from_pretrained("bert-base-uncased")

inputs = tokenizer("Hello, world!", return_tensors="pt")
outputs = model(**inputs)

print(outputs.logits)
```

---

## 📚 References

- **[Hugging Face Transformers Documentation](https://huggingface.co/docs/transformers/main/chat_templating)**
- **[Hugging Face Cheat Sheet on GitHub](https://github.com/XCollab/HuggingFace/blob/main/CheatSheet.pdf)**

```
<!-- end list -->
```
