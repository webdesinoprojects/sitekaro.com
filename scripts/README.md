# Theme & Branding Replacement Scripts

These scripts help you perform global theme and branding transformations across the entire codebase.

## Available Scripts

### 1. Color Replacement (`replace-colors.js`)
Replaces all blue colors with orange throughout the codebase.

**What it does:**
- Replaces `#111184` (blue) with `#ff4b11` (orange)
- Updates all Tailwind classes: `bg-[#111184]`, `text-[#111184]`, `border-[#111184]`, etc.
- Updates hover states: `hover:text-[#111184]`, `group-hover:bg-[#111184]`, etc.
- Processes `.tsx`, `.ts`, `.jsx`, `.js` files in `components/`, `app/`, and `lib/` directories

**Usage:**
```bash
npm run theme:colors
# or
node scripts/replace-colors.js
```

### 2. Branding Replacement (`replace-branding.js`)
Replaces all "WebDesino" branding with "Sitekaro" throughout the codebase.

**What it does:**
- Replaces all variations: `WebDesino`, `webdesino`, `WEBDESINO`, `Webdesino`
- Updates email domains: `webdesino.com` → `sitekaro.com`
- Case-sensitive replacements to maintain proper capitalization
- Processes `.tsx`, `.ts`, `.jsx`, `.js`, `.json`, `.md`, `.txt` files
- Searches in `components/`, `app/`, `lib/`, `prisma/`, and `scripts/` directories

**Usage:**
```bash
npm run theme:branding
# or
node scripts/replace-branding.js
```

### 3. Complete Theme Rebrand (`theme-rebrand.js`)
Master script that runs both color and branding replacements in sequence.

**What it does:**
- Runs color replacement first
- Then runs branding replacement
- Provides a complete transformation summary

**Usage:**
```bash
npm run theme:rebrand
# or
node scripts/theme-rebrand.js
```

## Output Example

```
🎨 Starting color replacement: Blue (#111184) → Orange (#ff4b11)

📁 Processing directory: components
✅ Modified: components/Navbar.tsx (15 replacements)
✅ Modified: components/Hero.tsx (28 replacements)
...

📊 Summary:
   Files processed: 223
   Files modified: 63
   Total replacements: 627
```

## Safety Features

- **Skips sensitive directories**: `node_modules`, `.next`, `.git`, `dist`, `build`
- **Skips lock files**: `package-lock.json`, `yarn.lock`, `pnpm-lock.yaml`
- **Backup recommended**: Always commit your changes before running these scripts
- **Idempotent**: Safe to run multiple times (won't double-replace)

## After Running

1. **Restart your dev server**: `npm run dev`
2. **Clear browser cache**: Press `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)
3. **Verify changes**: Check your website in the browser
4. **Commit changes**: `git add .` and `git commit -m "Theme: Blue to Orange, WebDesino to Sitekaro"`

## Customization

To modify the replacements, edit the respective script files:

- **Color mappings**: Edit `colorReplacements` object in `replace-colors.js`
- **Branding mappings**: Edit `brandingReplacements` array in `replace-branding.js`
- **Search directories**: Edit `searchDirs` array in either script
- **File extensions**: Edit `extensions` array in either script

## Troubleshooting

**Issue**: Script doesn't find files
- **Solution**: Make sure you're running from the project root directory

**Issue**: Changes not visible in browser
- **Solution**: Hard refresh your browser (Ctrl+Shift+R) and restart dev server

**Issue**: Some files not updated
- **Solution**: Check if they're in the `skipPatterns` list or have unsupported extensions

## Technical Details

- **Language**: Node.js (vanilla JavaScript, no dependencies)
- **File Processing**: Recursive directory traversal with regex replacements
- **Encoding**: UTF-8
- **Performance**: Processes ~250 files in under 2 seconds

## Created By

These scripts were created to facilitate the complete theme transformation from WebDesino (blue) to Sitekaro (orange).
