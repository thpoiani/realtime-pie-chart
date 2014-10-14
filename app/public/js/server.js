(function(window, document, io, Chartist, undefined) {
  'use strict';

  var socket, data, chart;

  socket = io.connect(window.server);

  data = {
    labels: [],
    series: []
  };

  chart = Chartist.Pie('.ct-chart', data, {
    labelInterpolationFnc: function(value) {
      return value + ' (' + data.series[data.labels.indexOf(value)] + ')';
    }
  });

  socket.on('show language', function (response) {
    if (data.labels.indexOf(response.language) === -1) {
        data.labels.push(response.language);
        data.series.push(1);
    } else {
        ++data.series[data.labels.indexOf(response.language)];
    }

    chart.update();
  });
})(window, document, window.io, window.Chartist);
