module.exports = function(gulp, prompt) {

  gulp.task('confirm:test01',function () {
    
    gulp.src('demo.js')
        .pipe(prompt.confirm())
        .pipe(gulp.dest('dest'));

  })

  gulp.task('confirm:test02',function () {
    
    gulp.src('demo.js')
        .pipe(prompt.confirm('Are you ready for Gulp?'))
        .pipe(gulp.dest('dest'));   

  })

  gulp.task('confirm:test03',function () {
    
    gulp.src('demo.js')
        .pipe(prompt.confirm({
          message: 'Continue?',
          default: true
        }))
        .pipe(gulp.dest('dest'));  

  })

}


