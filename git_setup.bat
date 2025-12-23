@echo off
REM Set repository-local ignore and attributes files

REM Set custom ignore file
git config core.excludesFile git_ignore.lst

echo Custom Git config applied:
git config --get core.excludesFile
pause
