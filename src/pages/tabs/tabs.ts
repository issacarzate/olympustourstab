import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { IntroPage } from '../intro/intro';
import { HomePage } from '../home/home';

import { Storage } from '@ionic/storage';
import {DestinationsPage} from "../destinations/destinations";


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  intinerario = AboutPage ;
  tours = HomePage;
  promociones = ContactPage;
  destinos = DestinationsPage;

  color: string = "primary";

  constructor(public navCtrl: NavController, public storage: Storage) {

  }
  ionViewDidLoad() {
  this.storage.get('intro-done').then(done => {
    if (!done) {
      this.storage.set('intro-done', true);
      this.navCtrl.setRoot(IntroPage);
      }
   });
  }
  selectInformation(){
    this.color = "secondary";
  }

  selectContact(){
    this.color = "danger";
  }
}
