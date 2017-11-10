const electron = require('electron')

const app = electron.app

const BrowserWindow = electron.BrowserWindow

//主进程
const ipc = require('electron').ipcMain;

app.on('ready',function(){
	var mainWindow = new BrowserWindow({
		width: 800,
		height: 600
	})
	mainWindow.loadURL('file://' + __dirname + '/index.html')

	mainWindow.openDevTools();

	var presWindow = new BrowserWindow({
		width: 300,
		height: 300,
		show: false
	})

	presWindow.loadURL('file://' + __dirname + '/presWindow.html')

	ipc.on('zqz-show',function() {
		presWindow.show()
	})

	ipc.on('hide-pres',function() {
		presWindow.hide()
	})
})