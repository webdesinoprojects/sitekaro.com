const fs = require('fs');
const path = require('path');

// Color mappings
const colorReplacements = {
  '#111184': '#ff4b11',  // Primary blue to orange
  'bg-[#111184]': 'bg-[#ff4b11]',
  'text-[#111184]': 'text-[#ff4b11]',
  'border-[#111184]': 'border-[#ff4b11]',
  'from-[#111184]': 'from-[#ff4b11]',
  'to-[#111184]': 'to-[#ff4b11]',
  'hover:text-[#111184]': 'hover:text-[#ff4b11]',
  'hover:bg-[#111184]': 'hover:bg-[#ff4b11]',
  'hover:border-[#111184]': 'hover:border-[#ff4b11]',
  'group-hover:text-[#111184]': 'group-hover:text-[#ff4b11]',
  'group-hover:bg-[#111184]': 'group-hover:bg-[#ff4b11]',
  'group-hover:border-[#111184]': 'group-hover:border-[#ff4b11]',
};

// Directories to search
const searchDirs = [
  'components',
  'app',
  'lib',
];

// File extensions to process
const extensions = ['.tsx', '.ts', '.jsx', '.js'];

// Files/directories to skip
const skipPatterns = [
  'node_modules',
  '.next',
  '.git',
  'dist',
  'build',
];

let filesProcessed = 0;
let filesModified = 0;
let totalReplacements = 0;

function shouldSkip(filePath) {
  return skipPatterns.some(pattern => filePath.includes(pattern));
}

function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    let fileReplacements = 0;

    // Apply all color replacements
    for (const [oldColor, newColor] of Object.entries(colorReplacements)) {
      const regex = new RegExp(oldColor.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
      const matches = (content.match(regex) || []).length;
      
      if (matches > 0) {
        content = content.replace(regex, newColor);
        modified = true;
        fileReplacements += matches;
        totalReplacements += matches;
      }
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      filesModified++;
      console.log(`✅ Modified: ${filePath} (${fileReplacements} replacements)`);
    }

    filesProcessed++;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
  }
}

function walkDirectory(dir) {
  if (shouldSkip(dir)) return;

  try {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
      const filePath = path.join(dir, file);
      
      if (shouldSkip(filePath)) return;

      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        walkDirectory(filePath);
      } else if (stat.isFile()) {
        const ext = path.extname(filePath);
        if (extensions.includes(ext)) {
          processFile(filePath);
        }
      }
    });
  } catch (error) {
    console.error(`❌ Error reading directory ${dir}:`, error.message);
  }
}

console.log('🎨 Starting color replacement: Blue (#111184) → Orange (#ff4b11)\n');
console.log('Searching in:', searchDirs.join(', '));
console.log('File types:', extensions.join(', '));
console.log('─'.repeat(60));

// Process each search directory
searchDirs.forEach(dir => {
  if (fs.existsSync(dir)) {
    console.log(`\n📁 Processing directory: ${dir}`);
    walkDirectory(dir);
  } else {
    console.log(`⚠️  Directory not found: ${dir}`);
  }
});

console.log('\n' + '─'.repeat(60));
console.log('✨ Color replacement complete!\n');
console.log(`📊 Summary:`);
console.log(`   Files processed: ${filesProcessed}`);
console.log(`   Files modified: ${filesModified}`);
console.log(`   Total replacements: ${totalReplacements}`);
console.log('\n💡 Tip: Restart your dev server to see the changes!');
