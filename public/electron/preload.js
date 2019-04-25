const isDev = require('./is-dev');

window.nodeRequire = require;
window.__DEV__ = isDev;
