(function(window, document, io, undefined) {
  'use strict';

  var socket = io.connect(window.server),
      form   = document.getElementsByTagName('form')[0];

  form.onsubmit = function(event) {
    event.preventDefault();

    var select = form.getElementsByTagName('select')[0],
        response = {};

    if (select.value === '') {
        return false;
    }

    response[select.name] = select.value;

    socket.emit('send language', response);
  }
})(window, document, window.io);
