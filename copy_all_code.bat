@echo off
setlocal EnableDelayedExpansion

set "output_file=all_my_frontend_codes.txt"
set "src_path=frontend\src"
set "assets_path=frontend\src\assets"

rem List all .ts and .tsx files in the source directory and subdirectories
for /r "%src_path%" %%G in (*.ts *.tsx) do (
    echo ############################ code for %%G ##########>>"%output_file%"
    type "%%G">>"%output_file%"
)

rem List all .ts and .tsx files in the assets directory and subdirectories
for /r "%assets_path%" %%G in (*.ts *.tsx) do (
    echo ############################ code for %%G ##########>>"%output_file%"
    type "%%G">>"%output_file%"
)

echo Done! All code files have been merged into "%output_file%"
