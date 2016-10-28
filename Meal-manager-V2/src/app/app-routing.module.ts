import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { DayListComponent } from './days/day-list.component';
import { DishDayService } from './days/dishday.service';
import { DishdayDetailComponent } from './days/dishday-detail/dishday-detail.component';
import { RecipeComponent } from './recipe/recipe.component';

const routes : Routes = [
  {
    path: '',
    redirectTo: '/main',
    pathMatch  : 'full'
  },
  {
    path: 'main',
    component: MainComponent,
  },
  {
    path: 'detail/:id',
    component: DishdayDetailComponent
  },
  {
    path: 'recipe',
    component: RecipeComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})


export class AppRoutingModule {

}

export class MealTestRoutingModule { }
