import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { IntroPage } from '../pages/intro/intro';
import { PromocionesPage } from '../pages/promociones/promociones';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UsuarioProvider } from '../providers/usuario/usuario';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

//Cordova
import { Facebook } from '@ionic-native/facebook';
import { CallNumber } from "@ionic-native/call-number";
import {InAppBrowser} from "@ionic-native/in-app-browser";
import {ContactoPage} from "../pages/contacto/contacto";
import {SocialSharing} from "@ionic-native/social-sharing";

export const firebaseConfig = {
  apiKey: "AIzaSyA2QCVwtr298TPcop6wK0gBShMylWnvWIc",
  authDomain: "sendi-9f11f.firebaseapp.com",
  databaseURL: "https://sendi-9f11f.firebaseio.com",
  projectId: "sendi-9f11f",
  storageBucket: "sendi-9f11f.appspot.com",
  messagingSenderId: "238310976567"
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PromocionesPage,
    IntroPage,
    ContactoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PromocionesPage,
    IntroPage,
    ContactoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    Facebook,
    CallNumber,
    IonicStorageModule,
    UsuarioProvider,
    InAppBrowser,
    SocialSharing,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
