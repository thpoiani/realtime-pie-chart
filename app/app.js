'use strict';

var express = require('express'),
    app     = express(),
    server  = require('http').Server(app),
    io      = require('socket.io')(server),
    ip      = require('ip');

app.engine('html', require('ejs').renderFile);
app.set('views', __dirname + '/views/');
app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  // TODO authorization handshake
  res.render(app.get('views') + 'client.html', { server: ip.address() });
});

app.get('/show', function (req, res) {
  res.render(app.get('views') + 'server.html', { server: ip.address() });
});

io.on('connection', function (socket) {
  socket.on('send language', function (data) {
    io.emit('show language', data);
  });
});


server.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
