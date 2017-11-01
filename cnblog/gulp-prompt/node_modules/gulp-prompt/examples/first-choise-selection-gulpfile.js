'use strict';

var gulp = require( 'gulp' );
var prompt = require('../index');

/**
 * The following is a sample gulp file for getting the first selection from a choice
 * This was put together in response to issue #27 
 * (https://github.com/Freyskeyd/gulp-prompt/issues/27)
 */
gulp.task( 'selectFirst',  () => {
    return gulp.src( './package.json' )
        .pipe( prompt.prompt({
            type:'list',
            name:'env',
            message:'Please enter selection?',
            choices: ['First','Second','Third']
        }, (res) => {
            console.log('Result', res);
        }) );
});