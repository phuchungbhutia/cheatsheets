const fs = require('fs');
const path = require('path');

const CHEATSHEETS_DIR = path.join(__dirname, '..', 'cheatsheets');
const OUTPUT_JSON = path.join(__dirname, '..', 'cheatsheets.json');

function getMarkdownFiles(dir) {
  let files = [];
  for (const file of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      files = files.concat(getMarkdownFiles(fullPath));
    } else if (file.endsWith('.md')) {
      files.push(fullPath);
    }
  }
  return files;
}

function parseMetadata(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n').slice(0, 10);

  const metadata = {};
  for (const line of lines) {
    if (line.startsWith('title:')) metadata.title = line.replace('title:', '').trim();
    else if (line.startsWith('category:')) metadata.category = line.replace('category:', '').trim();
    else if (line.startsWith('description:')) metadata.description = line.replace('description:', '').trim();
  }

  if (metadata.title && metadata.category && metadata.description) {
    metadata.file = './' + path.posix.join(...filePath.split(path.sep).slice(1));
    return metadata;
  }
  return null;
}

const allFiles = getMarkdownFiles(CHEATSHEETS_DIR);
const entries = allFiles.map(parseMetadata).filter(Boolean);
fs.writeFileSync(OUTPUT_JSON, JSON.stringify(entries, null, 2));
console.log('✅ cheatsheets.json generated.');