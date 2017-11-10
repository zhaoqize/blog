var http = require("http");
var url = require("url");
var querystring = require('querystring')

http.createServer(function(request, response) {
    var pathname = url.parse(request.url);
    var query = querystring.parse(pathname.query);
   
    if (pathname.pathname === '/getDo') {
        response.writeHead(200, { "Content-Type": "text/plain" });
        response.write("Hello World");
        response.end();
    } else if (pathname.pathname === '/postDo') {
        postTest(response);
    } else if (pathname.pathname === '/test') {
        var jsonData = '';
        request.on("data", function(data) {
            jsonData += data
            console.log('接受数据中。。。');
        });
        request.on("end", function() {
        	console.log('接受完成!');
        	console.log(querystring.parse(jsonData));
        })
    }



}).listen(8888);

function postTest(response) {
    var postData = querystring.stringify({
            'msg': 'Hello World!'
        })
        //发送post请求
    var options = {
        hostname: 'localhost',
        port: 8888,
        path: '/test',
        method: 'POST',
        headers: {
            'Content-Type': '"text/plain',
            'Content-Length': postData.length
        }
    };

    var req = http.request(options);

    req.write(postData);
    req.end()
}
