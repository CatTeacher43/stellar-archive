@echo off
chcp 65001 >nul
cd /d "%~dp0"
title 星轨档案库 - 本地服务器（关闭本窗口即停止）

set "PY="
where python >nul 2>nul
if not errorlevel 1 set "PY=python"
if not defined PY (
  where py >nul 2>nul
  if not errorlevel 1 set "PY=py -3"
)
if not defined PY (
  echo [错误] 没有找到 Python，无法启动本地服务器。
  echo 请先安装 Python 3，或在本目录手动执行：
  echo     python -m http.server 8765 --bind 127.0.0.1
  echo.
  pause
  exit /b 1
)

netstat -ano | findstr /C:"127.0.0.1:8765" | findstr /C:"LISTENING" >nul
if not errorlevel 1 goto already

echo.
echo   ============================================
echo    星轨档案库 · Stellar Archive
echo    浏览地址：http://127.0.0.1:8765/
echo.
echo    使用期间请勿关闭本窗口；关闭窗口即停止本地服务。
echo   ============================================
echo.

start "" /b cmd /c "timeout /t 2 >nul & start http://127.0.0.1:8765/"
%PY% -m http.server 8765 --bind 127.0.0.1
echo.
echo 服务器已停止。按任意键关闭窗口。
pause >nul
exit /b 0

:already
echo.
echo   服务器已在运行，正在打开浏览器...
echo   地址：http://127.0.0.1:8765/
start "" "http://127.0.0.1:8765/"
timeout /t 5 >nul
exit /b 0
