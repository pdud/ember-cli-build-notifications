'use strict';

const lint = require('mocha-eslint'); // eslint-disable-line node/no-unpublished-require
const eslintrc = require('../.eslintrc.js'); // eslint-disable-line node/no-unpublished-require

const files = eslintrc.overrides.map(override => override.files).
  reduce((acc, files) => acc.concat(files), []).
  map(file => `${__dirname}/../${file}`);

lint(files);
