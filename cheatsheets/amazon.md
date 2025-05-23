title: Amazon Cheatsheet

category: E-commerce
description: A quick reference guide for essential Amazon services, shortcuts, and workflows for efficient shopping and cloud management.

---

## 🛠️ Commands

### **Amazon Shopping Shortcuts**

| Command               | Description                   |
| --------------------- | ----------------------------- |
| `Ctrl + F`          | Search for products on a page |
| `Ctrl + D`          | Bookmark a product page       |
| `Alt + Left Arrow`  | Go back to the previous page  |
| `Alt + Right Arrow` | Go forward to the next page   |
| `Ctrl + P`          | Print order details           |

### **Amazon Web Services (AWS) Commands**

| Command                        | Description                              |
| ------------------------------ | ---------------------------------------- |
| `aws s3 ls`                  | List objects in an S3 bucket             |
| `aws ec2 describe-instances` | View EC2 instances                       |
| `aws lambda invoke`          | Run a Lambda function                    |
| `aws dynamodb scan`          | Retrieve all items from a DynamoDB table |
| `aws cloudformation deploy`  | Deploy a CloudFormation stack            |

### **Amazon Prime & Subscription Management**

| Command                     | Description                   |
| --------------------------- | ----------------------------- |
| `Manage Prime Membership` | Navigate to Prime settings    |
| `Cancel Subscription`     | Cancel an active subscription |
| `Update Payment Method`   | Modify payment details        |

### **Amazon Seller & Marketplace Tools**

| Command              | Description                             |
| -------------------- | --------------------------------------- |
| `Create a Listing` | Add a new product to Amazon Marketplace |
| `Manage Inventory` | View and update product stock           |
| `Track Orders`     | Monitor customer purchases              |

---

## 🔄 Workflows

### **Shopping Efficiently on Amazon**

1. Use `Ctrl + F` to quickly find products on a page.
2. Bookmark frequently visited product pages (`Ctrl + D`).
3. Track orders and manage subscriptions via account settings.

### **Managing AWS Services**

1. List active EC2 instances:
   ```shell
   aws ec2 describe-instances
   ```
2. Deploy a CloudFormation stack:
   ```shell
   aws cloudformation deploy --stack-name myStack
   ```

### **Selling on Amazon Marketplace**

1. Create a new product listing.
2. Monitor inventory and update stock levels.
3. Track customer orders and manage fulfillment.

---

## 💡 Examples

```shell
# List objects in an S3 bucket
aws s3 ls s3://my-bucket

# Invoke an AWS Lambda function
aws lambda invoke --function-name myFunction output.json

# Search for a product on Amazon
Ctrl + F -> Type product name
```

---

## 📚 References

- **[AWS Cheat Sheets](https://digitalcloud.training/aws-cheat-sheets/)**
- **[Amazon SDE Interview Guide](https://www.geeksforgeeks.org/amazon-sde-sheet-interview-questions-and-answers/)**

```
<!-- end list -->
```
