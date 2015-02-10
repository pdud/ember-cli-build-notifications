/* jshint node: true */
'use strict';

var notifier = require('./lib/notify');

module.exports = {
  name: 'ember-cli-notify',

  buildError: function(error) {
    notifier.notify({
      title: 'Build Failed',
      subtitle: error.file,
      message: error.toString()
    });
  }
};
