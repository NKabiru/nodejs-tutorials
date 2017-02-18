var mymodule = require("./module.js");
var path = process.argv[2];
var ext = process.argv[3];

mymodule(path, ext, function(err, data){
    if(err){
        console.error(err);
    }else{
        data.forEach(function(d){
            console.log(d.toString());
        });
    }
    
});