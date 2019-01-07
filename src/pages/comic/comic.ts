import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

import { Http } from '@angular/http'

import { DataService } from '../../services/data'

@Component({
  selector: 'page-comic',
  templateUrl: 'comic.html',
})

export class ComicPage {

  address = "";

  comic: any;
  resourceURI: "";
  comicData: any[];
  comicDetails: any;
  comicCoverURL: URL;

  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,
  	public viewCtrl: ViewController,
    public http: Http,
    public dataService: DataService) {

    this.comic = this.navParams.get("comic");
    this.resourceURI = this.comic.resourceURI;

    this.getAddress();
    this.getData();
  }

  onCloseModal() {
  	this.viewCtrl.dismiss();
  }

  getAddress() {

    this.address = this.dataService.getAddress("comic", this.resourceURI);

  }

  getData() {

    this.http.get(this.address).subscribe((data) => {
      console.log(data.json());
      this.comicData = data.json().data.results;
      this.comicDetails = this.comicData[0];
      this.comicCoverURL = new URL(this.comicDetails.thumbnail.path + "." + this.comicDetails.thumbnail.extension)
    }, (error) => {
      console.log(error);
    })

  }
}
