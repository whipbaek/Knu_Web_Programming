var http = require('http');
var dt = require('./firstmodule');

http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.write("The date and time are currently: " + dt.myDateTime());
    res.end();
}).listen(8080);