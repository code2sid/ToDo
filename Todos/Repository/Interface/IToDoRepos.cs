using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Todos.Models;

namespace Todos.Repository.Interface
{
    public interface IToDoRepos
    {
        List<TodoDto> GetToDos();
        bool AddToDo(TodoDto todoDto);
        bool DeleteToDo(TodoDto todoDto);
        bool UpdateToDo(TodoDto todoDto);
    }
}
