using System;

namespace MealManagerApi.Models
{
    public class DishDay
    {
        public string Id { get; set; }
        public string WeekDay { get; set; }
        public string MainDish { get; set; }
        public string SideDish { get; set; }
        public DateTime Date { get; set; }
        public int Persons { get; set; }
        public bool EatingHome { get; set; }
    }
}


