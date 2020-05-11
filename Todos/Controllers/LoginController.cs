using BasicAuthentication;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Todos.Controllers
{
    [BasicAuthentication]
    public class LoginController : ApiController
    {
        public string Get()
        {
            return "Login Authenticated";
        }
    }
}
