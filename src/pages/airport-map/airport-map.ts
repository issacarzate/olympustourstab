import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DestinationsProvider} from "../../providers/destinations/destinations";

//Native
import {PhotoViewer} from "@ionic-native/photo-viewer";

/**
 * Generated class for the AirportMapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-airport-map',
  templateUrl: 'airport-map.html',
})
export class AirportMapPage {

  cityMap:string = this.navParams.get('cityName');
  mapSrc:string = '';
  path:string='../assets/maps/';

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private _userBookingService:DestinationsProvider,
              private photoViewer: PhotoViewer) {

    console.log( this._userBookingService.userBooking.country['description']);

  }

  //../assets/maps/cancun_map.jpg

  ionViewDidLoad(){
    this.mostrarMapa(this.path, this._userBookingService.userBooking.country['description']);
  }

  mostrarMapa(path:string, cityName:string){
    switch(cityName) {
      case 'Cancun': {
        this.mapSrc = path + 'cancun_map.jpg';
        this.photoViewer.show(this.mapSrc);
        console.log(this.mapSrc);
        break;
      }
      case 'Puerto Vallarta': {
        this.mapSrc = path + 'puertovallara_map.jpg';
        this.photoViewer.show(this.mapSrc, 'My image title', {share: true});
        console.log(this.mapSrc);
        break;
      }
      case 'Los Cabos': {
        this.mapSrc = path + 'loscabos_map.jpg';
        this.photoViewer.show(this.mapSrc, 'My image title', {share: true});
        console.log(this.mapSrc);
        break;
      }
      case 'Ciudad de Mexico': {
        this.mapSrc = path + 'mexicocity_map.jpg';
        this.photoViewer.show(this.mapSrc, 'My image title', {share: true});
        console.log(this.mapSrc);
        break;
      }
      case 'Cozumel': {
        this.mapSrc = path + 'cozumel_map.jpg';
        this.photoViewer.show(this.mapSrc, 'My image title', {share: true});
        console.log(this.mapSrc);
        break;
      }
      case 'Liberia, San Jose': {
        this.mapSrc = path + 'sanjoseliberia_map.jpg';
        this.photoViewer.show(this.mapSrc, 'My image title', {share: true});
        console.log(this.mapSrc);
        break;
      }
      case 'Punta Cana': {
        this.mapSrc = path + 'puntacana_map.jpg';
        this.photoViewer.show(this.mapSrc, 'My image title', {share: true});
        console.log(this.mapSrc);
        break;
      }
      default: {
        break;
      }
    }
  }

}
