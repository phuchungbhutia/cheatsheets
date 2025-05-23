title: Tensor Cheatsheet

category: AI
description: A quick reference guide for essential tensor operations, manipulation techniques, and best practices for AI-powered applications.

---

## 🛠️ Commands

### **Basic Tensor Operations**

| Command                              | Description                   |
| ------------------------------------ | ----------------------------- |
| `import torch`                     | Import PyTorch library        |
| `tensor = torch.tensor([1, 2, 3])` | Create a tensor from a list   |
| `tensor.shape`                     | Get tensor shape              |
| `tensor.dtype`                     | Check tensor data type        |
| `tensor.device`                    | Check tensor device (CPU/GPU) |

### **Creating & Manipulating Tensors**

| Command                 | Description                        |
| ----------------------- | ---------------------------------- |
| `torch.zeros((3, 3))` | Create a tensor filled with zeros  |
| `torch.ones((3, 3))`  | Create a tensor filled with ones   |
| `torch.rand((3, 3))`  | Create a tensor with random values |
| `tensor.view(1, -1)`  | Reshape a tensor                   |
| `tensor.T`            | Transpose a tensor                 |

### **Mathematical Operations on Tensors**

| Command                            | Description                 |
| ---------------------------------- | --------------------------- |
| `tensor + tensor2`               | Element-wise addition       |
| `tensor * tensor2`               | Element-wise multiplication |
| `torch.matmul(tensor1, tensor2)` | Matrix multiplication       |
| `torch.sum(tensor)`              | Compute sum of elements     |
| `torch.mean(tensor)`             | Compute mean of elements    |

### **Using Tensors with GPUs**

| Command                                                                   | Description                    |
| ------------------------------------------------------------------------- | ------------------------------ |
| `device = torch.device("cuda" if torch.cuda.is_available() else "cpu")` | Set device to GPU if available |
| `tensor.to(device)`                                                     | Move tensor to GPU             |
| `torch.cuda.is_available()`                                             | Check if GPU is available      |

### **Gradient Computation & Autograd**

| Command                         | Description               |
| ------------------------------- | ------------------------- |
| `tensor.requires_grad_(True)` | Enable gradient tracking  |
| `tensor.backward()`           | Compute gradients         |
| `tensor.grad`                 | Access computed gradients |

---

## 🔄 Workflows

### **Creating & Manipulating Tensors**

1. Create tensors using `torch.tensor([1, 2, 3])`.
2. Reshape tensors using `tensor.view(1, -1)`.
3. Perform matrix multiplication using `torch.matmul(tensor1, tensor2)`.

### **Using Tensors for AI Model Training**

1. Enable gradient tracking using `tensor.requires_grad_(True)`.
2. Compute gradients using `tensor.backward()`.
3. Optimize model parameters using `optimizer.step()`.

### **Running Tensor Operations on GPU**

1. Move tensor to GPU using `tensor.to(device)`.
2. Perform computations using GPU acceleration.

---

## 💡 Examples

```python
# Import PyTorch
import torch

# Create a tensor
tensor = torch.tensor([1, 2, 3])

# Perform matrix multiplication
tensor1 = torch.rand((3, 3))
tensor2 = torch.rand((3, 3))
result = torch.matmul(tensor1, tensor2)

# Move tensor to GPU if available
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
tensor.to(device)
```

---

## 📚 References

- **[PyTorch Cheat Sheet — Official Documentation](https://docs.pytorch.org/tutorials/beginner/ptcheat.html)**
- **[Deep Learning with PyTorch Cheat Sheet - DataCamp](https://www.datacamp.com/cheat-sheet/deep-learning-with-py-torch)**
- **[PyTorch Cheatsheet - MaD Lab](https://www.mad.tf.fau.de/files/2019/07/pytorch-cheatsheet-en.pdf)**

```
<!-- end list -->
```
