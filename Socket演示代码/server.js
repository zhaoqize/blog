// var net = require('net');

// var chatServer = net.createServer(),
//     clientList = [];

// chatServer.on('connection', function(client) {
//     client.name = client.remoteAddress + ':' + client.remotePort;

//     client.write('Hi!\n'); // 服务端向客户端输出信息，使用 write() 方法  
//     client.write('Bye!\n');
//     clientList.push(client);
//     //client.end(); // 服务端结束该次会话  
//     client.on('data', function(data) {
//         broadcast(data, client); // 接受来自客户端的信息 
//         console.log('收到来自客户端消息:',data)  
//     });

//     client.on('end', function() {
//     	console.log('socket链接关闭') 
//         clientList.splice(clientList.indexOf(client), 1); //移除不活跃链接
//     })

//     client.on('error', function(e) {
//     	console.log('socket链接出错:',e) 
//     });

// });

// function broadcast(message, client) {
//     for (var i = 0; i < clientList.length; i += 1) {
//         if (client !== clientList[i]) {
//             clientList[i].write(client.name + " says " + message);
//         }
//     }
// }

// chatServer.listen(9000);

//引入express模块
var express = require('express'); 
var app = express();

var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.use('/', express.static(__dirname + '/public')); 

server.listen(80);

//socket部分
io.on('connection', function(socket) {
    //接收并处理客户端的hi事件
    socket.on('hi', function(data) {
        console.log(data);

        //触发客户端事件c_hi
        socket.emit('c_hi','hello too!')
    })

    //断开事件
    socket.on('disconnect', function(data) {
    	console.log('断开',data)
        socket.emit('c_leave','离开');
        //socket.broadcast用于向整个网络广播(除自己之外)
        //socket.broadcast.emit('c_leave','某某人离开了')
    })

});
