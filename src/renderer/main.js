import { ipcRenderer } from 'electron';
import storage from './storage';
import pkg from '../../package.json';

const init = () => {
  // Set current app version
  document.getElementById('version').innerHTML = 'v' + pkg.version;

  const logElem         = document.getElementById('log');
  const subredditElem   = document.getElementById("subreddit");
  const limitElem       = document.getElementById("limit");
  const downloadBtnElem = document.getElementById("download-btn");

  // Get values from local storage
  const subredditVal  = storage.GetValue(subredditElem.id);
  const limitVal      = storage.GetValue(limitElem.id);
  subredditElem.value = subredditVal ? subredditVal : 'wallpapers';
  limitElem.value     = limitVal ? limitVal : 30;

  // Save on local storage on input change
  const SaveInputValue  = e => storage.SetValue(e.srcElement.id, e.srcElement.value);
  subredditElem.oninput = SaveInputValue;
  limitElem.oninput     = SaveInputValue;

  // When user clicks on download btn
  downloadBtnElem.onclick = () => {
    while (logElem.firstChild)
      logElem.removeChild(logElem.firstChild);

    const downloaderConfig = {
      reddit: {
        subreddit: subredditElem.value,
        totalImages: limitElem.value
      }
    };

    createLogLine('** Downloading **');
    ipcRenderer.send("download-items", downloaderConfig);
  }

  // Triggered by the main-process (electron)
  ipcRenderer.on('item-downloaded', (event, filename) => {
    console.log(filename);
    createLogLine(filename);
  });

  // Triggered by the main-process (electron)
  ipcRenderer.on('auto-download', (event, filename) => {
    console.log('auto-download triggered');
    createLogLine('** auto-download triggered **');

    setTimeout(() => downloadBtnElem.click(), 3000);
  });

  const createLogLine = txt => {
    const divEl = document.createElement('div');
    const divContent = document.createTextNode(txt);
    divEl.appendChild(divContent);

    logElem.appendChild(divEl);
  }
}

window.onload = init;