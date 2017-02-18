var net = require("net");

var server = net.createServer(function (socket){
    var date = new Date();
    var customDate = date.getFullYear() +
        "-" +
        ('0'+ (date.getMonth() + 1)).slice(0) +
        "-" +
        ('0'+ date.getDate()).slice(-2) +
        " " +
        ('0'+ date.getHours()).slice(-2) +
        ":" +
        ('0'+ date.getMinutes()).slice(-2);
    
   socket.end(customDate + "\n");
    
});

server.listen(process.argv[2]);