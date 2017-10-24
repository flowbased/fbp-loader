var fbp = require('fbp');
var utils = require('loader-utils');

module.exports = function(source) {
  var options = utils.getOptions(this);
  if (!options) {
    options = {};
  }
  if (!options.caseSensitive) {
    options.caseSensitive = false;
  }
  this.cacheable && this.cacheable();
  var value = fbp.parse(source, options);
  this.value = [value];
  return "module.exports = " + JSON.stringify(value, undefined, "\t") + ";";
}
