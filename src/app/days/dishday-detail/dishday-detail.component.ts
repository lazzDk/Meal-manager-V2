import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'; 

import { DishDay } from '../../shared/dishday';
import { DishDayService } from '../dishday.service';

@Component({
  selector: 'dishday-detail',
  templateUrl: './dishday-detail.component.html',
  styleUrls: ['./dishday-detail.component.css']
})


export class DishdayDetailComponent implements OnInit {
  dishDay: DishDay;

  constructor(private activatedRoute: ActivatedRoute, private dishDayService: DishDayService) {
   }

  ngOnInit() {
    this.activatedRoute.params.forEach((params: Params) => {
      let id = +params['id'];
      this.dishDayService.getDishDay(id)
      .then(dishDay => this.dishDay = dishDay);
    })
  }

}
