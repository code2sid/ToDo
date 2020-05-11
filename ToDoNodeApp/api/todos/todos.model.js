var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var todosSchema = new Schema({
    name :{
        type: String,
        unique : false,
        required : true
    },
    updatedName : {
        type: String,
        unique : false,
        required : true
    }
}, {
    timestamps: true
});

module.exports = todosSchema;