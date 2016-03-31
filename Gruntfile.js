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

    grunt.registerTask('demo',['copy','cssmin','rev','usemin

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    watch:{
     scripts: {
       files: ['./shop.js'],
       tasks: ['jshint','uglify'],//每次执行完watch后还需要执行代码检查与压缩的任务。
       options: {
         spawn: false,
       },
     }
    },
    jshint: {
      all: ['./shop.js']
    },
    uglify: {
      compressjs: {
        files: {
          './<%= grunt.template.today("dd-mm-yyyy") %>_shop.min.js': ['./shop.js']
        }
      }
    },

   })
   
   //加载插件
  
   grunt.loadNpmTasks('grunt-contrib-jshint');
   grunt.loadNpmTasks('grunt-contrib-uglify');
   grunt.loadNpmTasks('grunt-contrib-watch');

   grunt.registerTask('watchJs',['jshint','uglify','watch']);
}
