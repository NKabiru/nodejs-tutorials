var fs = require("fs");

var data = fs.readFileSync(process.argv[2]);

var result = data.toString().split(/\n/);

console.log(result.length - 1);