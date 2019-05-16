import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CardComponent } from './card/card.component';

//import { AppComponent } from './app.component';

@NgModule({
  declarations: [
	CardComponent    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [CardComponent]
})
export class AppModule { }
