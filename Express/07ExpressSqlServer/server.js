var express = require('express');
var app = express();

app.get('/', function(req, res) {

    var sql = require("mssql");

    // config for your database
    var config = {
        user: 'sa',
        password: 'password@123',
        server: '192.168.0.11',
        database: 'Student'
    };

    // connect to your database
    sql.connect(config, function(err) {

        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();

        // query to the database and get the records
        request.query('proc_getStudentInfo', function(err, recordset) {

            if (err) console.log(err);

            // send records as a response
            res.send(recordset);

        });
    });
});

var server = app.listen(3500, function() {
    console.log('Server is running..');
});