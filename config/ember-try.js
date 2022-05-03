'use strict';

const getChannelURL = require('ember-source-channel-url');
const testSetup = require('@embroider/test-setup');
const embroiderSafe = testSetup.embroiderSafe;
const embroiderOptimized = testSetup.embroiderOptimized;

module.exports = function () {
  return Promise.all([
    getChannelURL('release'),
    getChannelURL('beta'),
    getChannelURL('canary'),
  ]).then((urls) => {
    return {
      useYarn: true,
      scenarios: [
        {
          name: 'ember-lts-3.24',
          npm: {
            devDependencies: {
              'ember-source': '~3.24.3',
            },
          },
        },
        {
          name: 'ember-lts-3.28',
          npm: {
            devDependencies: {
              'ember-source': '~3.28.0',
            },
          },
        },
        {
          name: 'ember-release',
          npm: {
            devDependencies: {
              'ember-source': urls[0],
            },
          },
        },
        {
          name: 'ember-beta',
          npm: {
            devDependencies: {
              'ember-source': urls[1],
            },
          },
        },
        {
          name: 'ember-canary',
          npm: {
            devDependencies: {
              'ember-source': urls[2],
            },
          },
        },
        {
          name: 'ember-default-with-jquery',
          env: {
            EMBER_OPTIONAL_FEATURES: JSON.stringify({
              'jquery-integration': true,
            }),
          },
          npm: {
            devDependencies: {
              '@ember/jquery': '^1.1.0',
            },
          },
        },
        {
          name: 'ember-classic',
          env: {
            EMBER_OPTIONAL_FEATURES: JSON.stringify({
              'application-template-wrapper': true,
              'default-async-observers': false,
              'template-only-glimmer-components': false,
            }),
          },
          npm: {
            devDependencies: {
              'ember-source': '~3.28.0',
            },
            ember: {
              edition: 'classic',
            },
          },
        },
        embroiderSafe(),
        embroiderOptimized(),
      ],
    };
  });
};
