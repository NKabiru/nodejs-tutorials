var fs = require("fs");

module.exports = function (dirName, extName, callback) {
        fs.readdir(dirName, function(err, data){
            if(err){
                return callback(err);
            }else{
                var elements = [];
                for(var i = 0; i < data.length; i++){
                    if(data[i].toString().split(".")[1] == extName){
                       elements.push(data[i]);
                    }
                }
                callback(null, elements);
            }
        });
    }
    