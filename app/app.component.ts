import {Component} from 'angular2/core';
import {MealListComponent} from './meal-list.component';
import {SeedFactoryComponent} from './seed-factory.component';
import {PostFormComponent} from './post-form.component';

@Component({
  selector: 'my-app',
  inputs: ['mealMenu'],
  directives: [MealListComponent, SeedFactoryComponent, PostFormComponent],
  template: `
  <div class="container">
    <h1>calorie tracker</h1>
     <meal-menu></meal-menu>
  </div>
    `
})


export class AppComponent {
}
