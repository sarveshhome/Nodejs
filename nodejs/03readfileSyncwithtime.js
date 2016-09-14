fs = require('fs');
//time manipulation code
var startTime = new Date().getTime();

//if file exists
//readFile method async type
var data = fs.readFileSync('././file/data.txt', "utf-8");

console.log(data);

//time manipulation code
var endTime = new Date().getTime();
console.log("duration [ms] = " + (endTime - startTime));