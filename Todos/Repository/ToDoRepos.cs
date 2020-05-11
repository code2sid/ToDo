using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using Todos.Models;
using Todos.Repository.Interface;

namespace Todos.Repository
{
    public class ToDoRepos : IToDoRepos
    {
        public string filePath = HttpContext.Current.Server.MapPath("~/App_Data/todos.json");
        public List<TodoDto> GetToDos()
        {
            var items = new List<TodoDto>();
            using (StreamReader r = new StreamReader(filePath))
            {
                string json = r.ReadToEnd();
                items = JsonConvert.DeserializeObject<List<TodoDto>>(json);
            }
            return items;
        }

        public bool AddToDo(TodoDto todo)
        {
            var todoList = GetToDos().ToList();
            todoList.Add(todo);
            var jsonData = JsonConvert.SerializeObject(todoList);
            try
            {
                File.WriteAllText(filePath, jsonData);
            }
            catch
            {
                return false;
            }

            return true;
        }

        public bool UpdateToDo(TodoDto todo)
        {
            var todoList = GetToDos().ToList();
            todoList.First(t => t.name == todo.name).name = todo.updatedName;
            var jsonData = JsonConvert.SerializeObject(todoList);
            try
            {
                File.WriteAllText(filePath, jsonData);
            }
            catch
            {
                return false;
            }

            return true;
        }

        public bool DeleteToDo(TodoDto todo)
        {
            var todoList = GetToDos().ToList();
            var todoList1 = todoList.Where(t => !todo.name.Contains(t.name));
            var jsonData = JsonConvert.SerializeObject(todoList1);
            try
            {
                File.WriteAllText(filePath, jsonData);
            }
            catch
            {
                return false;
            }

            return true;
        }
    }
}