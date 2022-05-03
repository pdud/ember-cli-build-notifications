'use strict';

const fs = require('fs');
const path = require('path');
const merge = require('./merge');

const defaults = {
  buildError: {
    notify: true,
    notificationOptions: {},
  },

  buildSuccess: {
    notify: false,
    notificationOptions: {},
  },
};

module.exports = class Config {
  static load(root) {
    const configPath = 'config/build-notifications.js';
    let config = {};

    if (root && fs.existsSync(path.join(root, configPath))) {
      config = require(path.join(root, configPath));
    }

    return new Config(merge(defaults, config));
  }

  constructor(attrs) {
    this.buildError = attrs.buildError;
    this.buildSuccess = attrs.buildSuccess;
  }
};
