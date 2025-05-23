title: Flux Cheatsheet

category: GitOps
description: A quick reference guide for essential Flux commands, workflows, and troubleshooting techniques for Kubernetes and HPC environments.

---

## 🛠️ Commands

### **Flux CD (GitOps for Kubernetes)**

| Command                               | Description                             |
| ------------------------------------- | --------------------------------------- |
| `flux install`                      | Install Flux on a Kubernetes cluster    |
| `flux bootstrap github`             | Bootstrap Flux with a GitHub repository |
| `flux create source git my-repo`    | Create a Git source for Flux            |
| `flux reconcile source git my-repo` | Reconcile Git source changes            |
| `flux get kustomizations`           | List all Flux-managed Kustomizations    |

### **Flux Framework (HPC Resource Management)**

| Command                              | Description                      |
| ------------------------------------ | -------------------------------- |
| `flux start`                       | Start a Flux instance            |
| `flux submit sleep 60`             | Submit a basic job               |
| `flux jobs -a`                     | List all active jobs             |
| `flux job attach $(flux job last)` | Attach to the last submitted job |
| `flux cancel 123456`               | Cancel a specific job            |

### **Flux Troubleshooting & Debugging**

| Command                                 | Description                             |
| --------------------------------------- | --------------------------------------- |
| `flux logs --all-namespaces`          | View Flux controller logs               |
| `flux check`                          | Run a health check on Flux components   |
| `flux reconcile kustomization my-app` | Force reconciliation of a Kustomization |
| `flux job wait --all`                 | Wait for all jobs to complete           |
| `flux resource list`                  | Inspect available resources             |

---

## 🔄 Workflows

### **Setting Up Flux CD for Kubernetes**

1. Install Flux using `flux install`.
2. Bootstrap Flux with GitHub using `flux bootstrap github`.
3. Create a Git source using `flux create source git my-repo`.
4. Deploy applications using `flux reconcile source git my-repo`.

### **Managing HPC Jobs with Flux Framework**

1. Start a Flux instance using `flux start`.
2. Submit a job using `flux submit sleep 60`.
3. Monitor jobs using `flux jobs -a`.
4. Attach to a job using `flux job attach $(flux job last)`.

### **Troubleshooting Flux Issues**

1. Check logs using `flux logs --all-namespaces`.
2. Run a health check using `flux check`.
3. Force reconciliation using `flux reconcile kustomization my-app`.

---

## 💡 Examples

```sh
# Install Flux CD on Kubernetes
flux install

# Submit a job in Flux Framework
flux submit sleep 60

# View Flux logs
flux logs --all-namespaces
```

---

## 📚 References

- **[Flux CD Cheatsheets](https://fluxcd.io/flux/cheatsheets/)**
- **[Flux Framework Cheat Sheet](https://flux-framework.org/cheat-sheet/)**
- **[Flux Command Tips &amp; Tricks](https://github.com/flux-framework/cheat-sheet)**

```
<!-- end list -->
```
