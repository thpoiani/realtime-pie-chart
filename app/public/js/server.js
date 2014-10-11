(function(window, document, io, Chartist, undefined) {
  'use strict';

  var socket, data, options, responsive;

  socket = io.connect('http://localhost');

  data = {
    labels: ['Bananas', 'Apples', 'Grapes'],
    series: [20, 15, 40]
  };

  options = {
    labelInterpolationFnc: function(value) {
      return value[0];
    }
  };

  responsive = [
    ['screen and (min-width: 640px)', {
      chartPadding: 30,
      labelOffset: 100,
      labelDirection: 'explode',
      labelInterpolationFnc: function(value) {
        return value;
      }
    }],
    ['screen and (min-width: 1024px)', {
      labelOffset: 80,
      chartPadding: 20
    }]
  ];

  socket.on('show language', function (data) {
    console.log(data);
  });

  Chartist.Pie('.ct-chart', data, options, responsive);
})(window, document, window.io, window.Chartist);
