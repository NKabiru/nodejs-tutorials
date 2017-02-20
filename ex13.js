// Exercise 13 HTTP JSON API Server

var http = require("http");
var url = require("url");

var server = http.createServer(function(req, res){

    var urlObj = url.parse(req.url, true);
    var pathname = urlObj.pathname;
    
    if(pathname == '/api/parsetime'){
        var date = new Date(urlObj.query.iso);
        res.writeHead(200, {"Content-Type": "application/json"});
        res.end(JSON.stringify({
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds()
        }));
    }
    
    if(pathname == '/api/unixtime'){
        var unixTime = new Date(urlObj.query.iso).getTime();
        res.writeHead(200, {"Content-Type": "application/json"});
        res.end(JSON.stringify({unixtime: unixTime}));
    }
    
});

server.listen(process.argv[2]);