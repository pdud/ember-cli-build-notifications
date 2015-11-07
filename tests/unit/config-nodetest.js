/* jshint node: true */
'use strict';

var Config = require('../../lib/config');
var path = require('path');
var expect = require('chai').expect;

describe('load', function() {

  it('initializes with defaults', function() {
    var config = Config.load();
    expect(config.buildError.notify).to.eq(true);
    expect(config.buildSuccess.notify).to.eq(false);

  });


  it('allows settings in config to take precedence', function() {
    var config = Config.load(path.join(__dirname, '..', 'fixtures'));
    expect(config.buildError.notify).to.eq(false);
    expect(config.buildSuccess.notify).to.eq(true);
  });
});
