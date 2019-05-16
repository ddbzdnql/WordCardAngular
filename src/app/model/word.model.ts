export class Word{
	constructor(public name?: string,
				public explanation?: string,
				public times_correct: number = 0,
				public times_total: number = 0){}
}
