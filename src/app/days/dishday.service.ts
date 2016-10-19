import { Injectable } from '@angular/core';
import { DishDay } from '../shared/dishday';

@Injectable()
export class DishDayService {
  constructor() { }

  getDishDays(): Promise<DishDay[]> {
    return Promise.resolve(DISHDAYS);
  }

  getDishDay(id: number) {
    return this.getDishDays()
      .then(dishDays => dishDays.find(dishDay => dishDay.id === id));
  }
}

export const DISHDAYS : DishDay[] = [
      {
        id: 1,
        name: "Monday",
        shortenedName: "Mon",
        mainDish: "Hotday",
        sideDish: "Tomato",
        image: "hotdog.png", 
        date: "20.10.2016",
        noOfPersons: 2,
        skip: false
      },
      {
        id: 2,
        name: "Tuesday",
        shortenedName: "Tue",
        mainDish: "Burger",
        sideDish: "Tomato",
        image: "burger.png",
        date: "21.10.2016",
        noOfPersons: 2,
        skip: false
      },
      {
        id: 3,
        name: "Wednesday",
        shortenedName: "Wed",
        mainDish: "Cheese",
        sideDish: "Tomato",
        image: "cheese.png",
        date: "22.10.2016",
        noOfPersons: 2,
        skip: false
      },
       {
        id: 4,
        name: "Thursday",
        shortenedName: "Thur",
        mainDish: "Cheese",
        sideDish: "Tomato",
        image: "cheese.png",
        date: "23.10.2016",
        noOfPersons: 2,
        skip: false
      },
       {
        id: 5,
        name: "Friday",
        shortenedName: "Fri",
        mainDish: "Cheese",
        sideDish: "Tomato",
        image: "cheese.png",
        date: "24.10.2016",
        noOfPersons: 2,
        skip: false
      },
       {
        id: 6,
        name: "Saturday",
        shortenedName: "Sat",
        mainDish: "Cheese",
        sideDish: "Tomato",
        image: "cheese.png",
        date: "25.10.2016",
        noOfPersons: 2,
        skip: false
      },
       {
        id: 7,
        name: "Sunday",
        shortenedName: "Sun",
        mainDish: "Cheese",
        sideDish: "Tomato",
        image: "cheese.png",
        date: "26.10.2016",
        noOfPersons: 2,
        skip: false
      }
]


