import {Component, EventEmitter} from 'angular2/core';
import {Meal} from './meal.model';
import {SeedFactoryComponent} from './seed-factory.component';
import {MealComponent} from './meal.component';
import {PostFormComponent} from './post-form.component';
import {CaloriePipe} from './calorie.pipe';


@Component({
	selector: 'meal-menu',
	inputs: ['mealMenu', 'meal'],
	pipes: [CaloriePipe],
	directives: [SeedFactoryComponent, MealComponent, PostFormComponent],
	template: `
		
		<div class="view-option">
			<p> View: </p>
			<select  (change)="onChange($event.target.value)">
				<option value="302">higher calorie items</option>
				<option value="1">low calorie items</option>
				<option value="-1" selected="selected">all</option>
			</select>
		</div>

		<meal-item *ngFor="#meal of mealMenu | calorie:showFilter" [meal]="meal" >
		</meal-item>
		
		<div class="post-form">
			<button (click)="addNewMeal()"> Add New Meal</button>
			<post-form *ngIf="newMeal" [meal]="addMeal">
	    </post-form>
	  </div>

		<seed-factory (emitMeals)="addSeeds($event)">
		</seed-factory>
	`
})

export class MealListComponent {
	mealMenu: Meal[] = [];
	selectedMeal: boolean = false;
	newMeal: boolean = false;
	addMeal: Meal; 
	showFilter: number = -1;
	constructor() {
		this.mealMenu.push(new Meal("food foo", "note foo", 123))
		console.log(this.mealMenu[0].timeStamp);
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

	onChange(filterSelected) {
		this.showFilter = filterSelected;
	}

}