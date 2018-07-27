const { ipcMain, BrowserWindow } = require('electron');

ipcMain.on('download-items', (event, args) => {
  if(ipcManager.onDownloadItems)
    ipcManager.onDownloadItems();
});

const itemDownloaded = filename => BrowserWindow.getFocusedWindow().webContents.send('item-downloaded', filename);

const ipcManager = {
  onDownloadItems: null,
  itemDownloaded: itemDownloaded
}

module.exports = ipcManager;