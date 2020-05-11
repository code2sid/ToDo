var mongoose = require('mongoose');
var todosSchema = require('./todos.model');

todosSchema.statics = {
    create : function(data, cb) {
        var todo = new this(data);
        todo.save(cb);
    },

    get: function(query, cb) {
        this.find(query, cb);
    },

    update: function(query, updateData, cb) {
        console.log(query);
        console.log(updateData);
        
        this.findOneAndUpdate(query, {$set: updateData},{new: true}, cb);
    },

    delete: function(query, cb) {
        this.findOneAndDelete(query,cb);
    }
}

var todosModel = mongoose.model('Todos', todosSchema);
module.exports = todosModel;