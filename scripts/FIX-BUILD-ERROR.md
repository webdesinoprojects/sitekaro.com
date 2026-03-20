# Fix Prisma Build Error (EPERM)

## Quick Fix (Recommended)

Run the automated script:
```bash
scripts/fix-prisma-build.bat
```

## Manual Fix

If the script doesn't work, follow these steps:

### Step 1: Stop all Node processes
```bash
taskkill /F /IM node.exe
```

### Step 2: Delete Prisma generated files
```bash
rmdir /s /q lib\generated\prisma
rmdir /s /q node_modules\.prisma
```

### Step 3: Wait a moment (let Windows release file locks)
Wait 5-10 seconds

### Step 4: Generate Prisma client
```bash
npx prisma generate
```

### Step 5: Build the project
```bash
npm run build
```

## Why This Happens

The error occurs because:
1. A Node process (dev server, previous build, etc.) is still running
2. Windows locks the Prisma query engine DLL file
3. Prisma can't replace the file during generation

## Prevention

Always stop the dev server before building:
- Press `Ctrl+C` in the terminal running `npm run dev`
- Or close all terminals before building
