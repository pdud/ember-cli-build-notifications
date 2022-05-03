'use strict';

const totalTime = require('../../lib/total-time');
const expect = require('chai').expect;
const Heimdall = require('heimdalljs/heimdall');

describe('totalTime', function () {
  context('totalTime present', function () {
    it('returns the totalTime', function () {
      const results = {
        totalTime: 121000000,
      };

      expect(totalTime(results)).to.equal('121ms');
    });
  });

  context('totalTime not present, graph.__heimdall__ present', function () {
    it('uses graph.__heimdall__ to calculate the buildTime', function () {
      let heimdall = new Heimdall();
      let root;
      let a1 = heimdall.start({
        name: 'a1',
        broccoliNode: true,
        broccoliCachedNode: false,
      });
      root = heimdall.current;
      let b1 = heimdall.start({ name: 'b1' });
      let c1 = heimdall.start({
        name: 'c1',
        broccoliNode: true,
        broccoliCachedNode: true,
      });
      c1.stop();
      let c2 = heimdall.start({
        name: 'c2',
        broccoliNode: true,
        broccoliCachedNode: false,
      });
      c2.stop();
      b1.stop();
      a1.stop();

      const results = {
        graph: {
          __heimdall__: root,
        },
      };

      expect(totalTime(results).replace(/\D/g, '')).to.be.within(0, 200);
    });
  });

  context('totalTime not present, graph.__heimdall__ not present', function () {
    it('returns "unavailable"', function () {
      const results = {};

      expect(totalTime(results)).to.equal('unavailable');
    });
  });
});
