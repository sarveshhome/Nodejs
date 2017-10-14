/**
 * .
 */

'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var driver= new Schema({
    itemId:{
        type:Schema.Types.ObjectId,
        ref:"item"
    },
    userId:{
        type:Schema.Types.ObjectId,
        ref:"user"
    },
    usage:[{
        start:{
            locationId:{
                type:Schema.Types.ObjectId,
                ref:"location"
            },
            StartTime:{
                type:Date,
                default:Date.now
            }
        },
        end:{
            locationId:{
                type:Schema.Types.ObjectId,
                ref:"location"
            },
            stopTime:Date
        },
        waitTime:Number,
        desc:String
    }],
    currentLocation:{
        type:Schema.Types.ObjectId,
        ref:"location"
    }
});

/*
add another schema here
 */
module.exports = mongoose.model('driver', driver);