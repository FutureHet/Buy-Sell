using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
//using BackEnd.Models;

namespace BackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CityController : ControllerBase
    {
        public CityController()
        {
        }

        [HttpGet]
        public IEnumerable<string> getString()
        {
            return new string[] {"First thing using", " .net core"};
        }
    }
}