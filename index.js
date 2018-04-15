'use strict';

const notifier = require('./lib/notifier');
const Config = require('./lib/config');

module.exports = {
  name: 'ember-cli-build-notifications',

  buildError(error) {
    const config = Config.load(this.project.root);

    if (config.buildError.notify) {
      notifier.buildError(error, config.buildError);
    }
  },

  postBuild(results) {
    const config = Config.load(this.project.root);

    if (config.buildSuccess.notify) {
      notifier.buildSuccess(results, config.buildSuccess);
    }
  }
};
