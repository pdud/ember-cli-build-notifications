/* jshint node: true */
'use strict';

var notifier = require('../../lib/notifier');
var expect = require('chai').expect;

describe('notifier', function() {

  var fakeNodeNotifier = {
    name: 'fakeNodeNotifier',
    notify: function(options) {
      return options;
    }
  };

  it('sends the correct options to node-notifier on build failure', function(){
    notifier.nodeNotifier = fakeNodeNotifier;
    var error = {
      file: 'application.hbs',
      toString: function() {
        return 'Something went wrong';
      }
    };
    var notification = notifier.buildError(error, { notifier: fakeNodeNotifier, notificationOptions: { sound: true } });

    expect(notification.title).to.equal('Build Failed');
    expect(notification.subtitle).to.equal(error.file);
    expect(notification.message).to.equal(error.toString());
    expect(notification.appIcon).to.include('ember-logo.png');
    expect(notification.sound).to.equal(true);
  });

  it('allows settings in config to take precedence on build failure', function(){
    notifier.nodeNotifier = fakeNodeNotifier;
    var error = {
      file: 'application.hbs',
      toString: function() {
        return 'Something went wrong';
      }
    };
    var notification = notifier.buildError(error, { notifier: fakeNodeNotifier, notificationOptions: { subtitle: 'Test String' } });

    expect(notification.title).to.equal('Build Failed');
    expect(notification.subtitle).to.equal('Test String');
  });

  it('sends the correct options to node-notifier on build success', function(){
    notifier.nodeNotifier = fakeNodeNotifier;
    var results = {
      totalTime: 121000000
    };
    var notification = notifier.buildSuccess(results, { notifier: fakeNodeNotifier, notificationOptions: { sound: true } });

    expect(notification.title).to.equal('Build Succeeded');
    expect(notification.message).to.equal('Build Time: 121ms');
    expect(notification.appIcon).to.include('ember-logo.png');
    expect(notification.sound).to.equal(true);
  });

  it('allows settings in config to take precedence on build success', function(){
    notifier.nodeNotifier = fakeNodeNotifier;
    var results = {
      totalTime: 121000000
    };
    var notification = notifier.buildSuccess(results, { notifier: fakeNodeNotifier, notificationOptions: { message: 'Test String' } });

    expect(notification.title).to.equal('Build Succeeded');
    expect(notification.message).to.equal('Test String');
  });
});
