'use strict';

var gulp = require( 'gulp' );
var prompt = require('../index');

/**
 * The following is a sample gulp file for using replacement from the command prompt
 * Note: This replacement function is only available on the confirm operation.  
 * This is uses lodash template module and does a basic replacement of one or more 
 * variables
 * 
 * https://www.npmjs.com/package/lodash.template
 */
gulp.task( 'getConfirmWithReplacement',  () => {
    return gulp.src( './package.json' )
        .pipe( prompt.confirm({
            type:'input',
            name:'env',
            message:'Hello <%= user %>, please enter selection?',
            templateOptions:{ 'user': 'fred' }
        }, (res) => {
            console.log('Result', res);
        }) );
});

