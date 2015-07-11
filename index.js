/* jshint node: true */
'use strict';

var notifier = require('node-notifier');
var path = require('path');

module.exports = {
  name: 'ember-cli-build-notifications',

  postBuild: function(results) {
    notifier.notify({
      title: 'Build Succeeded',
      message: 'Build Time: ' + Math.round(results.totalTime/1000000) + 'ms',
      appIcon: path.resolve(__dirname + '/ember-logo.png')
    });
  },

  buildError: function(error) {
    notifier.notify({
      title: 'Build Failed',
      subtitle: error.file,
      message: error.toString(),
      appIcon: path.resolve(__dirname + '/ember-logo.png')
    });
  }
};
