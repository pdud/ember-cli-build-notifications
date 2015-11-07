/* jshint node: true */
var nodeNotifier = require('node-notifier');
var path = require('path');

module.exports = {
  name: 'notifier',

  buildSuccess: function(results, options) {
    var notifier = (options && options.notifier) || nodeNotifier;

    return notifier.notify({
      title: 'Build Succeeded',
      message: 'Build Time: ' + Math.round(results.totalTime/1000000) + 'ms',
      appIcon: path.resolve(__dirname, '..', 'ember-logo.png')
    });
  },

  notify: function(error, options) {
    var notifier = (options && options.notifier) || nodeNotifier;

    return notifier.notify({
      title: 'Build Failed',
      subtitle: error.file,
      message: error.toString(),
      appIcon: path.resolve(__dirname, '..', 'ember-logo.png')
    });
  }
};
