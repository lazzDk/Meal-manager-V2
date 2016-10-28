using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MealManagerApi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis.CSharp.Syntax;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace MealManagerApi.Controllers
{
    [Route("api/[controller]")]
    public class DishDayController : Controller
    {
        private readonly IDishDayRepository _dishDayRepository;

        public DishDayController(IDishDayRepository dishDayRepository)
        {
            _dishDayRepository = dishDayRepository;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public IActionResult Get(string id)
        {
            var item = _dishDayRepository.Find(id);
            return item == null ? (IActionResult) NotFound() : new ObjectResult(item);
        }

        [HttpGet]
        public IActionResult List()
        {
            return Ok(_dishDayRepository.GetAll());
        }
    }
}
