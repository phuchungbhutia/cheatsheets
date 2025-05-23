title: PyTorch Cheatsheet

category: AI
description: A quick reference guide for essential PyTorch commands, tensor operations, and best practices for building neural networks.

---

## 🛠️ Commands

### **Basic PyTorch Operations**

| Command                       | Description               |
| ----------------------------- | ------------------------- |
| `import torch`              | Import PyTorch library    |
| `torch.__version__`         | Check PyTorch version     |
| `torch.cuda.is_available()` | Check if GPU is available |

### **Creating & Manipulating Tensors**

| Command                     | Description                        |
| --------------------------- | ---------------------------------- |
| `torch.tensor([1, 2, 3])` | Create a tensor from a list        |
| `torch.zeros((3, 3))`     | Create a tensor filled with zeros  |
| `torch.ones((3, 3))`      | Create a tensor filled with ones   |
| `torch.rand((3, 3))`      | Create a tensor with random values |
| `tensor.view(1, -1)`      | Reshape a tensor                   |

### **Building Neural Networks**

| Command                                              | Description                             |
| ---------------------------------------------------- | --------------------------------------- |
| `import torch.nn as nn`                            | Import PyTorch neural network module    |
| `model = nn.Linear(in_features=3, out_features=1)` | Create a simple linear model            |
| `activation = nn.ReLU()`                           | Apply ReLU activation function          |
| `loss_fn = nn.MSELoss()`                           | Define mean squared error loss function |

### **Training & Optimization**

| Command                                                       | Description                            |
| ------------------------------------------------------------- | -------------------------------------- |
| `optimizer = torch.optim.Adam(model.parameters(), lr=0.01)` | Define optimizer                       |
| `optimizer.zero_grad()`                                     | Reset gradients before backpropagation |
| `loss.backward()`                                           | Compute gradients                      |
| `optimizer.step()`                                          | Update model parameters                |

### **Using PyTorch with GPUs**

| Command                                                                   | Description                    |
| ------------------------------------------------------------------------- | ------------------------------ |
| `device = torch.device("cuda" if torch.cuda.is_available() else "cpu")` | Set device to GPU if available |
| `tensor.to(device)`                                                     | Move tensor to GPU             |
| `model.to(device)`                                                      | Move model to GPU              |

---

## 🔄 Workflows

### **Creating a Basic Neural Network**

1. Define model using `nn.Linear(in_features=3, out_features=1)`.
2. Apply activation function using `nn.ReLU()`.
3. Define loss function using `nn.MSELoss()`.
4. Train model using optimizer and backpropagation.

### **Performing Tensor Operations**

1. Create tensors using `torch.tensor([1, 2, 3])`.
2. Reshape tensors using `tensor.view(1, -1)`.
3. Perform matrix multiplication using `torch.matmul(tensor1, tensor2)`.

### **Training a Model on GPU**

1. Move model to GPU using `model.to(device)`.
2. Move data to GPU using `tensor.to(device)`.
3. Train model using GPU acceleration.

---

## 💡 Examples

```python
# Import PyTorch
import torch
import torch.nn as nn

# Create a simple neural network
model = nn.Sequential(
    nn.Linear(3, 5),
    nn.ReLU(),
    nn.Linear(5, 1)
)

# Define loss function and optimizer
loss_fn = nn.MSELoss()
optimizer = torch.optim.Adam(model.parameters(), lr=0.01)

# Move model to GPU if available
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
model.to(device)
```

---

## 📚 References

- **[PyTorch Cheat Sheet — Official Documentation](https://docs.pytorch.org/tutorials/beginner/ptcheat.html)**
- **[PyTorch Cheatsheet - Zero to Mastery](https://www.learnpytorch.io/pytorch_cheatsheet/)**
- **[Deep Learning with PyTorch Cheat Sheet - DataCamp](https://www.datacamp.com/cheat-sheet/deep-learning-with-py-torch)**

```
<!-- end list -->
```
