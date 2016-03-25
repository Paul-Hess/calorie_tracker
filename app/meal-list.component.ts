import {Component, EventEmitter} from 'angular2/core';
import {Meal} from './meal.model';
import {SeedFactoryComponent} from './seed-factory.component';
import {MealComponent} from './meal.component';


@Component({
	selector: 'meal-menu',
	inputs: ['mealMenu'],
	directives: [SeedFactoryComponent, MealComponent],
	template: `
		<meal-item *ngFor="#meal of mealMenu" [meal]="meal" >

		</meal-item>
		<seed-factory (emitMeals)="addSeeds($event)"></seed-factory>
	`
})

export class MealListComponent {
	mealMenu: Meal[] = [];

	constructor() {
		this.mealMenu.push(new Meal("food foo", "note foo", 123))
	}
	addSeeds(meals: Meal[]) {
		for (var meal of meals) {
			this.mealMenu.push(meal);
		}
	}
}