/* jshint node: true */
'use strict';

var path = require('path');
var cmd = path.resolve(__dirname + '/../../bin/terminal-notifier.app/Contents/MacOS/terminal-notifier');

module.exports = {

  name: 'notification_center',

  exec: require('child_process').exec,

  notify: function(options) {
    if (typeof options === 'undefined') {
      options = {};
    }
    options.title = options.title || 'ember-cli smells trouble';
    options.message = options.message || 'Something went wrong';
    options.appIcon = path.resolve(__dirname + '/../../ember-logo.png');

    return this.exec(cmd + this.buildArguments(options));
  },

  buildArguments: function(options) {
    var args = '';

    Object.keys(options).forEach(function(optionKey) {
      args = args + ' -' + optionKey + ' "' + options[optionKey] + '"';
    });

    return args;
  }
};
