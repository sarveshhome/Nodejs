/**
 * .
 */

'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var user = new Schema({
    name: String,
    userType: {
        type: String,
        enum: ["contractor", "owner","other"]
    },
    gender: {
        type: String,
        enum: ["male", "female"]
    },
    email:String,
    mobile:{
        type: String,
        required: true,
        unique: true
    },
    otherContact:[String],
    password:{
        type:String,
        default:'password@123'
    },
    Modified_date:{
        type:Date,
        default:Date.now
    },
    status: {
        type: [{
            type: String,
            enum: ['registered', 'active', 'inactive','blocked']
        }],
        default: ['registered']
    }
});

module.exports = mongoose.model('user', user);
/*
add another schema here
 */


