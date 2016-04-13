/* jshint node: true */
var nodeNotifier = require('node-notifier');
var path = require('path');
var merge = require('./merge');

module.exports = {
  name: 'notifier',

  buildSuccess: function(results, options) {
    var notifier = (options && options.notifier) || nodeNotifier;
    var notificationOptions = {
      title: 'Build Succeeded',
      message: 'Build Time: ' + Math.round(results.totalTime/1000000) + 'ms',
      appIcon: path.resolve(__dirname, '..', 'ember-logo.png')
    };
    if(options && options.notificationOptions) {
      notificationOptions = merge(notificationOptions, options.notificationOptions);
    }
    return notifier.notify(notificationOptions);
  },

  buildError: function(error, options) {
    var notifier = (options && options.notifier) || nodeNotifier;
    var notificationOptions = {
      title: 'Build Failed',
      subtitle: error.file,
      message: error.toString(),
      appIcon: path.resolve(__dirname, '..', 'ember-logo.png')
    };
    if(options && options.notificationOptions) {
      notificationOptions = merge(notificationOptions, options.notificationOptions);
    }
    return notifier.notify(notificationOptions);
  }
};
