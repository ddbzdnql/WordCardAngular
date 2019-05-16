import { Word } from "./word.model";
import { StaticDataSource } from "./datasource.model";

export class Repository {
	private data_source: StaticDataSource;
	private words: Word[];
	
	constructor(){
		this.data_source = new StaticDataSource();
		this.words = this.data_source.getData();
		console.log(this.words);
	}

	getWordByIndex(id: number): Word{
		return this.words[id];
	}

	deleteWordByIndex(id: number){
		this.words.splice(id, 1);
	}

	getWordByName(name: string): Word{
		return this.words.find(w => w.name == name);
	}

	deleteWordByName(name: string){
		this.words.splice(this.words.findIndex(w => w.name == name), 1);
	}

	getWords(): Word[]{
		return this.words;
	}
}
