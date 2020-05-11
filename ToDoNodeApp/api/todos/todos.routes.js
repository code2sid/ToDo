
const express = require('express');
const router = express.Router();
const todosController = require('./todos.controller');

router.get('/get', todosController.getTodos);
router.post('/create', todosController.createTodo);
router.put('/update/:id', todosController.updateTodo);
router.delete('/delete/:id', todosController.removeTodo);
module.exports = router;