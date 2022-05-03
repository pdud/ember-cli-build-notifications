'use strict';

const Config = require('../../lib/config');
const path = require('path');
const expect = require('chai').expect;

describe('load', function () {
  it('initializes with defaults', function () {
    const config = Config.load();

    expect(config.buildError.notify).to.eq(true);
    expect(config.buildSuccess.notify).to.eq(false);
  });

  it('allows settings in config to take precedence', function () {
    const config = Config.load(path.join(__dirname, '..', 'fixtures'));

    expect(config.buildError.notify).to.eq(false);
    expect(config.buildSuccess.notify).to.eq(true);
  });
});
