//import { HttpClient } from '@angular/common/http';
//public http: HttpClient
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import 'firebase/firestore'
import {Observable} from "rxjs/Observable";

/*
  Generated class for the DestinationsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DestinationsProvider {

  countriesCollection: AngularFirestoreCollection<Country>;
  countries: Observable<Country[]>;

  private country:Country[] = [];
  /*private countries:Country[]=[
    {
    name: 'Mexico',
    image: 'assets/tours/card-amsterdam.png',
    cities:['Cancun', 'Playa del Camren', 'Los Cabos']
    },
    {
      name: 'Costa Rica',
      image: 'assets/tours/card-sf.png',
      cities:['San Jose', 'Monteverde', 'La Fortuna']
    },
    {
      name: 'Panama',
      image: 'assets/tours/card-madison.png',
      cities:['Colon', 'San Blas', 'Panama']
    },
  ];*/

  constructor(private afs:AngularFirestore) {
    //FireDb.settings({ timestampsInSnapshots: true });
    /*
    db.collection('countriesColleciton').add({
      name: 'Suecia',
      image: 'assets/tours/card-amsterdam.png',
      cities:['Cancun', 'Playa del Camren', 'Los Cabos']
    }).then((data)=>{
      console.log(data);
    }).catch((error)=>{
      console.log(error);
    });*/
  }

  getCountry(index:number){
    return this.country[index];
  }
  getDbCities(){
    this.countriesCollection = this.afs.collection('countriesColleciton'); //Referencia
    this.countries = this.countriesCollection.valueChanges(); //Observable de los datos
    return this.countries
  }
  getCountries(){
    return this.countries;
  }
  addCountry(country:Country){
    this.country.push(country);
  }

}


export interface Country{
  cities:string[];
  image:string;
  name:string;
}
