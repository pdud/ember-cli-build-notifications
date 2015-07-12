/* jshint node: true */
'use strict';

var notifier = require('./lib/notifier');
var Config = require('./lib/config');

module.exports = {
  name: 'ember-cli-build-notifications',

  buildError: function(error) {
    var config = Config.load(this.project.root);

    if (config.buildError.notify) {
      notifier.notify(error);
    }
  }
};
