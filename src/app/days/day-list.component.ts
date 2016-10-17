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
        image: "http://globe-views.com/dcim/dreams/hot-dog/hot-dog-06.jpg"
      },
        {
        id: 2,
        name: "Tusday",
        dish: "Burger",
        image: "http://globe-views.com/dcim/dreams/hot-dog/hot-dog-06.jpg"
      },
        {
        id: 1,
        name: "Wednesday",
        dish: "Hotday",
        image: "http://globe-views.com/dcim/dreams/hot-dog/hot-dog-06.jpg"
        
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