var fs = require("fs")

fs.readdir(process.argv[2], function(err, data){
    if (err) {
        console.log(err);
    }
    
    for (var i = 0; i < data.length; i++) {
        if(data[i].toString().split(".")[1] == process.argv[3]){
            console.log(data[i].toString());
        }
    }

});