import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

import { Http } from '@angular/http'

import { CharacterPage } from '../character/character'

import { Character } from '../../data/character.interface'
import { DataService } from '../../services/data'

@Component({
  selector: 'page-characters',
  templateUrl: 'characters.html',
})

export class CharactersPage {

  address: string;

	characters: Character[];
  //characterNames = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public http: Http,
    public modalCtrl: ModalController,
    public dataService: DataService) {

    this.getAddress()
  	this.getData();
  }

  getAddress() {
    this.address = this.dataService.getAddress("characters", "none");
  }

  getData() {

  	this.http.get(this.address).subscribe((data) => {
  		console.log(data.json());
  		this.characters = data.json().data.results;
      //this.getCharacterNames();
  	}, (error) => {
  		console.log(error);
  	})

  }

  onNextPage(next: boolean) {

    this.dataService.onNextPage(next);
    this.getAddress();
    this.getData();

  }
/*
  getNames(ev) {

    // reset items back to all of the items
    this.getData();
    // set val to the value of the searchbar
    let val = ev.target.value;
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.characterNames = this.characterNames.filter((name) => {
        return (name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  // helper
  getCharacterNames() {
    for (var j=0; j<this.characters.length && this.characterNames.indexOf(this.characters[j].name) == -1; j++) {
      this.characterNames.push(this.characters[j].name);
    }
  }
*/
  onCharacterPage(character: Character) {
    let modal = this.modalCtrl.create(CharacterPage, {
      "character": character
    });
    modal.present();
  } 

}
