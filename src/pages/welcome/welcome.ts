import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import { CharactersPage } from '../characters/characters'

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  loader: any

  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,
    public loadingCtrl: LoadingController) {

  }

  onEnter() {

  	this.loader = this.loadingCtrl.create({
      content: "Entering the universe...",
      spinner: "crescent"
    });
    this.loader.present().then(() => {
      this.navCtrl.push(CharactersPage).then(() => {
        this.loader.dismiss();
      })
    })

  }

}
