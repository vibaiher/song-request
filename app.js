var express = require('express');
var app = express();

app.get('/', function(request, response) {
  response.send('Hi, I am your request list app!');
});

var server = app.listen(3000, function() {
  console.log('Listening on port %d', server.address().port);
});
