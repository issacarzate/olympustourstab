import {Component, ViewChild} from '@angular/core';
import {NavController, ToastController} from 'ionic-angular';
import {ContactoPage} from "../contacto/contacto";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

import { AgeValidator } from  '../../validators/age';
import { UsernameValidator } from  '../../validators/username';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  @ViewChild('signupSlider') signupSlider: any;

  slideOneForm: FormGroup;

  submitAttempt: boolean = false;

  constructor(public navCtrl: NavController, public formBuilder: FormBuilder, private toastCtrl: ToastController) {
    this.slideOneForm = formBuilder.group({
      fullname: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      country: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
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
      this.signupSlider.slideTo(0);
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
      this.navCtrl.push(ContactoPage);
    }
  }
}
