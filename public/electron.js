require('dotenv').config();

const { app, BrowserWindow } = require('electron');
const path = require('path');
const isDev = process.env.ELECTRON_IS_DEV ? true : false;

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({ width: isDev ? 1700 : 800, height: isDev ? 900 : 600 });
  mainWindow.loadURL(process.env.ELECTRON_START_URL || `file://${path.join(__dirname, '../build/index.html')}`);
  mainWindow.on('closed', () => mainWindow = null);

  if (isDev)
    mainWindow.webContents.openDevTools();
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin')
    app.quit();
});

app.on('activate', () => {
  if (mainWindow === null) 
    createWindow();
});