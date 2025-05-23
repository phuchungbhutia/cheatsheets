title: VirtualBox Cheatsheet

category: Virtualization
description: A quick reference guide for essential VirtualBox commands, shortcuts, and workflows for efficient virtual machine management.

---

## 🛠️ Commands

### **Basic Virtual Machine Management**

| Command      | Description                                    |
| ------------ | ---------------------------------------------- |
| `Ctrl + N` | Create a new virtual machine                   |
| `Ctrl + A` | Add an existing virtual machine                |
| `Ctrl + O` | Clone an existing virtual machine              |
| `Ctrl + S` | Open settings for the selected virtual machine |
| `Ctrl + I` | Import a virtual appliance                     |
| `Ctrl + E` | Export a virtual appliance                     |

### **Virtual Machine Control**

| Command            | Description                                          |
| ------------------ | ---------------------------------------------------- |
| `Right Ctrl`     | Capture the host machine’s mouse and keyboard input |
| `Right Ctrl + P` | Suspend the currently running virtual machine        |
| `Right Ctrl + R` | Reload the currently running virtual machine         |
| `Right Ctrl + H` | Send a “Power Off” signal to the virtual machine   |
| `Right Ctrl + S` | Open settings for the running virtual machine        |
| `Right Ctrl + T` | Capture a snapshot of the virtual machine state      |

### **Networking & Storage**

| Command                                         | Description                         |
| ----------------------------------------------- | ----------------------------------- |
| `VBoxManage list vms`                         | List all virtual machines           |
| `VBoxManage startvm "VM Name"`                | Start a virtual machine             |
| `VBoxManage controlvm "VM Name" poweroff`     | Power off a virtual machine         |
| `VBoxManage modifyvm "VM Name" --memory 4096` | Set RAM size for a virtual machine  |
| `VBoxManage modifyvm "VM Name" --cpus 2`      | Set CPU count for a virtual machine |

### **Display & Performance Settings**

| Command                 | Description                                     |
| ----------------------- | ----------------------------------------------- |
| `Right Ctrl + C`      | Toggle scaled display mode                      |
| `Right Ctrl + L`      | Toggle seamless mode                            |
| `Right Ctrl + F`      | Toggle full-screen mode                         |
| `Right Ctrl + Delete` | Send Ctrl + Alt + Delete to the virtual machine |

---

## 🔄 Workflows

### **Creating & Configuring a Virtual Machine**

1. Open VirtualBox and press `Ctrl + N` to create a new VM.
2. Select the operating system and allocate resources.
3. Configure storage and network settings.
4. Start the VM and install the OS.

### **Managing Snapshots**

1. Open VirtualBox and select a VM.
2. Click `Snapshots` and create a new snapshot (`Right Ctrl + T`).
3. Restore a snapshot when needed.

### **Networking & Shared Folders**

1. Open VM settings (`Ctrl + S`).
2. Navigate to `Network` and configure adapter settings.
3. Enable shared folders for file exchange.

---

## 💡 Examples

```shell
# Start a virtual machine
VBoxManage startvm "Ubuntu VM"

# Set RAM size for a VM
VBoxManage modifyvm "Ubuntu VM" --memory 4096

# Create a snapshot
VBoxManage snapshot "Ubuntu VM" take "Backup Snapshot"
```

---

## 📚 References

- **[VirtualBox Cheat Sheet](https://gist.github.com/githubfoam/20b87e0447f7b579f1be8b02c36b6125)**
- **[VirtualBox Keyboard Shortcuts](https://www.maketecheasier.com/cheatsheet/virtualbox-keyboard-shortcuts/)**

```
<!-- end list -->
```
