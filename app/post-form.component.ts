import {Component, EventEmitter } from 'angular2/core';
import {Meal} from './meal.model';
import {MealListComponent} from './meal-list.component';

@Component({
	selector: 'post-form',
	outputs: ['postMeal', 'editMeal'],
	template: `
		<form class="create-update-form">
			<label>
				<input #foodType>
			</label>
			<label>
				<input #notesInput>
			</label>
			<label>
				<input #calorieCount>
			</label>
			<button (click)="updateMeal(foodType.value, notesInput.value, calorieCount.value)"> update</button>
			<button (click)="addMeal(foodType.value, notesInput.value, calorieCount.value)">Add</button>
		</form>
	`
})

export class PostForm {
	postMeal: EventEmitter<Meal>;
	editMeal: EventEmitter<Meal>;

	constructor() {
		this.postMeal = new EventEmitter();
		this.editMeal = new EventEmitter();
	}

	addMeal(food: string, notes: string, calories: string) {
		let calorieNum = parseFloat(calories);
		this.postMeal.emit(new Meal(food, notes, calorieNum));
	}	


	updateMeal(food: string, notes: string, calories: string) {
		let calorieNum = parseFloat(calories);
		this.editMeal.emit(new Meal(food, notes, calorieNum));
	}


} 