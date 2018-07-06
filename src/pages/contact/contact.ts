import { Component } from '@angular/core';
import {ActionSheetController, NavController, NavParams} from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {UsuarioProvider} from "../../providers/usuario/usuario";
import {PromocionesPage} from "../promociones/promociones";
import {IntroPage} from "../intro/intro";

import { Platform } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';
//import {CallNumber} from "@ionic-native/call-number";


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private afAuth: AngularFireAuth,
              public storage: Storage,
              //private callNumber: CallNumber,
              public actionSheetCtrl: ActionSheetController,
              public usuarioProv: UsuarioProvider, private fb: Facebook, private platform: Platform) {

  }

  ionViewDidLoad(){
  this.storage.get('intro-done').then(done => {
    if (!done) {
      this.storage.set('intro-done', true);
      this.navCtrl.setRoot(IntroPage);
    }
  });
}

signInWithFacebook() {
  if (this.platform.is('cordova')) {
    this.fb.login(['email', 'public_profile']).then(res => {
      const facebookCredential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
      firebase.auth().signInWithCredential(facebookCredential).then(
        user => {
          console.log(user);
          this.usuarioProv.cargarUsuario(
            user.displayName,
            user.email,
            user.photoURL,
            user.uid,
            'facebook'
          );
          this.navCtrl.push(PromocionesPage);
        }).catch(e => console.log("Error con el login" + JSON.stringify(e)));
    });
  }else{
    this.afAuth.auth
      .signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then(res => {
        console.log(res);
        let user = res.user;
        this.usuarioProv.cargarUsuario(
          user.displayName,
          user.email,
          user.photoURL,
          user.uid,
          'facebook'
        );

        this.navCtrl.push(PromocionesPage);

      });
  }

}

signOut() {
  this.afAuth.auth.signOut();
}

callWhats(){
  let actionSheet = this.actionSheetCtrl.create({
    title: 'Contáctanos',
    buttons: [
      {
        text: 'Whatsapp',
        handler: () => {
          console.log('Destructive clicked');
        }
      },
      {
        text: 'Llamar',
        handler: () => {
          /*this.callNumber.callNumber("+521557901692", true)
            .then(res => console.log('Launched dialer!', res))
            .catch(err => console.log('Error launching dialer', err));*/
          console.log('Archive clicked');
        }
      },
      {
        text: 'Cancelar',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
    ]
  });

  actionSheet.present();
}

}
