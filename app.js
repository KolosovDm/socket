//сервер для socket

var socket = require('socket.io');
var express = require('express');
var app = express();
var io = socket.listen(app.listen(8080)); 

app.get('/', function(req, res){
	res.sendFile(__dirname +'/views/index.html');
})

io.sockets.on('connection', function(client){
	console.log('connected...'); 
	client.on('message', function(data){
		client.emit('response', data);
		client.broadcast.emit('response', data);
		
	})
	
})