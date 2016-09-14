fs = require('fs');
//time manipulation code
var startTime = new Date().getTime();

//if file exists
fs.readFile('././file/data.txt', 'utf8', function(err, data) {
    if (err) {
        return console.log(err);
    }
    console.log(data);

    //time manipulation code
    var endTime = new Date().getTime();
    console.log("duration [ms] = " + (endTime - startTime));
});