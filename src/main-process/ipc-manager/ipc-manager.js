const { ipcMain, BrowserWindow } = require('electron');

const getWindow = () => BrowserWindow.getFocusedWindow();

ipcMain.on('download-items', (event, downloaderConfig) => {
  if(ipcManager.onDownloadItems)
    ipcManager.onDownloadItems(downloaderConfig);
});

const itemDownloaded = filename => getWindow().webContents.send('item-downloaded', filename);

const autoDownload = () => getWindow().webContents.send('auto-download');

const finishedDownloads = () => getWindow().webContents.send('finish-downloads');


const ipcManager = {
  onDownloadItems: null,
  itemDownloaded: itemDownloaded,
  finishedDownloads: finishedDownloads,
  autoDownload: autoDownload
}

module.exports = ipcManager;