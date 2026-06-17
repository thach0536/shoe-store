@echo off
echo ===================================================
echo   SoleStyle Local Server Launcher
echo   Opening preview: http://localhost:3000
echo ===================================================
start http://localhost:3000
python -m http.server 3000
