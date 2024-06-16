var http = require('http')

http.createServer(function (req, res) {
  res.wrte("I"m alive");
    res.end();
}).listen(8080);
