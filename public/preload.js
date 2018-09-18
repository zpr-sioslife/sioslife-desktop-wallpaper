require('dotenv').config();

window.nodeRequire = require;
window.isDev = process.env.ELECTRON_IS_DEV ? true : false;