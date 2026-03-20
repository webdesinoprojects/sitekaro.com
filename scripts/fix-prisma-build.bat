@echo off
echo Fixing Prisma build issue...
echo.

echo Step 1: Stopping all Node processes...
taskkill /F /IM node.exe 2>nul
if %errorlevel% equ 0 (
    echo Node processes stopped successfully
) else (
    echo No Node processes found or already stopped
)
echo.

echo Step 2: Waiting for file locks to release...
timeout /t 2 /nobreak >nul
echo.

echo Step 3: Cleaning Prisma generated files...
if exist "lib\generated\prisma" (
    rmdir /s /q "lib\generated\prisma"
    echo Prisma generated folder deleted
) else (
    echo Prisma generated folder not found
)
echo.

echo Step 4: Cleaning node_modules\.prisma...
if exist "node_modules\.prisma" (
    rmdir /s /q "node_modules\.prisma"
    echo node_modules\.prisma deleted
) else (
    echo node_modules\.prisma not found
)
echo.

echo Step 5: Generating Prisma client...
call npx prisma generate
echo.

echo Step 6: Building Next.js application...
call npm run build
echo.

echo Done!
pause
