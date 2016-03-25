import {Component, EventEmitter } from 'angular2/core';
import {Meal} from './meal.model';
import {MealListComponent} from './meal-list.component';

@Component({
	selector: 'post-form',
	inputs: ['meal', 'newMeal'],
	template: `
		<form class="create-update-form">
			<label> Food: 
				<input type="text" [(ngModel)]="meal.foodName">
			</label>

			<label> Notes: 
				<input type="text" [(ngModel)]="meal.notes">
			</label>

			<label> Calories:
				<input type="number" [(ngModel)]="meal.calories">
			</label>


		</form>
	`
})

export class PostFormComponent {
} 




