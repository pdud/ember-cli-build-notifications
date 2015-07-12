/* jshint node: true */
var fs = require('fs');
var path = require('path');

var merge = function(defaults, attrs) {
  for (var key in attrs) {
    if (attrs.hasOwnProperty(key)) {
      if (typeof attrs[key] === 'object') {
        defaults[key] = merge(defaults[key], attrs[key]);
      } else {
        defaults[key] = attrs[key];
      }
    }
  }

  return defaults;
};

var defaults = {
  buildError: {
    notify: true
  }
};

var Config = function(attrs) {
  this.buildError = attrs.buildError;
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
