using System.Collections.Generic;

namespace MealManagerApi.Models
{
    public interface IDishDayRepository
    {
        bool DoesItemExist(string id);
        IEnumerable<DishDay> GetAll();
        DishDay Find(string id);
        void Add(DishDay item);
        void Update(DishDay item);
        void Delete(string id);
    }
}


