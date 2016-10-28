using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MealManagerApi.Models
{
    public class Receipe
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public long Author { get; set; }
    }

    public class Unit
    {
        public string Id { get; set; }
        public string Abbreviation { get; set; }
        public string Description { get; set; }
        
    }
    public class ReceipeIem
    {
        public string Id { get; set; }
        public string ReceipeId { get; set; }
        public Unit Unit { get; set; }
        public Ingredient Ingredient { get; set; }
    }

    public class Ingredient
    {
        public string Id { get; set; }
        public string Name { get; set; }
    }



}
