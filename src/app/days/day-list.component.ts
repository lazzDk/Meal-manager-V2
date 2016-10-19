import { Component, OnInit } from '@angular/core';

import { DishDay } from '../shared/dishday';
import { DishDayService } from './dishday.service';
 
@Component({
  selector: 'day-list',
  templateUrl: 'day-list.component.html',
  styleUrls: ['day-list.component.css']

})
export class DayListComponent implements OnInit {
  dishDays: DishDay[] 
  constructor(private dishDayService: DishDayService) { }

  ngOnInit() { 
    this.getDishDays();
  }
  
  getDishDays(): void {
   this.dishDayService.getDishDays().then(disdays => this.dishDays = disdays);
  }

}