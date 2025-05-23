title: Torrent Cheatsheet

category: File Sharing
description: A quick reference guide for essential torrent commands, clients, and best practices for efficient file transfers.

---

## 🛠️ Commands

### **Basic Torrent Operations**

| Command                            | Description                                     |
| ---------------------------------- | ----------------------------------------------- |
| `torrent download <magnet-link>` | Start downloading a torrent using a magnet link |
| `torrent add <file.torrent>`     | Add a `.torrent` file to the client           |
| `torrent pause <torrent-id>`     | Pause an active torrent                         |
| `torrent resume <torrent-id>`    | Resume a paused torrent                         |
| `torrent remove <torrent-id>`    | Remove a torrent from the client                |

### **Managing Torrent Clients**

| Client           | Description                                       |
| ---------------- | ------------------------------------------------- |
| `qBittorrent`  | Open-source torrent client with advanced features |
| `Transmission` | Lightweight torrent client for Linux and macOS    |
| `Deluge`       | Powerful torrent client with plugin support       |
| `rTorrent`     | Terminal-based torrent client for advanced users  |
| `BitTorrent`   | Official torrent client with basic functionality  |

### **Torrent Configuration & Optimization**

| Setting                  | Description                                          |
| ------------------------ | ---------------------------------------------------- |
| `limit download speed` | Restrict download speed to avoid network congestion  |
| `limit upload speed`   | Control upload speed to manage bandwidth usage       |
| `enable encryption`    | Encrypt connections for privacy and security         |
| `enable DHT`           | Use Distributed Hash Table for better peer discovery |
| `set max connections`  | Adjust the number of peers for optimal performance   |

### **Torrent Troubleshooting & Security**

| Command              | Description                                   |
| -------------------- | --------------------------------------------- |
| `check hash`       | Verify file integrity using hash checks       |
| `enable VPN`       | Use a VPN for anonymous torrenting            |
| `blocklist update` | Update IP blocklists to avoid malicious peers |
| `force recheck`    | Revalidate downloaded files for errors        |

---

## 🔄 Workflows

### **Downloading a Torrent**

1. Copy the magnet link or `.torrent` file.
2. Open a torrent client and add the link or file.
3. Monitor download progress and seed after completion.

### **Optimizing Torrent Speeds**

1. Limit download speed to prevent network slowdowns.
2. Enable encryption for secure connections.
3. Adjust max connections for better peer discovery.

### **Ensuring Privacy & Security**

1. Use a VPN to hide your IP address.
2. Enable blocklists to filter out harmful peers.
3. Verify file integrity using hash checks.

---

## 💡 Examples

```sh
# Download a torrent using a magnet link
torrent download "magnet:?xt=urn:btih:..."

# Pause an active torrent
torrent pause 12345

# Enable encryption for secure connections
torrent config enable_encryption true
```

---

## 📚 References

- **[rTorrent Cheat Sheet](https://cheatsheets.stephane.plus/self-hosted/rtorrent/)**
- **[GitHub Torrent Cheatsheet](https://github.com/rstacruz/cheatsheets/blob/master/rtorrent.md)**

```
<!-- end list -->
```

---

This **Torrent cheatsheet** strictly follows your template format and provides a complete reference! Let me know if you need modifications or additional details. 🚀
