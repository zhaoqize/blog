var fs = require('fs');

//读取文件
fs.readFile('../lianxi/child_process.js',{
	encoding:null,
	flag:'r'
}, function(err,data){
	if(err) throw err;
	console.log(data);
});

//写入文件
fs.writeFile('../lianxi/child_process.js','要写入的数据字符串或者buffer',{
	encoding:'utf8',
	mode:438,
	flag:'w'
},function(err){

})


//打开文件
fs.open('../lianxi/child_process.js','r+',0666,function(err,data){
	debugger
})

//给文件添加数据
fs.appendFile('../lianxi/child_process.js', '异步添加的字符串或buffer', {
	encoding:'utf8',
	mode:438,
	flag:'a'
}, function(err){

});