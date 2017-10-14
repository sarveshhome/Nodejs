/**
 * .
 */

'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var item_trade= new Schema({
    itemId:{
        type:Schema.Types.ObjectId,
        ref:"item"
    },
    userId:{
        type:Schema.Types.ObjectId,
        ref:"user"
    },
    priority: {
        type: [{
            type: String,
            enum: ['general', 'priority7', 'priority15','priority30','priority90','special','recommended']
        }],
        default: ['general']
    },
    price:Number,
    offerPrice:Number,
    finalPrice:Number,
    trade_type:{
        type:[{
            type:String,
            enum: ['sell','purchase','rent-in','rent-out','leased','support']
        }]
    },
    status:Boolean
});

/*
add another schema here
 */
module.exports = mongoose.model('item_trade', item_trade);