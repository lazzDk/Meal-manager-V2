﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MealManagerApi.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace MealManagerApi.Controllers
{
    [Route("api/[controller]")]
    public class ReceipeController : Controller
    {
        // GET: api/receipes
        [HttpGet]
        public IEnumerable<Receipe> Get()
        {
            return new Receipe[0];
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
