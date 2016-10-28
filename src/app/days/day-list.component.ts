import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DishDay } from '../shared/dishday';
import { DishDayService } from './dishday.service';
 
@Component({
  selector: 'day-list',
  templateUrl: 'day-list.component.html',
  styleUrls: ['day-list.component.css']

})
export class DayListComponent implements OnInit {
  dishDays: DishDay[] 
  constructor(private dishDayService: DishDayService, private router: Router) { }

  ngOnInit() { 
    this.getDishDays();
  }
  
  getDishDays(): void {
   this.dishDayService.getDishDays().then(disdays => this.dishDays = disdays);
  }

  goToDetails(id: number){
    let link = ['/detail', id];
    this.router.navigate(link);
  }

}