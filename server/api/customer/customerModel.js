var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var customerSchema = new Schema({

    firstName :{
        type: String,
        required : true
    },

    lastName : String,

    email : {
        type : String,
        required : true,
        unique : true
    },

    mobile : {
        type : Number,
        minlength : 10,
        maxlength : 10,
        required : true,
        unique : true
    }
});

var customerModel = mongoose.model('customer', customerSchema);
customerModel.createIndexes();

module.exports = customerModel;