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

  it('sends the correct options to node-notifier', function(){
    notifier.nodeNotifier = fakeNodeNotifier;
    var error = {
      file: 'application.hbs',
      toString: function() {
        return 'Something went wrong';
      }

    };
    var notification = notifier.notify(error, { notifier: fakeNodeNotifier });
    expect(notification.title).to.equal('Build Failed');
    expect(notification.subtitle).to.equal(error.file);
    expect(notification.message).to.equal(error.toString());
    expect(notification.appIcon).to.include('ember-logo.png');
  });
});
