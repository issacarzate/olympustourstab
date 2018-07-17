import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
/**
 * Generated class for the GeofencePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google;
let map: any;

@Component({
  selector: 'page-geofence',
  templateUrl: 'geofence.html',
})
export class GeofencePage {
  @ViewChild('map') mapElement: ElementRef;
  constructor(public navCtrl: NavController, public platform: Platform) {

    platform.ready().then(() => {
      this.getPlaces();
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GeofencePage');
  }

  getPlaces() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -6.854359, lng: 107.598455},
      zoom: 17
    });
    let service = new google.maps.places.PlacesService(map);
    service.nearbySearch({
      location: {lat: -6.854359, lng: 107.598455},
      radius: 500,
      type: ['restaurant']
    }, (results,status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
          console.log(results[i]);
        }
      }
    });
  }

}
