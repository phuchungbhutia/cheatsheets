title: Security Analyst Cheatsheet
category: Cybersecurity
description: A reference guide for security analysis, covering query syntax for host details, file integrity, network data, process trees, and scheduled tasks.

---

## 🔍 **Query Syntax for Security Analysis**

### **1. Host/Agent Info**

| Attribute                  | Query            |
| -------------------------- | ---------------- |
| **Hostname**         | `AgentName`    |
| **Operating System** | `AgentOS`      |
| **Version of Agent** | `AgentVersion` |
| **Domain Name**      | `DNSRequest`   |
| **Site ID**          | `SiteId`       |
| **Site Name**        | `SiteName`     |
| **Account ID**       | `AccountId`    |
| **Account Name**     | `AccountName`  |

---

### **2. File & Registry Integrity**

| Attribute                        | Query              |
| -------------------------------- | ------------------ |
| **File ID**                | `FileID`         |
| **File Name**              | `FileFullName`   |
| **Creation Timestamp**     | `FileCreatedAt`  |
| **MD5 Checksum**           | `FileMD5`        |
| **Modification Timestamp** | `FileModifyAt`   |
| **SHA1 Signature**         | `FileSHA1`       |
| **SHA256 Signature**       | `FileSHA256`     |
| **Previous SHA1**          | `OldFileSHA1`    |
| **Previous File Name**     | `OldFileName`    |
| **File Publisher**         | `Publisher`      |
| **Signature Status**       | `SignedStatus`   |
| **Verification Status**    | `VerifiedStatus` |
| **Registry Key Unique ID** | `RegistryID`     |
| **Registry Path**          | `RegistryPath`   |

---

### **3. Network Data**

| Attribute                   | Query                                      |
| --------------------------- | ------------------------------------------ |
| **Request Type**      | `NetworkMethod` (GET, POST, PUT, DELETE) |
| **Requested URL**     | `NetworkUrl`                             |
| **DNS Response Data** | `DNSResponse`                            |
| **Destination IP**    | `DstIP`                                  |
| **Destination Port**  | `DstPort`                                |
| **Source IP**         | `SrcIP`                                  |
| **Source Port**       | `SrcPort`                                |
| **Browser Type**      | `Source`                                 |

---

### **4. Process Tree & Execution Tracking**

| Attribute                           | Query                      |
| ----------------------------------- | -------------------------- |
| **Process ID (PID)**          | `PID`                    |
| **Parent Process ID (PPID)**  | `ParentPID`              |
| **Parent Process Name**       | `ParentProcessName`      |
| **Parent Start Time**         | `ParentProcessStartTime` |
| **Parent Unique Key**         | `ParentProcessUniqueKey` |
| **Command Line Execution**    | `ProcessCmd`             |
| **Process Display Name**      | `ProcessDisplayName`     |
| **Process Group ID**          | `ProcessGroupId`         |
| **Process Path**              | `ProcessImagePath`       |
| **SHA1 of Executing Process** | `ProcessImageSha1Hash`   |
| **Process Integrity Level**   | `ProcessIntegrityLevel`  |
| **Process Session ID**        | `ProcessSessionId`       |
| **Process Start Time**        | `ProcessStartTime`       |
| **System Subtype**            | `ProcessSubSystem`       |
| **Process Unique Key**        | `ProcessUniqueKey`       |
| **Relinked PID**              | `Rpid`                   |
| **Thread ID**                 | `Tid`                    |
| **Detection Context ID**      | `TrueContext`            |

---

### **5. Scheduled Tasks Monitoring**

| Attribute               | Query               |
| ----------------------- | ------------------- |
| **Task Name**     | `TaskName`        |
| **Task Path**     | `TaskPath`        |
| **Executed File** | `executable file` |

---

## 🔄 **Optimized Security Practices**

### **Strengthening Security Monitoring**

1. **Use process tracking** to detect unauthorized execution flows.
2. **Monitor DNS requests** to identify malicious connections.
3. **Validate file integrity** to detect unauthorized modifications.
4. **Utilize network data** for threat intelligence and anomaly detection.

---

## 📚 **References**

- **[Cybersecurity Threat Intelligence](https://www.sans.org/)**
- **[Security Incident Response Best Practices](https://www.cisecurity.org/)**

---
