import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';

import {ItinerarioRegistroPage} from "../pages/itinerario-registro/itinerario-registro";
import {PromocionesLoginPage} from "../pages/promociones-login/promociones-login";
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { IntroPage } from '../pages/intro/intro';
import {ContactoPage} from "../pages/contacto/contacto";
import {DestinationsPage} from "../pages/destinations/destinations";
import { PromocionesPage } from '../pages/promociones/promociones';
import {DestinationsCitiesPage} from "../pages/destinations-cities/destinations-cities";
import {DestinationsInfoPage} from "../pages/destinations-info/destinations-info";
import {AirportMapPage} from "../pages/airport-map/airport-map";
import {ItineraryPage} from "../pages/itinerary/itinerary";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UsuarioProvider } from '../providers/usuario/usuario';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

//Cordova
import { Facebook } from '@ionic-native/facebook';
import {InAppBrowser} from "@ionic-native/in-app-browser";
import {SocialSharing} from "@ionic-native/social-sharing";
import {CallNumber} from "@ionic-native/call-number";
import {WheelSelector} from "@ionic-native/wheel-selector";
import {YoutubeVideoPlayer} from "@ionic-native/youtube-video-player";
import { File } from '@ionic-native/file';

//Providers
import { DestinationsProvider } from '../providers/destinations/destinations';
import { HttpClientModule } from "@angular/common/http";
import {PhotoViewer} from "@ionic-native/photo-viewer";
import { GeofenceProvider } from '../providers/geofence/geofence';

export const firebaseConfig = {
  apiKey: "AIzaSyA2QCVwtr298TPcop6wK0gBShMylWnvWIc",
  authDomain: "sendi-9f11f.firebaseapp.com",
  databaseURL: "https://sendi-9f11f.firebaseio.com",
  projectId: "sendi-9f11f",
  storageBucket: "sendi-9f11f.appspot.com",
  messagingSenderId: "238310976567"
};
//firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    MyApp,
    AirportMapPage,
    ItinerarioRegistroPage,
    PromocionesLoginPage,
    HomePage,
    TabsPage,
    PromocionesPage,
    IntroPage,
    ContactoPage,
    DestinationsPage,
    DestinationsCitiesPage,
    DestinationsInfoPage,
    ItineraryPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpClientModule,
    AngularFirestoreModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AirportMapPage,
    ItinerarioRegistroPage,
    PromocionesLoginPage,
    HomePage,
    TabsPage,
    PromocionesPage,
    IntroPage,
    ContactoPage,
    DestinationsPage,
    DestinationsCitiesPage,
    DestinationsInfoPage,
    ItineraryPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    Facebook,
    IonicStorageModule,
    UsuarioProvider,
    InAppBrowser,
    SocialSharing,
    DestinationsProvider,
    CallNumber,
    WheelSelector,
    YoutubeVideoPlayer,
    PhotoViewer,
    File,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GeofenceProvider
  ]
})
export class AppModule {}
