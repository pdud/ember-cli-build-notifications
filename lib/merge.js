/* jshint node: true */
var merge = function(defaults, attrs) {
  for (var key in attrs) {
    if (attrs.hasOwnProperty(key)) {
      if (typeof attrs[key] === 'object') {
        defaults[key] = merge(defaults[key], attrs[key]);
      } else {
        defaults[key] = attrs[key];
      }
    }
  }

  return defaults;
};

module.exports = merge;
