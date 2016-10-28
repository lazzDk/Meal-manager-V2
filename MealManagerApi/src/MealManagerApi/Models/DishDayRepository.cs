using System;
using System.Collections.Generic;
using System.Linq;

namespace MealManagerApi.Models
{
    public class DishDayRepository : IDishDayRepository
    {
        private List<DishDay> _dishDays;

        public DishDayRepository()
        {
            InitializeData();
        }

        private void InitializeData()
        {
            _dishDays = new List<DishDay>();
            var monday = new DishDay
            {
                Id = Guid.NewGuid().ToString(),
                WeekDay = "Monday",
                MainDish = "Chicken",
                SideDish = "Potatos",
                Persons = 4,
                EatingHome = true,
                Date = DateTime.Today
            };
            var tuesday = new DishDay
            {
                Id = Guid.NewGuid().ToString(),
                WeekDay = "Tuesday",
                MainDish = "Salat",
                SideDish = "Bread",
                Persons = 4,
                EatingHome = true,
                Date = DateTime.Today
            };
            var wednesday = new DishDay
            {
                Id = Guid.NewGuid().ToString(),
                WeekDay = "Wednesday",
                MainDish = "Bread",
                SideDish = "Salat",
                Persons = 4,
                EatingHome = true,
                Date = DateTime.Today
            };
            var thursday = new DishDay
            {
                Id = Guid.NewGuid().ToString(),
                WeekDay = "Thursday",
                MainDish = "Bread",
                SideDish = "Salat",
                Persons = 4,
                EatingHome = true,
                Date = DateTime.Today
            };
            var friday = new DishDay
            {
                Id = Guid.NewGuid().ToString(),
                WeekDay = "Friday",
                MainDish = "Bread",
                SideDish = "Salat",
                Persons = 4,
                EatingHome = true,
                Date = DateTime.Today
            };

            _dishDays.Add(monday);
            _dishDays.Add(tuesday);
            _dishDays.Add(wednesday);
            _dishDays.Add(thursday);
            _dishDays.Add(friday);
        }

        public bool DoesItemExist(string id)
        {
            return _dishDays.Any(dd => dd.Id == id);
        }

        public DishDay Find(string id)
        {
            return _dishDays.FirstOrDefault(dd => dd.Id == id);
        }

        public void Add(DishDay dishDay)
        {
            dishDay.Id = Guid.NewGuid().ToString();
            _dishDays.Add(dishDay);
        }

        public IEnumerable<DishDay> GetAll()
        {
            return _dishDays;
        }

        public void Delete(string id)
        {
            _dishDays.Remove(Find(id));
        }

        public void Update(DishDay dishDay)
        {
            var dishDayItem = Find(dishDay.Id);
            var index = _dishDays.IndexOf(dishDayItem);
            _dishDays.Remove(dishDayItem);
            _dishDays.Insert(index, dishDay);
        }


    }
}
