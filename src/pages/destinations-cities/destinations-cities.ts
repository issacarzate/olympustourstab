import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DestinationsProvider} from "../../providers/destinations/destinations";

/**
 * Generated class for the DestinationsCitiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-destinations-cities',
  templateUrl: 'destinations-cities.html',
})
export class DestinationsCitiesPage {
  cities:string[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private _destinationsProvider:DestinationsProvider) {
    this.cities = this._destinationsProvider.getCountry(0).cities;
  }

  ionViewDidLoad() {
    console.log(this.cities)
  }

}
