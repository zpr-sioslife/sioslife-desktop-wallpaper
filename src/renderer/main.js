import { ipcRenderer } from 'electron';
const pkg = require('../../package.json');

const init = () => {
  const logEl = document.getElementById('log');

  document
    .getElementById('version')
    .innerHTML = 'v' + pkg.version;

  document
    .getElementById("download-btn")
    .onclick = () => {
      while (logEl.firstChild)
        logEl.removeChild(logEl.firstChild);

      ipcRenderer.send("download-items")
    }

  ipcRenderer.on('item-downloaded', (event, filename) => {
    console.log(filename);

    const divEl = document.createElement('div');
    const divContent = document.createTextNode(filename);
    divEl.appendChild(divContent);

    logEl.appendChild(divEl);
  });
}

window.onload = init;