import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirstPage } from '../first/first';
import { SecondPage } from '../second/second';
import { CardsPage } from '../cards/cards';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

	openFirstPage(){
	this.navCtrl.push(FirstPage);
	}

	openSecondPage(){
	this.navCtrl.push(SecondPage);
	}
	
	openCardsPage(){
	this.navCtrl.push(CardsPage);
	}
}
