import fs from 'fs';
import path from 'path';

const CHEATSHEETS_DIR = path.join('.', 'cheatsheets');
const README_PATH = path.join('.', 'README.md');
const START_MARKER = '<!-- START CHEATSHEET INDEX -->';
const END_MARKER = '<!-- END CHEATSHEET INDEX -->';

// Recursively get all .md files inside cheatsheets folder
function getAllMdFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir, { withFileTypes: true });
  for (const file of list) {
    const filePath = path.join(dir, file.name);
    if (file.isDirectory()) {
      results = results.concat(getAllMdFiles(filePath));
    } else if (file.isFile() && file.name.endsWith('.md')) {
      results.push(filePath);
    }
  }
  return results;
}

// Build category-based index markdown
function buildIndex(mdFiles) {
  // Group by category = folder directly under cheatsheets/
  const grouped = {};
  for (const filePath of mdFiles) {
    // Relative path from cheatsheets/
    const relPath = path.relative(CHEATSHEETS_DIR, filePath);
    const parts = relPath.split(path.sep);
    if (parts.length < 2) continue; // ignore files directly under cheatsheets root
    const category = parts[0];
    const fileName = parts.slice(1).join('/');

    if (!grouped[category]) grouped[category] = [];
    grouped[category].push({
      fileName,
      fullPath: filePath,
    });
  }

  // Build markdown text
  let md = '';
  for (const category of Object.keys(grouped).sort()) {
    md += `### 📂 ${category}\n`;
    // Sort files alphabetically
    grouped[category].sort((a, b) => a.fileName.localeCompare(b.fileName));
    for (const file of grouped[category]) {
      // Format title from filename (remove .md, replace dashes with spaces)
      const title = file.fileName
        .replace(/\.md$/i, '')
        .replace(/-/g, ' ');
      // Link path relative to README.md (which is root)
      const link = `./cheatsheets/${category}/${file.fileName}`;
      md += `- [${title}](${link})\n`;
    }
    md += '\n';
  }
  return md.trim();
}

// Update README between markers
function updateReadme(indexMd) {
  let readme = fs.readFileSync(README_PATH, 'utf8');

  const regex = new RegExp(
    `${START_MARKER}[\\s\\S]*?${END_MARKER}`,
    'g'
  );

  const newBlock = `${START_MARKER}\n${indexMd}\n${END_MARKER}`;

  if (!regex.test(readme)) {
    console.error('Markers not found in README.md');
    process.exit(1);
  }

  readme = readme.replace(regex, newBlock);

  fs.writeFileSync(README_PATH, readme, 'utf8');
  console.log('README.md Cheatsheet Index updated successfully!');
}

// Main
function main() {
  const mdFiles = getAllMdFiles(CHEATSHEETS_DIR);
  const indexMd = buildIndex(mdFiles);
  updateReadme(indexMd);
}

main();
