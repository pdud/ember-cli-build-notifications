/* jshint node: true */
'use strict';

var notifier = require('./lib/notifier');
var Config = require('./lib/config');

module.exports = {
  name: 'ember-cli-build-notifications',

  buildError: function(error) {
    var config = Config.load(this.project.root);

    if (config.buildError.notify) {
      notifier.buildError(error, config.buildError);
    }
  },

  postBuild: function(results) {
    var config = Config.load(this.project.root);

    if (config.buildSuccess.notify) {
      notifier.buildSuccess(results, config.buildSuccess);
    }
  }
};
