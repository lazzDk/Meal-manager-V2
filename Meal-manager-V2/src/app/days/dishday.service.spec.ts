/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DishDayService } from './dishday.service';

describe('Service: Day', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DishDayService]
    });
  });

  it('should ...', inject([DishDayService], (service: DishDayService) => {
    expect(service).toBeTruthy();
  }));
});
