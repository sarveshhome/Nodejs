'use strict';
var mongoose = require('mongoose'),
    Location = mongoose.model('location');


exports.read_location = function(req, res) {
    Location.find({}, function(err, result) {
        if (err) {
            res.send(err);
        }
        res.json(result);
    });
}

exports.create_new_location = function(req, res) {
    var location = new Location();
    location.locationId = req.body.locationId;
    location.country = req.body.country;
    location.state = req.body.state;
    location.region = req.body.region;
    location.addressline1 = req.body.addressline1;
    location.addressline2 = req.body.addressline2;
    location.pincode = req.body.pincode;
    location.geolocation = req.body.geolocation;
    location.geolongitude = req.body.geolongitude;
    location.geolatitude = req.body.geolatitude;
    location.save(function(err) {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'data save' });
    })
}