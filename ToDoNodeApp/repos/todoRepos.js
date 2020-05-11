const fs = require('fs');
const filePath = './app_data/toDos.json';

var getAllToDos = () => {
    const rawdata = fs.readFileSync(filePath);
    return JSON.parse(rawdata);
}

var AddTodo = (todo: ToDo) => {
    let todos = getAllToDos();

    fs.writeFileSync(filePath, data);
    return true;
}