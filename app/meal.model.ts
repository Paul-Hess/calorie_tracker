
export class Meal {

	public timeStamp: Date = new Date(); 
	constructor(public foodName: string, public notes: string, public calories: number) {}
}