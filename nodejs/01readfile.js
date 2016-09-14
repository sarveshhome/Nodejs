fs = require('fs')
    //if file not exits
fs.readFile('/file/hosts', 'utf8', function(err, data) {
    if (err) {
        return console.log(err);
    }
    console.log(data);
});


//if file exists
fs.readFile('././file/data.txt', 'utf8', function(err, data) {
    if (err) {
        return console.log(err);
    }
    console.log(data);
});