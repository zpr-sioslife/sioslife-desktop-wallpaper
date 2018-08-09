const downloader = require('./downloader/downloader');
const ipcManager = require('./ipc-manager/ipc-manager');
const { BrowserWindow } = require('electron');

//auto download via command line
const args = process.argv.join(',');
const autodownloadEnabled = args.includes('autodownload');
console.log(args);

// Triggered by the renderer (UI)
ipcManager.onDownloadItems = async (downloaderConfig) => downloader.fetch(downloaderConfig);

// Triggered when a image is downloaded
downloader.onItemDownloaded = filename => {
  console.log(filename);
  ipcManager.itemDownloaded(filename);
}

downloader.finishDownloads = () => {
  if(autodownloadEnabled)
    setTimeout(() => BrowserWindow.getFocusedWindow().close(), 1500);
}

if (autodownloadEnabled) {
  setTimeout(() => ipcManager.autoDownload(), 1500);
}