
@echo off
setlocal ENABLEEXTENSIONS ENABLEDELAYEDEXPANSION

REM === SAFETY: required remote URL ===
set REQUIRED_REMOTE=https://github.com/KalarianAthecila/SI-Website.git

REM === Get current origin URL ===
for /f "tokens=*" %%i in ('git remote get-url origin 2^>nul') do set CURRENT_REMOTE=%%i

if not defined CURRENT_REMOTE (
    echo ERROR: This directory is not a Git repository.
    exit /b 1
)

if /I NOT "%CURRENT_REMOTE%"=="%REQUIRED_REMOTE%" (
    echo ERROR: Remote does NOT match allowed repository.
    echo Found: %CURRENT_REMOTE%
    echo Expected: %REQUIRED_REMOTE%
    echo Aborting to protect repository history.
    exit /b 1
)

echo Repository verified: %CURRENT_REMOTE%
echo.
echo WARNING: This will DESTROY ALL GIT HISTORY in this repo.
echo This action is IRREVERSIBLE for this mirror.
echo.
pause

REM === Remove Git history ===
echo Removing existing Git history...
rmdir /s /q .git

REM === Reinitialize repo ===
git init
git branch -M main
git remote add origin %REQUIRED_REMOTE%

REM === Commit everything as one commit ===
git add -A
git commit -m "Deploy on Vercel"

REM === Force push to remote ===
git push origin main --force

echo.
echo SUCCESS: Repository rewritten to a single deploy commit.
echo Vercel should now deploy without author issues.
endlocal
