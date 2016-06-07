var fbp = require('fbp');

module.exports = function(source) {
  this.cacheable && this.cacheable();
  var value = fbp.parse(source, {
    caseSensitive: false
  });
  this.value = [value];
  return "module.exports = " + JSON.stringify(value, undefined, "\t") + ";";
}
