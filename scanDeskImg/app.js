var schedule = require('node-schedule');
var fs = require('fs');
const desktopPath = 'C:/Users/Administrator/Desktop/';
const targetPath = 'F:/博客截图/';
const metaInfo = 'blog';

/**
 * 轮询桌面
 * @return {[type]} [description]
 */
function poll(){
	console.log('--------开始----------')
	schedule.scheduleJob('30 * * * * *', function(){
  		console.log('每分钟的30S都会执行!:' + (new Date).toLocaleTimeString());
	}); 
}

/**
 * 访问桌面
 * @return {[type]} [description]
 */
function visitDesk(){
	console.log('--------开始访问桌面----------')
	fs.readdir(desktopPath,function(err, files){
	   if (err) {
	       return console.error(err);
	   }
	   files.forEach( function (file){
	       if(file && judgeImage(file)){
	       		//console.log('图片类型:' + file);
	       		saveImageToFile(file);
	       }
	   });
	});
}

/**
 * 判断文件类型，取出我们需要的png图片
 * @return {[type]} [description]
 */
function judgeImage(file){
	var postfix = getPostfix(file);
	if(postfix === 'png' && file.indexOf(metaInfo) > -1){
		return file;
	}
}

function getPostfix(file){
	var dotIndex = file.indexOf('.');
	var fileLen = file.length;
	return file.substring(dotIndex+1,fileLen);
}

/**
 * 将获取的图片存入F:\博客截图
 * pipe，它以用来把当前的可读流和另外一个可写流连接起来。可读流中的数据会被自动写入到可写流中
 * @return {[type]} [description]
 */
function saveImageToFile(file){
	var fileReadStream = fs.createReadStream(desktopPath + file);
	var lastPath = targetPath + createDateFolder();
	if(!isFolderHave(lastPath)){
		createLastFloder(lastPath);
	}
	var fileWriteStream = fs.createWriteStream(lastPath + file);
	fileReadStream.pipe(fileWriteStream);
	fileWriteStream.on('close',function(){
  		console.log('复制成功!');
  		deleteDeskImage(file);

	})
}

/**
 * 删除桌面文件
 * @param  {[type]} file [description]
 * @return {[type]}      [description]
 */
function deleteDeskImage(file){
	fs.unlink(desktopPath + file, function(){
		console.log('删除成功!')
	})
}

/**
 * 以系统时间创建文件夹/年月日
 * @return {[type]} [description]
 */
function createDateFolder(){
	var day = (new Date).getDate();
	var month = (new Date).getMonth()+1;
	var year = (new Date).getFullYear();
	return year + '_' + month + '_' + day + '/';
}

/**
 * 判断文件夹是否存在
 * @return {[type]} [description]
 */
function isFolderHave(lastPath){
	fs.exists(lastPath, function(exists){
		if(exists){
			return true;
		}else{
			return false;
		}
	})
}

/**
 * 创建最终目标文件夹
 * @param  {[type]} lastPath [description]
 * @return {[type]}          [description]
 */
function createLastFloder(lastPath){
	fs.mkdir( lastPath, function(){
		console.log(lastPath + "文件夹创建成功!");
	})
}


visitDesk();


