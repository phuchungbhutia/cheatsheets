title: WordPress Plugin Cheatsheet

category: WordPress
description: A quick reference guide for installing, configuring, and managing WordPress plugins effectively.

---

## 🛠️ Commands & Operations

### **Installing & Activating Plugins**

| Command/Step                         | Description                    |
| ------------------------------------ | ------------------------------ |
| `wp plugin install plugin-name`    | Install a plugin using WP-CLI  |
| `wp plugin activate plugin-name`   | Activate a plugin via WP-CLI   |
| `wp plugin deactivate plugin-name` | Deactivate a plugin            |
| `wp plugin delete plugin-name`     | Remove a plugin from WordPress |
| `wp plugin update plugin-name`     | Update a specific plugin       |

### **Plugin Management in WordPress Dashboard**

| Action                                | Description                                              |
| ------------------------------------- | -------------------------------------------------------- |
| **Plugins > Add New**           | Install plugins directly from the WordPress repository   |
| **Plugins > Installed Plugins** | Manage activated/deactivated plugins                     |
| **Settings > PluginName**       | Configure plugin-specific settings                       |
| **Plugins > Bulk Actions**      | Activate, deactivate, or delete multiple plugins at once |

### **Debugging & Optimization**

| Command/Step                     | Description                                        |
| -------------------------------- | -------------------------------------------------- |
| `wp plugin status plugin-name` | Check the status of a plugin                       |
| `define('WP_DEBUG', true);`    | Enable debugging for troubleshooting plugin issues |
| `wp plugin list`               | Show a list of all installed plugins               |
| `wp plugin update --all`       | Update all installed plugins                       |
| `wp plugin deactivate --all`   | Deactivate all plugins at once                     |

### **Security & Performance Best Practices**

| Action                            | Description                                               |
| --------------------------------- | --------------------------------------------------------- |
| **Remove Unused Plugins**   | Uninstall inactive plugins to enhance security            |
| **Keep Plugins Updated**    | Regular updates prevent security vulnerabilities          |
| **Use Trusted Plugins**     | Install plugins from reputable sources like WordPress.org |
| **Enable Plugin Logging**   | Monitor plugin activity for potential issues              |
| **Perform Regular Backups** | Ensure site backups before major plugin updates           |

---

## 🔄 Workflows

### **Installing & Configuring a Plugin**

1. Navigate to **Plugins > Add New** in the WordPress dashboard.
2. Search for the plugin and click **Install Now**.
3. Activate the plugin via **Plugins > Installed Plugins**.
4. Configure settings under **Settings > PluginName** (if applicable).

### **Updating & Managing Plugins via WP-CLI**

1. Run `wp plugin update plugin-name` to update a specific plugin.
2. Update all plugins using `wp plugin update --all`.
3. List all installed plugins with `wp plugin list`.

### **Troubleshooting Plugin Issues**

1. Enable debugging using `define('WP_DEBUG', true);`.
2. Deactivate plugins using `wp plugin deactivate plugin-name`.
3. Check logs for errors and restore from backups if needed.

---

## 💡 Examples

```sh
# Install a plugin via WP-CLI
wp plugin install yoast-seo

# Activate a plugin
wp plugin activate woocommerce

# List installed plugins
wp plugin list
```

---

## 📚 References

- **[WordPress Plugin Development Guide](https://developer.wordpress.org/plugins/)**
- **[WP-CLI Plugin Management](https://wp-cli.org/commands/plugin/)**
- **[Best Practices for WordPress Plugins](https://www.wpbeginner.com/wordpress-plugin-guides/)**

```
<!-- end list -->
```
