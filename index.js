/* jshint node: true */
'use strict';

var notifier = require('./lib/notifier');

module.exports = {
  name: 'ember-cli-build-notifications',

  buildError: function(error) {
    notifier.notify(error);
  }
};
