import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import {AirportMapPage} from "../airport-map/airport-map";

//Native
import {PhotoViewer} from "@ionic-native/photo-viewer";
import {DestinationsProvider} from "../../providers/destinations/destinations";
import { File } from '@ionic-native/file';


/**
 * Generated class for the ItineraryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-itinerary',
  templateUrl: 'itinerary.html',
})
export class ItineraryPage {
  mapSrc:string = '';
  path:string='www/assets/maps/';

  cordova: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private _userBookingService:DestinationsProvider,
              private photoViewer: PhotoViewer,
              private file: File) {
  }

  ionViewDidLoad() {
    //console.log('Esta eeeees ' + this._userBookingService.userBooking.country['description'] + 'mas.. ' + this._userBookingService.userBooking.fullname);
  }

 /* verMapa(){
    this.navCtrl.push(AirportMapPage);
  }  this.path, this._userBookingService.userBooking.country['description']  */



  verMapa(){
    switch(this._userBookingService.userBooking.country['description']) {
      case 'Cancun': {
        this.mapSrc = this.path + 'cancun_map.jpg';
        console.log(this.cordova.file.applicationDirectory + this.mapSrc);
        this.photoViewer.show(this.cordova.file.applicationDirectory + this.mapSrc);
        console.log(this.mapSrc);
        break;
      }
      case 'Puerto Vallarta': {
        this.mapSrc = this.path + 'puertovallara_map.jpg';
        this.photoViewer.show(this.mapSrc);
        console.log(this.mapSrc);
        break;
      }
      case 'Los Cabos': {
        this.mapSrc = this.path + 'loscabos_map.jpg';
        this.photoViewer.show(this.mapSrc);
        console.log(this.mapSrc);
        break;
      }
      case 'Ciudad de Mexico': {
        this.mapSrc = this.path + 'mexicocity_map.jpg';
        this.photoViewer.show(this.mapSrc);
        console.log(this.mapSrc);
        break;
      }
      case 'Cozumel': {
        this.mapSrc = this.path + 'cozumel_map.jpg';
        this.photoViewer.show(this.mapSrc);
        console.log(this.mapSrc);
        break;
      }
      case 'Liberia, San Jose': {
        this.mapSrc = this.path + 'sanjoseliberia_map.jpg';
        this.photoViewer.show(this.mapSrc);
        console.log(this.mapSrc);
        break;
      }
      case 'Punta Cana': {
        this.mapSrc = this.path + 'puntacana_map.jpg';
        this.photoViewer.show(this.mapSrc);
        console.log(this.mapSrc);
        break;
      }
      default: {
        break;
      }
    }
  }

}
