module.exports = function(grunt) {

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
