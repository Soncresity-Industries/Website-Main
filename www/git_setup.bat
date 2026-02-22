@echo off
REM Set repository-local ignore and attributes files

REM Set custom ignore file
git config core.excludesFile git_ignore.lst

REM Set custom attributes file
git config core.attributesFile git_attributes.lst

echo Custom Git config applied:
git config --get core.excludesFile
git config --get core.attributesFile
pause
