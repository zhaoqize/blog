var inq = require('inquirer'),
  es  = require('event-stream'),
  template = require("lodash.template");

module.exports = {

  prompt: function(questions, callback) {
    var prompted = false;
    return es.map(function(file, cb) {

      if (prompted === true) {
        cb(null,file);
        return;
      }

      if (!questions instanceof Array) {
        questions = [questions];
      }

      if (typeof callback !== 'function') {
        callback = function(){};
      }

      inq.prompt(questions).then(function(res) {
        callback(res);
        cb(null, file);
      });

      prompted = true;
    });
  },

  confirm: function(options) {
    var prompted = false;
    return es.map(function(file, cb) {

      if (prompted === true) {
        cb(null,file);
        return;
      }

      var opts = {
        type: 'confirm',
        name: 'val',
        message: 'Are you sure?',
        default: false
      };

      if (typeof options === 'string') {
        opts.message = options;
      }

      if (typeof options !== 'object') {
        options = {};
      }

      if( typeof options.templateOptions !== 'undefined'){
        var compiled = template( options.message );
        options.message = compiled( options.templateOptions);
      }

      opts.message = options.message || opts.message;
      opts.default = options.default || opts.default;

      inq.prompt([opts]).then(function(res) {

        if (res.val) {
          cb(null, file);
        }

      });

      prompted = true;
    });
  },

  inq: inq
};
