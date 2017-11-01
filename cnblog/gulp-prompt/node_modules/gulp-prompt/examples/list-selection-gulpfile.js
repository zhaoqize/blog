'use strict';

var gulp = require( 'gulp' );
var prompt = require('../index');

/**
 * The following is a sample gulp file for getting the list selection size from the command prompt
 * Note: Gulp Prompt is a wrapper around inquirer.js so if it is available in inquirer.js 
 * it should be available within gulp-prompt.  The prompt function is essentially a straight
 * passthrough to the inquirer.js library.  The page size variable is what sets the length of display
 * items in list
 * 
 * https://github.com/SBoudrias/Inquirer.js#questions
 */
gulp.task( 'getSelection',  () => {
    return gulp.src( './package.json' )
        .pipe( prompt.prompt({
            type:'list',
            name:'env',
            message:'Please enter selection?',
            choices: ['a','b','c','d','e','f', 'g', 'h'],
            pageSize:'3'
        }, (res) => {
            console.log('Result', res);
        }) );
});

