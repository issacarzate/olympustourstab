import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  slides:any[] = [
    {
      title: "Xel-Ha",
      subtitle: "All inclusive",
      image: "https://www.olympus-tours.com/images/things-to-do-in-riviera-maya.jpg",
    },
    {
      title: "Xoximilco",
      subtitle: "Full day",
      image: "https://www.olympus-tours.com/images/chichen-itza-day.jpg",
    },
    {
      title: "Tulum",
      subtitle: "Ida y vuelta",
      image: "assets/img/ica-slidebox-img-1.png",
    }
  ];

  trips:any[] = [
    {
      image: "https://www.olympus-tours.com/images/things-to-do-in-riviera-maya.jpg",
      place: "Punta Cana",
      tour: "Buggy Tour"
    },
    {
      image: "https://www.olympus-tours.com/images/things-to-do-in-riviera-maya.jpg",
      place: "Cancun",
      tour: "Xoximilco"
    },
    {
      image: "https://www.olympus-tours.com/images/things-to-do-in-riviera-maya.jpg",
      place: "Los Cabos",
      tour: "Yatch Trip"
    },
    {
      image: "https://www.olympus-tours.com/images/things-to-do-in-riviera-maya.jpg",
      place: "Punta Cana",
      tour: "Buggy Tour"
    },
    {
      image: "https://www.olympus-tours.com/images/things-to-do-in-riviera-maya.jpg",
      place: "Cancun",
      tour: "Xoximilco"
    },
    {
      image: "https://www.olympus-tours.com/images/things-to-do-in-riviera-maya.jpg",
      place: "Los Cabos",
      tour: "Yatch Trip"
    },
    {
      image: "https://www.olympus-tours.com/images/things-to-do-in-riviera-maya.jpg",
      place: "Costa Rica",
      tour: "Jugnle Tour"
    }
  ];

  constructor(public navCtrl: NavController) {

  }

}
