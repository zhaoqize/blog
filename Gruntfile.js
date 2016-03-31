module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    
    grunt.initConfig({
        copy:{
            build: {
                files: [{
                    expand: true,
                    cwd: 'src',
                    src: '**',
                    dest: 'dist',
                    flatten: false,
                    filter: 'isFile'
                }]
            }
        },
        cssmin:{
           target: {
               files: [{
                 expand: true,
                 cwd: 'dist/css',
                 src: ['*.css'],
                 dest: 'dist/css'
                   //,
                 //ext:'.min.css'
             }]
           }
        },
        useminPrepare: {
           /* foo: {
                src: ['index.html', 'another.html']
            },
            bar: {
                src: 'index.html'
            }*/
        },
        rev:{
            files:{
                src:['dist/css/*.min.css']
            }
        },
        usemin:{
            html:['dist/page/index.html'],
            options: {
                assetsDirs: 'dist/css',
                blockReplacements: {
                    less: function (block) {
                        return '<link rel="stylesheet" href="' + block.dest + '">';
                    }
                }
            }
        }
    })

    grunt.registerTask('demo',['copy','cssmin','rev','usemin']);
}
