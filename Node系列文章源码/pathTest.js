var path = require('path');
var path_str = '\\Users\\Administrator\\Desktop\\event.js';
console.log('文件名带后缀：',path.basename(path_str));
console.log('文件名不带后缀：',path.basename(path_str, '.html'));
console.log('路径分隔符:',path.delimiter); 
console.log('环境变量:',process.env.PATH); 
console.log('使用分隔符分割的环境变量:',process.env.PATH.split(path.delimiter)) //用path.delimiter分割
console.log('目录分隔符:',path.sep);
console.log('使用目录分隔符分割路径:',path_str.split(path.sep));
console.log('返回文件路径:',path.dirname(path_str));
console.log('获取文件后缀:',path.extname(path_str)); //.html
path_format = path.format({
    root : "\\",
    dir : "\\Users\\Administrator\\Desktop\\",
    base : "event.js",
    ext : ".js",
    name : "file"
});
console.log('格式化路径',path_format);
console.log('判断是否是绝对路径1:',path.isAbsolute(path_str)); 
console.log('判断是否是绝对路径2:',path.isAbsolute('/test/study/')); 
console.log('路径连接',path.join('/Users', 'Administrator', 'Desktop', 'test'));
console.log('输出规范格式的路径',path.normalize('/Users//Administrator//Desktop/'));
console.log('将路径解析成对象',path.parse(path_str));
console.log('路径解析:',path.resolve('d', 'Baidu', '..'));
//路径解析相当于执行了
// cd d && cd Baidu && cd ..
//然后返回执行后所在的路径