const { app, BrowserWindow } = require('electron');
const fetcher = require('../fetcher/fetcher');
const { download } = require('electron-dl');
const fs = require('fs-extra');
const path = require('path');
const glob = require('fast-glob');

const downloadLocation = path.join(app.getPath('pictures'), 'sioslife-desktop-wallpaper');

const fetch = async ({ reddit: { subreddit, totalImages } }) => {
  const redditFetcher = fetcher.reddit(subreddit, totalImages);
  const redditImages = await redditFetcher.getImages();

  await downloadItems(redditImages);
}

//items: [{title, url}, {title, url}, ..]
const downloadItems = async (items) => {
  const window = BrowserWindow.getFocusedWindow();

  await fs.remove(downloadLocation);

  const promises = items.map(async item => {
    await download(window, item.url, {
      saveAs: false,
      directory: downloadLocation,
    })
      .then(dl => {
        if (downloader.onItemDownloaded)
          downloader.onItemDownloaded(dl.getSavePath())
      })
      .catch(console.error)
  });

  Promise.all(promises)
    .then(() => {
      if (downloader.finishDownloads)
        downloader.finishDownloads();
    })
    .catch((err) => console.log(err));
}

const getDownloadedImages = async () => {
  const imagePaths = await glob(downloadLocation + '/*.{png,jpg}');
  return imagePaths;
}

const downloader = {
  fetch: fetch,
  getDownloadedImages: getDownloadedImages,
  onItemDownloaded: null,
  finishDownloads: null
}

module.exports = downloader;