import {Component} from 'angular2/core';
import {Meal} from './meal.model';
import {MealListComponent} from './meal-list.component';
import {PostFormComponent} from './post-form.component';


@Component({
	selector: 'meal-item',
	inputs: ['meal', 'currentMeal'],
	directives: [PostFormComponent],
	template: `
			<p (click)="selectMeal()"> food Item: {{ meal.foodName }} </p>
			<div *ngIf="selectedMeal">
				<p> Notes: {{ meal.notes}} </p>
				<p> Calorie Count: {{ meal.calories}} </p>
			<button (click)="editMeal()">Edit Meal
			</button>
			<post-form *ngIf="currentMeal" [meal]="meal">
			</post-form>
			</div>
	`
})

export class MealComponent {
	selectedMeal: boolean = false;
	currentMeal: boolean = false;
	selectMeal() {
		this.selectedMeal = !this.selectedMeal;
	}

	editMeal() {
		this.currentMeal = !this.currentMeal;
	}

}