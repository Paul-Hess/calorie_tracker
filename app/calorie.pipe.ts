import {Pipe, PipeTransform} from 'angular2/core';
import {Meal} from './meal.model';

@Pipe({
	name: 'calorie',
	pure: false
})

export class CaloriePipe implements PipeTransform {
	transform(input: Meal[], args) {
		var calorieCount  =  parseInt(args[0]);
		if(calorieCount > 300) {
			return input.filter((meal) => {
				return meal.calories > 300;
			});
		} else if(calorieCount < 300 && calorieCount > 0) {
			return input.filter((meal) => {
				return meal.calories < 300;
			})
		} else {
			return input;
		}

	}
}