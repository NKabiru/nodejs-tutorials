var http = require("http");
var bl = require("bl");

// Async chaining with promises
// 1st Promise
var firstUrl = function () {
    var promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            http.get(process.argv[2], function(response){
               response.pipe(bl(function(err, data) {
                   if (err) throw console.error;
                   console.log(data.toString());
               }));
            });
            resolve(true);
        }, 2000);
    });
    
    return promise;
};

// 2nd Promise
var secondUrl = function () {
    var promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            http.get(process.argv[3], function(response){
                response.pipe(bl(function(err, data) {
                   if (err) throw console.error;
                   console.log(data.toString());
               }));
            });
            resolve(true);
        }, 2000);
    });
    
    return promise;
};

// 3rd Promise
var thirdUrl = function () {
    var promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            http.get(process.argv[4], function(response){
                response.pipe(bl(function(err, data) {
                   if (err) throw console.error;
                   console.log(data.toString());
               }));
            });
            resolve(true);
        }, 2000);
    });
    
    return promise;
};

// Chaining
firstUrl()
    .then(secondUrl)
    .then(thirdUrl);