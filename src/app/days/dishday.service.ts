import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { DishDay } from '../shared/dishday';

@Injectable()
export class DishDayService {

  private headers = new Headers(
    {'Access-Control-Allow-Origin': '*' });
  private dishDayUrl = "http://localhost:65248/api/dishday";

  constructor(private http: Http) {

   }

   private handleError(error: any): Promise<any> {
     console.error("An error occurred", error);
     return Promise.reject(error.message || error);
   }

  getDishDays(): Promise<DishDay[]> {
    return this.http.get(this.dishDayUrl)
      .toPromise()
      .then(response => response.json() as DishDay[])
      .catch(this.handleError);
  }

  getDishDay(id: string) {
    console.log("id is " +id);
    const url = `${this.dishDayUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as DishDay)
      .catch(this.handleError);
  }
}

export const DISHDAYS : DishDay[] = [
      {
        id: 1,
        weekDay: "Monday",
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
        weekDay: "Tuesday",
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
        weekDay: "Wednesday",
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
        weekDay: "Thursday",
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
        weekDay: "Friday",
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
        weekDay: "Saturday",
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
        weekDay: "Sunday",
        shortenedName: "Sun",
        mainDish: "Cheese",
        sideDish: "Tomato",
        image: "cheese.png",
        date: "26.10.2016",
        noOfPersons: 2,
        skip: false
      }
]


