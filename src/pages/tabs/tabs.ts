import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { IntroPage } from '../intro/intro';
import { HomePage } from '../home/home';

import { Storage } from '@ionic/storage';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

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
