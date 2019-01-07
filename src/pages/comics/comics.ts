import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

import { ComicPage } from '../comic/comic'

@Component({
  selector: 'page-comics',
  templateUrl: 'comics.html',
})

export class ComicsPage {

	character: any;
	comics: any[];

  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,
    public modalCtrl: ModalController) {

  	this.character = this.navParams.get("character");
  	this.comics = this.character.comics.items;

  }

  onComicPage(comic: any) {
    let modal = this.modalCtrl.create(ComicPage, {
      "comic": comic
    });
    modal.present();
  }

}
