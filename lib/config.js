/* jshint node: true */
var fs = require('fs');
var path = require('path');
var merge = require('./merge');

var defaults = {
  buildError: {
    notify: true,
    notificationOptions: {}
  },
  buildSuccess: {
    notify: false,
    notificationOptions: {}
  }
};

var Config = function(attrs) {
  this.buildError = attrs.buildError;
  this.buildSuccess = attrs.buildSuccess;
};

Config.load = function(root) {
  var configPath = 'config/build-notifications.js';
  var config = {};

  if (root && fs.existsSync(path.join(root, configPath))) {
    config = require(path.join(root, configPath));
  }

  return new Config(merge(defaults, config));
};

module.exports = Config;
