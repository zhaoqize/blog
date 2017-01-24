var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //获取get请求参数
  res.send("user");
});


//http://localhost:3000/users/zqzjs?name=zhaoqize&word=cool&job[st]=web
//http://localhost:3000/users/zqzjs
router.get('/:name', function(req, res, next) {
  //4.版本中已被废弃，不建议使用
  req.param('name')
  console.log(JSON.stringify(req.query) || '')
  //获取get请求参数
  var _html = "[Get]</br>"+
  			  "Params"+
  		      "<p><strong>req.params:</strong>"+(JSON.stringify(req.params) || '')+"</p>" +
  		      "<p><strong>req.params.name:</strong>"+(req.params.name || '')+"</p>" +
  			  "Query:" +
  			  "<p><strong>req.query:</strong>"+(JSON.stringify(req.query) || '')+"</p>" +
  			  "<p><strong>req.query.name:</strong>"+(req.query.name || '')+"</p>" +
  			  "<p><strong>req.query.word:</strong>"+(req.query.word || '')+"</p>"+
  			  "<p><strong>req.query.job.st:</strong>"+(req.query.job.st || '')+"</p>" +
  			  "<p><strong>req.param('name'):</strong>"+(req.param('name') || '')+"</p>" ;

  res.send(_html);
});

//http://localhost:3000/users/file/jquery.js
router.get('/file/*', function(req, res, next) {
  //获取get请求参数
  var _html = "<p><strong>req.params[0]:</strong>"+req.params[0] || ""+"</p>";

  res.send(_html);
});


//post
//http://localhost:3000/users/post/do
router.get('/post/do', function(req, res, next) {
 
  var _html = "<form method='post' action='/users/postTest'>" +
  			  "pName:<input name='pName' type='text'/><br/>" +
  			  "pWord:<input name='pWord' type='text'/><br/>" +
  			  "<input type='submit' value='Submit'/>" +
  			  "</form>"

  res.send(_html);
});

router.post('/postTest',function(req, res, next){
	var _html = "[Post]" +
			    "<p><strong>req.body:</strong>"+(JSON.stringify(req.body) || '')+"</p>" +
			    "<p><strong>req.body.name:</strong>"+(req.body.pName || '')+"</p>" +
				"<p><strong>req.body.name:</strong>"+(req.body.pWord || '')+"</p>";
	res.send(_html);
})


//http://localhost:3000/users/router/get
router.get('/router/get',function(req, res, next){
	res.send(req.route);
})

//http://localhost:3000/users/cookies/get
router.get('/cookies/get',function(req, res, next){
	res.send(req.cookies);
})

//http://localhost:3000/users/hostname/get
router.get('/hostname/get',function(req, res, next){
	res.send(req.hostname);
})

//http://localhost:3000/users/ip/get
router.get('/ip/get',function(req, res, next){
	res.send(req.ip);
})

//http://localhost:3000/users/originalUrl/get
router.get('/originalUrl/get',function(req, res, next){
	res.send(req.originalUrl);
})

//http://localhost:3000/users/protocol/get
router.get('/protocol/get',function(req, res, next){
	res.send(req.protocol);
})

//http://localhost:3000/users/secure/get
router.get('/secure/get',function(req, res, next){
	res.send(req.secure);
})

//http://localhost:3000/users/requestInfo/get
router.get('/requestInfo/get',function(req, res, next){
	var _html = "";
	_html += "[Accept] "+req.header('Accept')+"<br/>"
	_html += "[Accept-Encoding] "+req.header('Accept-Encoding')+"<br/>"
	_html += "[Accept-Language] "+req.header('Accept-Language')+"<br/>"
	_html += "[Cache-Control] "+req.header('Cache-Control')+"<br/>"
	_html += "[Connection] "+req.header('Connection')+"<br/>"
	_html += "[Cookie] "+req.header('Cookie')+"<br/>"
	_html += "[Host] "+req.header('Host')+"<br/>"
	_html += "[If-None-Match] "+req.header('If-None-Match')+"<br/>"
	_html += "[Upgrade-Insecure-Requests] "+req.header('Upgrade-Insecure-Requests')+"<br/>"
	_html += "[User-Agent] "+req.header('User-Agent')+"<br/>"
	res.send(_html);
})




module.exports = router;
