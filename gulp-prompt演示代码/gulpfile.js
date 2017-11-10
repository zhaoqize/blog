var gulp = require('gulp');
var path = require('path');
var prompt = require('gulp-prompt');
var fs = require('fs');

var gulpTaskList = fs.readdirSync(path.join('./task/'));

gulpTaskList.forEach(function (taskfile) {
  var suffix = taskfile.split('.').pop();

  if (suffix === 'js') { // 过滤其它文件
      require('./task/' + taskfile)(gulp, prompt);
  }
});