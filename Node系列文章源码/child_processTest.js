//--1
var child_process = require('child_process');
var spawn = child_process.spawn;

var wmic = spawn('wmic', ['DiskDrive', 'get', 'Size', '/value']);

wmic.stdout.on('data', function(data) {
     console.log('使用spawn方法输出: ' + data);
 });

wmic.stderr.on('data', function(data) {
     console.log('stderr: ' + data);
});

wmic.on('close', function(code) {
     console.log('child process exited with code ' + code);
});

//--2
var child_process = require('child_process');
var exec = child_process.exec;

exec('wmic DiskDrive get Size /value', function (error, stdout, stderr) {
   if (error) {
     console.log(error.stack);
     console.log('Error code: '+error.code);
     return;
   }
   console.log('使用exec方法输出: '+stdout);
   console.log(`stderr: ${stderr}`);
});

//--3
var execFile = require('child_process').execFile;
var child = execFile('node', ['--version'], (error, stdout, stderr) => {
  if (error) {
    throw error;
  }
  console.log(stdout);
});

//父子进程通信
