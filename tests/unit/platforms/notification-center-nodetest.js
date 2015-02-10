'use strict';

var notificationCenter = require('../../../lib/platforms/notification-center');
var expect = require('chai').expect;

describe ('notificationCenter', function() {

  describe('name', function() {
    it('returns `notification_center`', function() {
      expect(notificationCenter.name).to.equal('notification_center');
    });
  });

  describe('buildArguments', function() {

    it('adds an argument for each key with a leading space', function() {
      var options = {
        title: 't',
        message: 'm'
      };
      var args = notificationCenter.buildArguments(options);
      expect(args).to.equal(' -title "t" -message "m"');
    });
  });

  describe('notify', function() {
    var fakeExec = function(cmd) {
      return cmd;
    };
    var notify;

    beforeEach(function() {
      notificationCenter.exec = fakeExec;
    });

    describe('options provided', function() {
      it('shells out to terminal-notifer', function() {
        notify = notificationCenter.notify({ title: 't', message: 'm' });
        expect(notify).to.include('bin/terminal-notifier.app/Contents/MacOS/terminal-notifier');
      });

      it('overrides the default keys', function() {
        notify = notificationCenter.notify({ message: 'hey there' });
        expect(notify).to.include('-message "hey there"');
      });

      it('uses the keys provided', function() {
        notify = notificationCenter.notify({ pineapples: 'yes' });
        expect(notify).to.include('-pineapples "yes"');
      });
    });

    describe('default options', function() {
      it('shells out to terminal-notifer', function() {
        notify = notificationCenter.notify();
        expect(notify).to.include('bin/terminal-notifier.app/Contents/MacOS/terminal-notifier');
      });

      it('uses the default keys', function() {
        notify = notificationCenter.notify();
        expect(notify).to.include('-message "Something went wrong"');
      });
    });
  });
});
