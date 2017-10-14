/**
 * .
 */

'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var expense= new Schema({
    itemId:{
        type:Schema.Types.objectId,
        ref:"item"
    },
    userId:{
        type:Schema.Types.objectId,
        ref:"user"
    },
    expenseType:{
        type: [{
            type: String,
            enum: ['fuel', 'parts', 'self','directPay']
        }],
        default: ['self']
    },
    desc:String,
    quantity:Number,
    oldCount:Number,
    newCount:Number,
    amount:Number,
    placeOfExpense:String,
    receiptNo:String,
    receiptImg:String,
    status:Boolean
});

/*
add another schema here
 */
module.exports = mongoose.model('expense', expense);