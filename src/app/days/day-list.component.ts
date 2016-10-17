import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'day-list',
  templateUrl: 'day-list.component.html'
})
export class DayListComponent implements OnInit {
  days: Day[] = []

  constructor() { }

  ngOnInit() {
    this.days = [
      {
        id: 1,
        name: "Monday",
        dish: "Hotday",
        image: "hotdog.png"
      },
        {
        id: 2,
        name: "Tusday",
        dish: "Burger",
        image: "burger.png"
      },
        {
        id: 1,
        name: "Wednesday",
        dish: "Cheese",
        image: "cheese.png"
      }
      ]
   }
}


export class Day {
  id: number;
  name :string;
  dish: string;
  image: string;
}