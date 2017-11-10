// //获取支持的加密算法
// var crypto = require('crypto');
// console.log(crypto.getHashes());

// //测试hash加密算法
// var crypto = require('crypto');
// var fs = require('fs');

// var mHashName = crypto.getHashes(),
//     time1, time2;

// function testHash(hashname) {
//     time1 = new Date();

//     //需要每次声明一个新的对象，不然会报错
//     var hashInstas = crypto.createHash(hashname);

//     fs.readFile('../lianxi/child_process.js', {
//         encoding: null,
//         flag: 'r'
//     }, function(err, data) {
//         if (err) console.log('失败');;
//         hashInstas.update(data);
//         time2 = new Date();
//         console.log('加密方式: ' + hashname, '加密时间: ' + (time2 - time1) + 'ms', '加密值: ' + hashInstas.digest('hex'));
//     });
// }

// function hashThings() {
//     mHashName.forEach(function(hashname) {
//         testHash(hashname);
//     })
// }

// hashThings();

//加密字符串
var crypto = require('crypto');
var md5 = crypto.createHash('md5');
md5.update('leslie·Zhao');
var d = md5.digest('hex');
console.log(d);

//加密数字
var crypto = require('crypto');
var md5 = crypto.createHash('md5');
md5.update('01010122');
var d = md5.digest('hex');
console.log(d);

//加密文件
var crypto = require('crypto');
var fs = require('fs');

fs.readFile('../lianxi/child_process.js', {
    encoding: null,
    flag: 'r'
}, function(err, data) {
    if (err) console.log('失败');;
    var md5 = crypto.createHash('md5');
    md5.update(data);
    var d = md5.digest('hex');
    console.log(d);
});