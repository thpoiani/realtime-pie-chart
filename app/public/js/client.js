(function(window, document, io, undefined) {
  'use strict';

  var socket = io.connect('http://localhost'),
      form   = document.getElementsByTagName('form')[0];

  form.onsubmit = function(event) {
    event.preventDefault();

    var select = form.getElementsByTagName('select')[0],
        data[select.name] = select.value;

    socket.emit('send language', data);
  }
})(window, document, window.io);
