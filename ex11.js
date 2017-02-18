var http = require("http");
var fs = require("fs");

var server = http.createServer(function(request, response){
    var filestream = fs.createReadStream(process.argv[3]);
    
    filestream.on('data', function(data){
        response.write(data);
    });
    
    filestream.on('end', function(data){
        response.end();
    });
});
server.listen(process.argv[2]);