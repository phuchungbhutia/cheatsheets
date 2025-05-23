title: WordPress Cheatsheet

category: Web Development
description: A quick reference guide for essential WordPress commands, theme development, WP-CLI usage, and best practices for managing WordPress websites.

---

## 🛠️ Commands

### **Basic WordPress Operations**

| Command                                                                                                                                      | Description        |
| -------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| `wp core download`                                                                                                                         | Download WordPress |
| `wp core install --url="example.com" --title="My Site" --admin_user="admin" --admin_password="password" --admin_email="email@example.com"` | Install WordPress  |
| `wp plugin install plugin-name`                                                                                                            | Install a plugin   |
| `wp theme install theme-name`                                                                                                              | Install a theme    |
| `wp post create --post_title="New Post" --post_status=publish`                                                                             | Create a new post  |

### **Theme Development**

| Command           | Description                                    |
| ----------------- | ---------------------------------------------- |
| `header.php`    | Contains metadata, title, and CSS links        |
| `index.php`     | Main template file for displaying content      |
| `sidebar.php`   | Defines the sidebar layout                     |
| `footer.php`    | Contains footer elements and copyright info    |
| `functions.php` | Holds custom functions and theme modifications |

### **WP-CLI Commands**

| Command                    | Description                     |
| -------------------------- | ------------------------------- |
| `wp plugin list`         | List installed plugins          |
| `wp theme list`          | List installed themes           |
| `wp db optimize`         | Optimize the WordPress database |
| `wp core update`         | Update WordPress core           |
| `wp plugin update --all` | Update all plugins              |

### **Shortcodes & Customization**

| Command              | Description                   |
| -------------------- | ----------------------------- |
| `[gallery]`        | Display a gallery of images   |
| `[audio]`          | Embed an audio file           |
| `[video]`          | Embed a video file            |
| `[contact-form-7]` | Display a Contact Form 7 form |
| `[recent-posts]`   | Show recent posts             |

---

## 🔄 Workflows

### **Setting Up a WordPress Site**

1. Download WordPress using `wp core download`.
2. Install WordPress using `wp core install`.
3. Install themes and plugins using `wp theme install` and `wp plugin install`.

### **Managing WordPress Content**

1. Create posts using `wp post create`.
2. Use shortcodes for embedding media.
3. Optimize the database using `wp db optimize`.

### **Customizing WordPress Themes**

1. Modify `functions.php` for custom features.
2. Edit `header.php`, `footer.php`, and `sidebar.php` for layout changes.
3. Use CSS in `style.css` for design customization.

---

## 💡 Examples

```php
// Example: Register a custom WordPress shortcode
function custom_shortcode() {
    return "Hello, WordPress!";
}
add_shortcode('custom', 'custom_shortcode');
```

```bash
# Example: Install and activate a WordPress theme via WP-CLI
wp theme install twentytwentyone --activate
```

---

## 📚 References

- **[WordPress Cheat Sheet for Developers](https://appsero.com/wordpress/wordpress-cheat-sheet-for-developers/)**
- **[WordPress Cheat Sheet (For Beginners &amp; Developers)](https://websitesetup.org/wordpress-cheat-sheet/)**

```
<!-- end list -->
```
