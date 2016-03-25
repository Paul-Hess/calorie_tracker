import {Component} from 'angular2/core';
import {MealListComponent} from './meal-list.component';
import {SeedFactoryComponent} from './seed-factory.component';
@Component({
  selector: 'my-app',
  inputs: ['mealMenu'],
  directives: [MealListComponent, SeedFactoryComponent],
  template: `
  <div class="container">
    <h1></h1>
     <meal-menu></meal-menu>
  </div>
    `
})


export class AppComponent {

}
