'use strict';

var _electron = require('electron');

var _electron2 = _interopRequireDefault(_electron);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = _electron2.default.app; // Module to control application life.
var BrowserWindow = _electron2.default.BrowserWindow; // Module to create native browser window.

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
var mainWindow = void 0;
var renderProcessEvents = void 0;
// Quit when all windows are closed.
app.on('window-all-closed', function () {
	// On OS X it is common for applications and their menu bar
	// to stay active until the user quits explicitly with Cmd + Q
	app.quit();
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', function () {
	_electron2.default.ipcMain.once('initialize', function (event) {
		renderProcessEvents = event.sender;
	});

	// Create the browser window.
	mainWindow = new BrowserWindow({ width: 800, height: 600 });

	// and load the index.html of the app.
	mainWindow.loadURL('file://' + __dirname + '/../index.html');

	// Open the DevTools.
	mainWindow.webContents.openDevTools();

	// Emitted when the window is closed.
	mainWindow.on('closed', function () {
		// Dereference the window object, usually you would store windows
		// in an array if your app supports multi windows, this is the time
		// when you should delete the corresponding element.
		mainWindow = null;
	});
});