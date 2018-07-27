const downloader = require('./downloader/downloader');
const ipcManager = require('./ipc-manager/ipc-manager');

const downloaderConfig = {
  reddit: {
    subreddit: 'wallpapers',
    totalImages: 20
  }
}

// triggered by the renderer (UI)
ipcManager.onDownloadItems = async () => downloader.fetch(downloaderConfig);

// triggered when a image is downloaded
downloader.onItemDownloaded = filename => {
  console.log(filename);
  ipcManager.itemDownloaded(filename);
}