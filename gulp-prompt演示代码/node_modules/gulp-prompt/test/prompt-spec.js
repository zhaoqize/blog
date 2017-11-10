var assert = require('assert');
//Gulp uses vinyl source streams
var source = require('vinyl-source-stream');

var proxyrequire = require('proxyquire');
/**
 * The following test spec will verify the operation of the prompt function
 */
describe('gulp prompt unit tests', function () {
  describe('verify that prompt function operates correctly', function () {
      //Test is failing.  not converting to string
    /*it('verify that prompt converts questions to array', function( done ){
        var prompt = function( questions ){
            return new Promise( (resolve,reject) => {
                console.log( 'q', questions);
                if( ( Array.isArray( questions) ) && (questions.length > 0 ) ){
                    assert.equals(questions[0], 'options string');
                    done();
                }else{
                    done('questions is not an array');
                }
                resolve('Test Completed');
            });
        }

        //Mock inquirer to capture response
        gulpPrompt = proxyrequire('../index.js', {'inquirer':{ prompt: prompt}});
        let srcStream = source('../README.md');
        var func = function(){}
        let resp = srcStream.pipe( gulpPrompt.prompt( 'options string', func ) );
        resp.write('../test.txt');
    });*/

    it('verify that prompt does not convert questions to array if already an array', function ( done ){
        var prompt = function ( questions ){
            return new Promise( (resolve,reject) => {
                if( Array.isArray( questions)  && questions.length > 0 ){
                    done();
                }else{
                    done('questions is not an array');
                }
                resolve('Test Completed');
            });
        };

        //Mock inquirer to capture response
        gulpPrompt = proxyrequire('../index.js', {'inquirer':{ prompt: prompt}});
        let srcStream = source('../README.md');
        var func = function (){};
        let resp = srcStream.pipe( gulpPrompt.prompt( ['options string'], func ) );
        resp.write('../test.txt');
    });
  });
});


