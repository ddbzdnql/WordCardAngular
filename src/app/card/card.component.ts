import { Component } from "@angular/core";
import { Repository } from "../model/repo.model";

@Component({
	selector: 'app',
	templateUrl: './card.component.html'
})

export class CardComponent{
	model: Repository = new Repository();
}
