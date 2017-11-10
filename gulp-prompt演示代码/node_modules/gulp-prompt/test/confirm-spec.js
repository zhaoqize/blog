'use strict';
var assert = require('assert');
//Gulp uses vinyl source streams
var source = require('vinyl-source-stream');

var proxyrequire = require('proxyquire');
/**
 * The following test spec will verify the operation of the confirm function
 */
describe('gulp confirm function unit tests', function () {
  describe('verify that confirm function operates correctly', function () {
    it('verify that confirm converts string message to options', function ( done ){
        var prompt = function ( listOptions ){
            return new Promise ( ( resolve, reject ) => {
                if( Array.isArray( listOptions)  && typeof listOptions[0] !== 'string'){
                    done();
                }else{
                    done('options is not a string');
                }
                resolve('Test Completed');
            });
        };

        //Mock inquirer to capture response
        let gulpPrompt = proxyrequire('../index.js', {'inquirer':{ prompt: prompt}});
        let srcStream = source('../README.md');
        let resp = srcStream.pipe( gulpPrompt.confirm( 'options string' ) );
        resp.write('../test.txt');
    });

    it('verify that confirm leaves object messages as is', function ( done ){
        var prompt = function ( listOptions ){
            return new Promise( (resolve,reject) => {
                resolve('Test Completed');
                if( ( Array.isArray( listOptions) ) && (typeof listOptions[0] !== 'string') ){
                    assert.equal( listOptions[0].message, 'Test Message?' );
                    assert.equal( listOptions[0].default, true );
                    done();
                }else{
                    done('options convertion not handled');
                }
            });
        };

        //Mock inquirer to capture response
        let gulpPrompt = proxyrequire('../index.js', {'inquirer':{ prompt: prompt}});
        let srcStream = source('../README.md');
        let options = {
            type: 'confirm',
            name: 'val',
            message: 'Test Message?',
            default: true
        };
        let resp = srcStream.pipe( gulpPrompt.confirm( options ) );
        resp.write('../test.txt');
    });

    it('verify that confirm sets default message and value if non provided', function ( done ){
        var prompt = function ( listOptions ){
            return new Promise( (resolve,reject) => {
                resolve('Test Completed');
                if( ( Array.isArray( listOptions) ) && (typeof listOptions[0] !== 'string') ){
                    //The following are defaults
                    assert.equal( listOptions[0].message, 'Are you sure?' );
                    assert.equal( listOptions[0].default, false );
                    done();
                }else{
                    done('options defaults not set');
                }
            });
        };

        //Mock inquirer to capture response
        let gulpPrompt = proxyrequire('../index.js', {'inquirer':{ prompt: prompt}});
        let srcStream = source('../README.md');
        let options = {
            type: 'confirm',
            name: 'val'
        };
        let resp = srcStream.pipe( gulpPrompt.confirm( options ) );
        resp.write('../test.txt');
    });

    it('verify that confirm creates default object if not provided', function ( done ){
        var prompt = function ( listOptions ){
            return new Promise( (resolve,reject) => {
                resolve('Test Completed');
                if( Array.isArray( listOptions)  && typeof listOptions[0] !== 'string' ){
                    //The following are defaults
                    assert.equal( listOptions[0].message, 'Are you sure?' );
                    assert.equal( listOptions[0].default, false );
                    assert.equal( listOptions[0].type, 'confirm' );
                    assert.equal( listOptions[0].name, 'val' );
                    done();
                }else{
                    done('options defaults not set');
                }
            });
        };

        //Mock inquirer to capture response
        let gulpPrompt = proxyrequire('../index.js', {'inquirer':{ prompt: prompt}});
        let srcStream = source('../README.md');
        let options;//Intentionally set to not defined
        let resp = srcStream.pipe( gulpPrompt.confirm( options ) );
        resp.write('../test.txt');
    });

    it('verify that lodash templates replacement works', function ( done ){
        var prompt = function ( listOptions ){
            return new Promise( (resolve,reject) => {
                resolve('Test Completed');
                if( Array.isArray( listOptions)  && typeof listOptions[0] !== 'string' ){
                    assert.equal( listOptions[0].message, 'hello fred! what is your choice?' );
                    done();
                }else{
                    console.log( 'Failed test');
                    done('options defaults not set');
                }
            });
        };

        //Mock inquirer to capture response
        let gulpPrompt = proxyrequire('../index.js', {'inquirer':{ prompt: prompt}});
        let srcStream = source('../README.md');
        let options = {
            type: 'confirm',
            name: 'val',
            message: 'hello <%= user %>! what is your choice?',
            templateOptions:{ 'user': 'fred' }
        };
        let resp = srcStream.pipe( gulpPrompt.confirm( options ) );
        console.log('Executing test');
        resp.write('../test.txt');
    });

    it('verify that lodash templates is only called when template options are defined', function ( done ){
        var prompt = function ( listOptions ){
            return new Promise( (resolve,reject) => {
                resolve('Test Completed');
                if( Array.isArray( listOptions)  && typeof listOptions[0] !== 'string' ){
                    assert.equal( listOptions[0].message, 'hello <%= user %>! what is your choice?' );
                    done();
                }else{
                    console.log( 'Failed test');
                    done('options defaults not set');
                }
            });
        };

        //Mock inquirer to capture response
        let gulpPrompt = proxyrequire('../index.js', {'inquirer':{ prompt: prompt}});
        let srcStream = source('../README.md');
        let options = {
            type: 'confirm',
            name: 'val',
            message: 'hello <%= user %>! what is your choice?'
        };
        let resp = srcStream.pipe( gulpPrompt.confirm( options ) );
        resp.write('../test.txt');
    });

    it('verify that lodash templates replacement works for two fields', function ( done ){
        var prompt = function ( listOptions ){
            return new Promise( (resolve,reject) => {
                resolve('Test Completed');
                if( Array.isArray( listOptions)  && typeof listOptions[0] !== 'string' ){
                    assert.equal( listOptions[0].message, 'hello fred! what is today your choice?' );
                    done();
                }else{
                    console.log( 'Failed test');
                    done('options defaults not set');
                }
            });
        };

        //Mock inquirer to capture response
        let gulpPrompt = proxyrequire('../index.js', {'inquirer':{ prompt: prompt}});
        let srcStream = source('../README.md');
        let options = {
            type: 'confirm',
            name: 'val',
            message: 'hello <%= user %>! what is <%= date %> your choice?',
            templateOptions:{ 'user': 'fred', 'date':'today' }
        };
        let resp = srcStream.pipe( gulpPrompt.confirm( options ) );
        console.log('Executing test');
        resp.write('../test.txt');
    });
  });
});


