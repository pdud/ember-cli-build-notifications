/* jshint node: true */
'use strict';

var notifier = require('./lib/notifier');
var Config = require('./lib/config');

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
    var config = Config.load(this.project.root);

    if (config.buildError.notify) {
      notifier.notify(error);
    }
  }
};
