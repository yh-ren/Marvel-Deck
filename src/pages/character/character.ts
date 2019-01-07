import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

import { ComicsPage } from '../comics/comics'

import { Character } from '../../data/character.interface'

@Component({
  selector: 'page-character',
  templateUrl: 'character.html',
})

export class CharacterPage {

	character: Character;
  series: any[];
  stories: any[];


  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,
  	public viewCtrl: ViewController) {

  	this.character = this.navParams.get("character");
    this.series = this.character.series.items;
    this.stories = this.character.stories.items;

  }

  onCloseModal() {
  	this.viewCtrl.dismiss();
  }

  onComicsPage() {
    this.navCtrl.push(ComicsPage, {
      character: this.character
    });
  }

}
