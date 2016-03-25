import {Component, EventEmitter } from 'angular2/core';
import {Meal} from './meal.model';
import {MealListComponent} from './meal-list.component';

@Component({
	selector: 'seed-factory',
	inputs: ['seedMeals'],
	outputs: ['emitMeals'],
	template: `
		<seed (click)="createMeals()">seed</seed>	
	`
})

export class SeedFactoryComponent {
	seedMeals: Meal[] = [];
	emitMeals: EventEmitter<Meal[]>;
	constructor() {
		this.emitMeals = new EventEmitter();
	}
	createMeals() {
		for (var i = 0; i <= 12; i++) {
			var randomCal = Math.round(Math.random() * (400 - 100) + 100);
			var newMeal = new Meal("food item" + i, "note about this food" + i, randomCal);
			this.seedMeals.push(newMeal);
		}
		this.emitMeals.emit(this.seedMeals);
	}
}