@echo off
@title MapleStory Server GMS ver.111.1
Color 0

tasklist|find "mysqld.exe"
if "%errorlevel%"=="0" (goto StartServer) else (goto StartMysql)
pause

:StartMysql
echo Mysql...
start MySQL\bin\mysqld.exe
PING -n 4 127.0.0.1 >nul
echo Mysql...
goto StartServer

:StartServer
PATH=jdk-1.8\bin;%PATH%;
set CLASSPATH=.;target\*
java -Xms128m -Xmx512m -server -XX:+UseG1GC -Dnet.sf.odinms.wzpath=wz server.Start
pause