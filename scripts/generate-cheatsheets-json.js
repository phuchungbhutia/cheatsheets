// scripts/generate-cheatsheets-json.js
// Node.js script to generate cheatsheets.json from markdown files

const fs = require('fs');
const path = require('path');

const cheatsheetsDir = path.join(__dirname, '../cheatsheets');
const outputPath = path.join(__dirname, '../cheatsheets.json');

const cheatsheets = [];

function scanDirectory(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      scanDirectory(fullPath);
    } else if (stat.isFile() && item.endsWith('.md')) {
      const content = fs.readFileSync(fullPath, 'utf-8');
      const lines = content.split('\n');
      const titleLine = lines.find(line => line.startsWith('# Title:')) || '';
      const categoryLine = lines.find(line => line.startsWith('**Category:**')) || '';
      const descriptionLine = lines.find(line => line.startsWith('**Description:**')) || '';

      const title = titleLine.replace('# Title:', '').trim();
      const category = categoryLine.replace('**Category:**', '').trim();
      const description = descriptionLine.replace('**Description:**', '').trim();

      cheatsheets.push({
        title,
        category,
        description,
        file: './' + path.relative(path.join(__dirname, '..'), fullPath).replace(/\\/g, '/')
      });
    }
  }
}

scanDirectory(cheatsheetsDir);

fs.writeFileSync(outputPath, JSON.stringify(cheatsheets, null, 2));
console.log(`Generated cheatsheets.json with ${cheatsheets.length} entries.`);
