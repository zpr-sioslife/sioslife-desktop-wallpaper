const { ipcMain, BrowserWindow } = require('electron');

const getWindow = () => BrowserWindow.getFocusedWindow();

ipcMain.on('download-items', (event, downloaderConfig) => {
  if (ipcManager.onDownloadItems)
    ipcManager.onDownloadItems(downloaderConfig);
});

ipcMain.on('get-downloaded-items', (event) => {
  if (ipcManager.onGetDownloadedItems)
    ipcManager.onGetDownloadedItems();
});

const itemDownloaded = filename => getWindow().webContents.send('item-downloaded', filename);

const autoDownload = () => getWindow().webContents.send('auto-download');

const finishedDownloads = () => getWindow().webContents.send('finish-downloads');

const sendDownloadedItems = items => getWindow().webContents.send('send-downloaded-items', items);

const ipcManager = {
  onDownloadItems: null,
  onGetDownloadedItems: null,
  sendDownloadedItems: sendDownloadedItems,
  itemDownloaded: itemDownloaded,
  finishedDownloads: finishedDownloads,
  autoDownload: autoDownload
}

module.exports = ipcManager;