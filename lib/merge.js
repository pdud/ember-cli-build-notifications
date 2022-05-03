'use strict';

module.exports = function merge(defaults, attrs) {
  for (let key in attrs) {
    if (Object.prototype.hasOwnProperty.call(attrs, key)) {
      if (typeof attrs[key] === 'object') {
        defaults[key] = merge(defaults[key], attrs[key]);
      } else {
        defaults[key] = attrs[key];
      }
    }
  }

  return defaults;
};
