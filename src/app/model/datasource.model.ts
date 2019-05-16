import { Word } from "./word.model";

export class StaticDataSource{
	private data: Word[]

	constructor(){
		this.data = new Array<Word>(
			new Word("divulge", "v. to make known (somethine private or secret)"),
			new Word("inadvertent", "adj. marked by or resulting from carelessness; negligent"),
			new Word("panegyric", "n. a formal eulogistic composition intended as a public compliment")
		);
	}

	getData(): Word[] {
		return this.data;
	}
} 
