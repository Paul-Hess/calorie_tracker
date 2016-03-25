import {Component} from 'angular2/core';
import {Meal} from './meal.model';
import {MealListComponent} from './meal-list.component';


@Component({
	selector: 'meal-item',
	inputs: ['meal'],
	template: `
			<p (click)="selectMeal()"> food Item: {{ meal.foodName }} </p>
			<div *ngIf="selectedMeal">
				<p> Notes: {{ meal.notes}} </p>
				<p> Calorie Count: {{ meal.calories}} </p>
			</div>
	`
})

export class MealComponent {
	selectedMeal: boolean = false;
	selectMeal() {
		this.selectedMeal = !this.selectedMeal;
	}

}