'use strict';

var express = require('express'),
    app     = express(),
    server  = require('http').Server(app),
    io      = require('socket.io')(server);

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views/');
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.sendFile(app.get('views') + 'client.html');
});

app.get('/show', function (req, res) {
  res.sendFile(app.get('views') + 'server.html');
});

io.on('connection', function (socket) {
  socket.on('send language', function (data) {
    io.emit('show language', data);
  });
});

server.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
