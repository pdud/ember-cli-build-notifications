/* jshint node: true */
'use strict';

var notificationCenter = require('../lib/platforms/notification-center');

module.exports = {
  choosePlatform: function() {
    return notificationCenter;
  },

  notify: function(options) {
    var platform = options.platform || this.choosePlatform();
    return platform.notify(options);
  }
};
