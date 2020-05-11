var TodosService = require('./todos.dao');

exports.createTodo = function (req, res, next) {
    var todo = {
        name: req.body.name,
        updatedName: req.body.updatedName
    };

    TodosService.create(todo, function(err, todo) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "todo created successfully"
        })
    })
}

exports.getTodos = function(req, res, next) {
    TodosService.get({}, function(err, todos) {
        if(err) {
            res.json({
                error: err
            })
        }
        res.json({
            todos: todos
        })
    })
}

exports.updateTodo = function(req, res, next) {
    var todo = {
        name: req.body.updatedName,
        updatedName: req.body.updatedName
    }

    console.log("exports.updateTodo");
    console.log(todo.name);
    console.log(todo.updatedName);
    console.log(req.params.name);

    TodosService.update({_id: req.params.id}, todo, function(err, todo) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "Todo updated successfully"
        })
    })
}

exports.removeTodo = function(req, res, next) {
    TodosService.delete({_id: req.params.id}, function(err, todo) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "Todo deleted successfully"
        })
    })
}