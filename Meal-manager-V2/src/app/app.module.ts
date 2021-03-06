import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { DayListComponent } from './days/day-list.component';
import { DishDayService } from './days/dishday.service';
import { DishdayDetailComponent } from './days/dishday-detail/dishday-detail.component';
import { RecipeComponent } from './recipe/recipe.component';


@NgModule({
  declarations: [
    AppComponent,
    DayListComponent,
    DishdayDetailComponent,
    MainComponent,
    RecipeComponent
  ],
  imports: [
    MaterialModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [
    DishDayService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
