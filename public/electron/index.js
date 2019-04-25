const { app, BrowserWindow } = require('electron');
const path = require('path');
const __DEV__ = require('./is-dev');
const env = require('./env');

let mainWindow;
const basePath = __dirname;
const preloadPath = `${path.join(basePath, 'preload.js')}`;
const devUrlPath = `${env.ELECTRON_DEV_URL}`;
const prodUrlPath = `file://${path.join(basePath, '../index.html')}`;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: __DEV__ ? 1700 : 800,
    height: __DEV__ ? 900 : 600,
    webPreferences: {
      nodeIntegration: false,
      preload: preloadPath,
    },
  });

  mainWindow.loadURL(devUrlPath || prodUrlPath);
  mainWindow.on('closed', () => (mainWindow = null));

  if (__DEV__) {
    mainWindow.webContents.openDevTools();
    require('./install-dev-extensions');
  }
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (mainWindow === null) createWindow();
});
