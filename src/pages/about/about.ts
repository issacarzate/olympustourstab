import {Component, ViewChild} from '@angular/core';
import {NavController, ToastController} from 'ionic-angular';
import {ContactoPage} from "../contacto/contacto";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

import { AgeValidator } from  '../../validators/age';
import {WheelSelector} from "@ionic-native/wheel-selector";
import {ItineraryPage} from "../itinerary/itinerary";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  @ViewChild('signupSlider') signupSlider: any;

  slideOneForm: FormGroup;

  submitAttempt: boolean = false;

  pickUpPlaces = {
    places: [
      {description: 'Cancun'},
      {description: 'Puerto Vallarta'},
      {description: 'Los Cabos'},
      {description: 'Mexico City'},
      {description: 'Cozumel'},
      {description: 'Liberia, San Jose'},
      {description: 'Punta Cana'}
    ]
  };

  constructor(public navCtrl: NavController, public formBuilder: FormBuilder,
              private toastCtrl: ToastController,
              private selector:WheelSelector) {

    this.slideOneForm = formBuilder.group({
      fullname: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      country: ['', Validators.required],
      bookingnumber: ['', AgeValidator.isValid]
    });

  }

  next(){
    this.signupSlider.slideNext();
  }

  prev(){
    this.signupSlider.slidePrev();
  }

  save(){
    this.submitAttempt = true;

    if(!this.slideOneForm.valid){
     // this.signupSlider.slideTo(0);
      let toast = this.toastCtrl.create({
        message: 'Complete form data',
        duration: 3000,
        position: 'top',
        showCloseButton: true
      });

      toast.onDidDismiss(() => {
        console.log('Dismissed toast');
      });

      toast.present();
    }
    else {
      console.log("success!");
      console.log(this.slideOneForm.value);
      this.navCtrl.push(ItineraryPage);
    }
  }

  abrirWheelLugares(){
    this.selector.show({
      title: 'Select Pickup Place',
      positiveButtonText: 'Choose',
      negativeButtonText: 'Cancel',
      items:[
        this.pickUpPlaces.places
      ],
      defaultItems: [
        {index:0, value:this.pickUpPlaces.places[1].description}
      ]
    }).then(result => {
      let msg = `Selected ${result[0].description}`;
      this.slideOneForm.controls['country'].setValue(result[0]);
      let toast = this.toastCtrl.create({
        message: msg,
        duration: 4000
      });
      toast.present();
    });
  }
}
