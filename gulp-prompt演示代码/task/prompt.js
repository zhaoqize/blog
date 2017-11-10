module.exports = function(gulp, prompt) {
  
    gulp.task('prompt:test01',function () {
      
      gulp.src('demo.js')
          .pipe(prompt.prompt({
            type: 'input',
            name: 'task',
            message: 'Which task would you like to run?'
          }, function(res){
            //value is in res.task (the name option gives the key)
            console.log('输入:', res.task);
          }));
  
    })
  
    gulp.task('prompt:test02',function () {
      
      gulp.src('demo.js')
          .pipe(prompt.prompt({
            type: 'checkbox',
            name: 'bump',
            message: 'What type of bump would you like to do?',
            choices: ['patch', 'minor', 'major']
          }, function(res){
            //value is in res.bump (as an array)
            console.log('选中:', res.bump);
          }));
  
    })
  
    gulp.task('prompt:test03',function () {
      
      gulp.src('demo.js')
          .pipe(prompt.prompt({
            type: 'password',
            name: 'pass',
            message: 'Please enter your password'
          }, function(res){
            //value is in res.pass
            console.log('密码:', res.pass);
          }));
  
    })

    gulp.task('prompt:test04',function () {
      
      gulp.src('demo.js')
          .pipe(prompt.prompt([{
            type: 'input',
            name: 'first',
            message: 'First question?'
          },
          {
            type: 'input',
            name: 'second',
            message: 'Second question?'
          }], function(res){
            //value is in res.first and res.second
            console.log('输入:', res.first, res.second);
          }));
  
    })

    gulp.task('prompt:test05',function () {
      
      gulp.src('demo.js')
          .pipe(prompt.prompt({
            type: 'input',
            name: 'inputName',
            message: 'Please enter your name',
            validate: function(inputName){
        
              if(inputName !== 'zqz'){
                return false;
              }
        
              return true;
            }
          }, function(res){
            //value is in res.pass
            console.log('输入:', res.inputName);
          }));
  
    })
  
  }
  
  
  