var http = require('http');

http.createServer(function (req, res) {
    res.write("TEST");
    res.end();
}).listen(8080);