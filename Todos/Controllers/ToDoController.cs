using BasicAuthentication;
using System.Collections.Generic;
using System.Web.Http;
using Todos.Models;
using Todos.Repository;
using Todos.Repository.Interface;

namespace Todos.Controllers
{
    [BasicAuthentication]
    public class ToDoController : ApiController
    {
        public IToDoRepos _toDoRepos;

        public ToDoController(IToDoRepos toDoRepos)
        {
            _toDoRepos = toDoRepos;
        }

        public List<TodoDto> Get()
        {
            return _toDoRepos.GetToDos();
        }

        public bool Post(TodoDto todo)
        {
            return _toDoRepos.AddToDo(todo);
        }

        public bool Delete(TodoDto todo)
        {
            return _toDoRepos.DeleteToDo(todo);
        }

        public bool Put(TodoDto todo)
        {
            return _toDoRepos.UpdateToDo(todo);
        }
    }
}
