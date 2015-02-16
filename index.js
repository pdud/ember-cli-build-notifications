/* jshint node: true */
'use strict';

var notifier = require('node-notifier');

module.exports = {
  name: 'ember-cli-build-notifications',

  buildError: function(error) {
    notifier.notify({
      title: 'Build Failed',
      subtitle: error.file,
      message: error.toString()
    });
  }
};
