'use strict';

const notifier = require('../../lib/notifier');
const expect = require('chai').expect;

describe('notifier', function() {
  const fakeNodeNotifier = {
    name: 'fakeNodeNotifier',
    notify(options) {
      return options;
    }
  };

  describe('buildError', function() {
    it('sends the correct options to node-notifier', function() {
      notifier.nodeNotifier = fakeNodeNotifier;
      const error = {
        file: 'application.hbs',
        toString() {
          return 'Something went wrong';
        }
      };

      const notification = notifier.buildError(error, {
        notifier: fakeNodeNotifier,
        notificationOptions: {
          sound: true
        }
      });

      expect(notification.title).to.equal('Build Failed');
      expect(notification.subtitle).to.equal(error.file);
      expect(notification.message).to.equal(error.toString());
      expect(notification.appIcon).to.include('ember-logo.png');
      expect(notification.sound).to.equal(true);
    });

    it('allows settings in config to take precedence', function() {
      notifier.nodeNotifier = fakeNodeNotifier;
      const error = {
        file: 'application.hbs',
        toString() {
          return 'Something went wrong';
        }
      };

      const notification = notifier.buildError(error, {
        notifier: fakeNodeNotifier,
        notificationOptions: {
          subtitle: 'Test String'
        }
      });

      expect(notification.title).to.equal('Build Failed');
      expect(notification.subtitle).to.equal('Test String');
    });
  });

  describe('buildSuccess', function() {
    it('sends the correct options to node-notifier', function() {
      notifier.nodeNotifier = fakeNodeNotifier;
      const results = {
        totalTime: 121000000
      };

      const notification = notifier.buildSuccess(results, {
        notifier: fakeNodeNotifier,
        notificationOptions: {
          sound: true
        }
      });

      expect(notification.title).to.equal('Build Succeeded');
      expect(notification.message).to.equal('Build Time: 121ms');
      expect(notification.appIcon).to.include('ember-logo.png');
      expect(notification.sound).to.equal(true);
    });

    it('allows settings in config to take precedence', function() {
      notifier.nodeNotifier = fakeNodeNotifier;
      const results = {
        totalTime: 121000000
      };
      const notification = notifier.buildSuccess(results, {
        notifier: fakeNodeNotifier,
        notificationOptions: {
          message: 'Test String'
        }
      });

      expect(notification.title).to.equal('Build Succeeded');
      expect(notification.message).to.equal('Test String');
    });
  });
});
