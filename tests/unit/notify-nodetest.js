'use strict';

var notifier = require('../../lib/notify');
var notificationCenter = require('../../lib/platforms/notification-center');
var expect = require('chai').expect;

describe('notifier', function() {

  describe('choosePlatform', function() {

    it('chooses `notificationCenter`', function() {
      var platform = notifier.choosePlatform();
      expect(platform).to.equal(notificationCenter);
    });
  });

  describe('notify', function() {
    var fakePlatform = {
      notify: function(options) {
        return 'Woa! ' + options.title;
      }
    };

    it('calls notify on the platform with the options', function() {
      var options = {
        platform: fakePlatform,
        title: 'friend'
      };
      expect(notifier.notify(options)).to.equal('Woa! friend');
    });
  });
});
