var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var itemSchema = new Schema({

    name :{
        type: String,
        required : true
    },

    img: { data: Buffer, contentType: String },

    isVeg : {
        type : Boolean,
        required : true
    },

    price : Number,

    itemType: {type: Schema.Types.ObjectId, ref: 'item_type'},

    description : String

});

var itemModel = mongoose.model('item', itemSchema);
itemModel.createIndexes();

module.exports = itemModel;