const __DEV__ = require('./is-dev');
if (__DEV__) require('dotenv').config();

const env = {
  ...process.env,
  ELECTRON_DEV_URL: process.env.ELECTRON_DEV_URL,
};

module.exports = env;
