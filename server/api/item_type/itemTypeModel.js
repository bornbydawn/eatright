var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var itemTypeSchema = new Schema({

    name :{
        type: String,
        required : true
    },

    restaurant: {type: Schema.Types.ObjectId, ref: 'restaurant'},

    description : String
});

var itemTypeModel = mongoose.model('item_type', itemTypeSchema);
itemTypeModel.createIndexes();

module.exports = itemTypeModel;