const he = require('he');
const nodeFetch = require('node-fetch');

const reddit = (subreddit, totalImgs) => {

  const getImages = async () => {
    const response = await nodeFetch(`http://reddit.com/r/${subreddit}.json?limit=${totalImgs}`);
    const jsonObj = await response.json();
    const imgs = sanitizeData(jsonObj); // [{title, url}, {title, url}, ..]

    return imgs;
  }

  const sanitizeData = (jsonObj) => {
    const data = jsonObj.data;
    const elements = data.children;
    let images = [];

    elements.forEach(element => {
      const link = element.data;

      if (link.preview === undefined || link.preview === null) {
        console.log(`${link.url} ignored because it's not a single image link`);
        return;
      }

      const img = {
        title: link.title,
        url: he.decode(link.preview.images[0].source.url)
      }

      images.push(img);
    });

    return images;
  };

  return {
    getImages: getImages
  }
}

module.exports = reddit;