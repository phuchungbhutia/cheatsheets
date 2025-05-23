title: TensorFlow Cheatsheet

category: AI 
description: A quick reference guide for essential TensorFlow commands, neural network operations, and best practices for AI-powered applications.

---

## 🛠️ Commands

### **Basic TensorFlow Operations**

| Command                                    | Description               |
| ------------------------------------------ | ------------------------- |
| `import tensorflow as tf`                | Import TensorFlow library |
| `tf.__version__`                         | Check TensorFlow version  |
| `tf.config.list_physical_devices('GPU')` | Check available GPUs      |

### **Creating & Manipulating Tensors**

| Command                        | Description                       |
| ------------------------------ | --------------------------------- |
| `tf.constant([1, 2, 3])`     | Create a constant tensor          |
| `tf.zeros((3, 3))`           | Create a tensor filled with zeros |
| `tf.ones((3, 3))`            | Create a tensor filled with ones  |
| `tf.reshape(tensor, [4, 1])` | Reshape a tensor                  |
| `tf.transpose(tensor)`       | Transpose a tensor                |

### **Building Neural Networks**

| Command                                                                   | Description                                        |
| ------------------------------------------------------------------------- | -------------------------------------------------- |
| `import tensorflow.keras as keras`                                      | Import Keras module in TensorFlow                  |
| `model = keras.Sequential([keras.layers.Dense(10, activation='relu')])` | Create a simple neural network                     |
| `model.compile(optimizer='adam', loss='mse')`                           | Compile the model with optimizer and loss function |

### **Training & Optimization**

| Command                                    | Description                          |
| ------------------------------------------ | ------------------------------------ |
| `model.fit(X_train, y_train, epochs=10)` | Train the model                      |
| `model.evaluate(X_test, y_test)`         | Evaluate model performance           |
| `model.predict(X_new)`                   | Make predictions using trained model |

### **Using TensorFlow with GPUs**

| Command                                                                                       | Description                  |
| --------------------------------------------------------------------------------------------- | ---------------------------- |
| `device = "/GPU:0"`                                                                         | Set device to GPU            |
| `with tf.device(device):`                                                                   | Run operations on GPU        |
| `tf.config.experimental.set_memory_growth(tf.config.list_physical_devices('GPU')[0], True)` | Enable memory growth for GPU |

---

## 🔄 Workflows

### **Creating a Basic Neural Network**

1. Define model using `keras.Sequential([keras.layers.Dense(10, activation='relu')])`.
2. Compile model using `model.compile(optimizer='adam', loss='mse')`.
3. Train model using `model.fit(X_train, y_train, epochs=10)`.
4. Evaluate model using `model.evaluate(X_test, y_test)`.

### **Performing Tensor Operations**

1. Create tensors using `tf.constant([1, 2, 3])`.
2. Reshape tensors using `tf.reshape(tensor, [4, 1])`.
3. Perform matrix multiplication using `tf.matmul(tensor1, tensor2)`.

### **Training a Model on GPU**

1. Set device using `device = "/GPU:0"`.
2. Run operations on GPU using `with tf.device(device):`.
3. Train model using GPU acceleration.

---

## 💡 Examples

```python
# Import TensorFlow
import tensorflow as tf
import tensorflow.keras as keras

# Create a simple neural network
model = keras.Sequential([
    keras.layers.Dense(10, activation='relu'),
    keras.layers.Dense(1)
])

# Compile the model
model.compile(optimizer='adam', loss='mse')

# Train the model
model.fit(X_train, y_train, epochs=10)
```

---

## 📚 References

- **[TensorFlow Cheat Sheet - GeeksforGeeks](https://www.geeksforgeeks.org/tensorflow-cheat-sheet/)**
- **[TensorFlow Cheat Sheet - Zero To Mastery](https://zerotomastery.io/cheatsheets/tensorflow-cheat-sheet/)**

```
<!-- end list -->
```
