var filename, path;

path = require('path');

filename = path.parse(__filename);

module.exports = function(response, template) {
  this.name = filename.name;
  this.response = response;
  this.template = this.name + "/" + template;
};

module.exports.prototype = {
  extend: function(properties) {
    var Child, key;
    Child = module.exports;
    Child.prototype = module.exports.prototype;
    for (key in properties) {
      Child.prototype[key] = properties[key];
    }
    return Child;
  },
  render: function(data) {
    if (this.response && this.template) {
      this.response.render(this.template, data);
    }
  }
};
