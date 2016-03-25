import {Component, EventEmitter} from 'angular2/core';
import {Meal} from './meal.model';
import {SeedFactoryComponent} from './seed-factory.component';
import {MealComponent} from './meal.component';
import {PostFormComponent} from './post-form.component';


@Component({
	selector: 'meal-menu',
	inputs: ['mealMenu', 'meal'],
	directives: [SeedFactoryComponent, MealComponent, PostFormComponent],
	template: `
		

		<meal-item *ngFor="#meal of mealMenu" [meal]="meal" >
		</meal-item>

		<button (click)="addNewMeal()"> Add New Meal</button>
		<post-form *ngIf="newMeal" [meal]="addMeal">
    </post-form>

		<seed-factory (emitMeals)="addSeeds($event)">
		</seed-factory>
	`
})

export class MealListComponent {
	mealMenu: Meal[] = [];
	selectedMeal: boolean = false;
	newMeal: boolean = false;
	addMeal: Meal; 
	constructor() {
		this.mealMenu.push(new Meal("food foo", "note foo", 123))
	}
	addSeeds(meals: Meal[]) {
		for (var meal of meals) {
			this.mealMenu.push(meal);
		}
	}

	selectMeal() {
		this.selectedMeal = !this.selectedMeal;
	}

	addNewMeal() {
		this.newMeal = !this.newMeal;
		if(this.newMeal) {
			this.addMeal = new Meal(" ", " ", 0);
			this.mealMenu.push(this.addMeal);
		}
	}

}