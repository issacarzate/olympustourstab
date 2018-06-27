import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DestinationsProvider, Country } from "../../providers/destinations/destinations";
import {DestinationsCitiesPage} from "../destinations-cities/destinations-cities";
import {Observable} from "rxjs/Observable";

/**
 * Generated class for the DestinationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-destinations',
  templateUrl: 'destinations.html',
})
export class DestinationsPage {
  countries: Observable<Country[]>;
  country:Country[] = [
    {
      name:'',
      image:'',
      cities:[]
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, private _destinationsProvider:DestinationsProvider) {
    this.countries = this._destinationsProvider.getDbCities();
  }

  ionViewDidLoad() {
  }

  elegirPais(pais:Country){
    this.country[0].name=pais.name;
    this.country[0].cities=pais.cities;
    this._destinationsProvider.addCountry(this.country[0]);
    this.navCtrl.push(DestinationsCitiesPage);
  }

}
