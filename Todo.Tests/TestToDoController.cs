using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using Todos.Controllers;
using Todos.Models;
using Todos.Repository;
using Todos.Repository.Interface;

namespace Todo.Tests
{
    [TestClass]
    public class TestToDoController
    {

        [TestMethod]
        public void GetAllToDos_ShouldReturnAllTodoItems()
        {
            var reposResult = new List<TodoDto>();
            reposResult.Add(new TodoDto { name = "item1" });
            reposResult.Add(new TodoDto { name = "item1" });
            reposResult.Add(new TodoDto { name = "item1" });
            reposResult.Add(new TodoDto { name = "item1" });
            var mockRepository = new Mock<IToDoRepos>();

            mockRepository.Setup(x => x.GetToDos()).Returns(reposResult);
            var controller = new ToDoController(mockRepository.Object);

            var result = controller.Get();
            var expectedResults = GetTestToDos();
            Assert.AreEqual(expectedResults.Count, result.Count());
        }

        [TestMethod]
        public void InsertToDos_ShouldReturnTrueAfterInsert()
        {

            var mockRepository = new Mock<IToDoRepos>();
            mockRepository.Setup(x => x.AddToDo(It.IsAny<TodoDto>())).Returns(true);

            var controller = new ToDoController(mockRepository.Object);
            var newtodo = new TodoDto { name = "new todo" };
            var result = controller.Post(newtodo);
            Assert.IsTrue(result);
        }

        [TestMethod]
        public void UpdateToDos_ShouldReturnTrueAfterEdit()
        {
            var mockRepository = new Mock<IToDoRepos>();
            mockRepository.Setup(x => x.UpdateToDo(It.IsAny<TodoDto>())).Returns(true);

            var controller = new ToDoController(mockRepository.Object);
            var newtodo = new TodoDto { name = "new todo", updatedName = "new todo updated" };
            var result = controller.Put(newtodo);
            Assert.IsTrue(result);

        }

        [TestMethod]
        public void DeleteToDos_ShouldReturnTrueAfterDelete()
        {
            var mockRepository = new Mock<IToDoRepos>();
            mockRepository.Setup(x => x.DeleteToDo(It.IsAny<TodoDto>())).Returns(true);

            var controller = new ToDoController(mockRepository.Object);
            var newtodo = new TodoDto { name = "new todo updated" };
            var result = controller.Delete(newtodo);
            Assert.IsTrue(result);

        }

        private List<TodoDto> GetTestToDos()
        {
            var testtodos = new List<TodoDto>();
            testtodos.Add(new TodoDto { name = "item1" });
            testtodos.Add(new TodoDto { name = "item2" });
            testtodos.Add(new TodoDto { name = "item3" });
            testtodos.Add(new TodoDto { name = "item4" });

            return testtodos;
        }


    }
}
