const { app, BrowserWindow } = require('electron');
const fetcher = require('../fetcher/fetcher');
const { download } = require('electron-dl');
const fs = require('fs-extra');
const path = require('path');

const fetch = async ({reddit: {subreddit, totalImages}}) => {
  const redditFetcher = fetcher.reddit(subreddit, totalImages);
  const redditImages = await redditFetcher.getImages();
  await downloadItems(redditImages);
}

const downloadItems = async (items) => {
  const downloadLocation = path.join(app.getPath('pictures'), 'sioslife-desktop-wallpaper');
  const window = BrowserWindow.getFocusedWindow();

  await fs.remove(downloadLocation);

  const promises = items.map(async item => {
    download(window, item.url, {
      saveAs: false,
      directory: downloadLocation,
    })
      .then(dl => {
        if (downloader.onItemDownloaded)
          downloader.onItemDownloaded(dl.getSavePath())
      })
      .catch(console.error)
  });

  await Promise.all(promises);
}

const downloader = {
  fetch: fetch,
  onItemDownloaded: null
}

module.exports = downloader;