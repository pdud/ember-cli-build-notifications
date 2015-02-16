/* jshint node: true */
'use strict';

var notifier = require('node-notifier');
var path = require('path');

module.exports = {
  name: 'ember-cli-build-notifications',

  buildError: function(error) {
    notifier.notify({
      title: 'Build Failed',
      subtitle: error.file,
      message: error.toString(),
      appIcon: path.resolve(__dirname + '/ember-logo.png'),
      sound: true
    });
  }
};
