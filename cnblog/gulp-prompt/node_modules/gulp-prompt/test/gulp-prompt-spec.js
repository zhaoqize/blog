var assert = require('assert');

var proxyrequire = require('proxyquire');
var gulpPrompt = proxyrequire('../index.js', {'inquirer':{}, 'event-stream':{}});
/**
 * Simple test to ensure that the functions are still defined on main module
 */
describe('gulp prompt unit tests', function () {
  describe('verify that the gulp prompt exists', function () {
    it('Should verify that the module exists', function (){
      assert.notEqual(gulpPrompt, undefined);
    });
    it('Should verify that the package contains a function prompt', function (){
        assert.notEqual(gulpPrompt.prompt, undefined);
    });
    it('Should verify that the package contains a function confirm', function (){
        assert.notEqual(gulpPrompt.confirm, undefined);
    });
  });
});
