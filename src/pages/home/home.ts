import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {InAppBrowser, InAppBrowserOptions} from "@ionic-native/in-app-browser";
import {ContactoPage} from "../contacto/contacto";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  galleryType = 'regular';

  bgColors:any = [
    "bgColor_1", "bgColor_2", "bgcolor_3", "bgColor_4", "bgColor_5", "bgColor_6", "bgColor_7", "bgColor_8", "bgColor_9"
  ];
  currentPage = 0;


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
      image: "https://lh3.googleusercontent.com/proxy/jD34r9DN39g_LoPKRgeM6JQQpZPhpUZGutoXq8ey-XwQRoaimj32yRZ1yhoz7DgKhepRDH-KQxXMqo6_O1299Fb1KvPSz3ffW7jog_m0h_VdRQHsSjaTCqlgMkLQVdwjALj23ddN5S-tNgaLFHRW1Ly-_x0=w539-h360-k-no",
    }
  ];

  trips:any[] = [
    {
      image: "https://www.olympus-tours.com/images/things-to-do-in-riviera-maya.jpg",
      place: "Punta Cana",
      tour: "Buggy Tour",
      url: "https://cosplay.kotaku.com/canadian-cosplay-show-knows-how-to-party-1827002056"
    },
    {
      image: "https://www.costarica.com/contentAsset/image/f989844e-960c-4cca-b9c2-87638dc2d18c/fileAsset/filter/Resize,Jpeg/resize_w/1000/Jpeg_q/.8",
      place: "Cancun",
      tour: "Xoximilco",
      url: "https://kotaku.com/hello-yes-this-appears-out-of-the-ordinary-1826971383"
    },
    {
      image: "https://www.olympus-tours.com/images/things-to-do-in-riviera-maya.jpg",
      place: "Los Cabos",
      tour: "Yatch Trip",
      url: "https://kotaku.com/fortnites-shopping-cart-woes-a-timeline-1827004044"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ87UgA6yOd7JHPW5-4oLPo8_0mBqxXHud6CaK_WC8X0qVvD8d",
      place: "Punta Cana",
      tour: "Buggy Tour",
      url: "https://kotaku.com/nba-rookie-also-video-game-marketing-rookie-1827003714"
    },
    {
      image: "https://www.turimexico.com/wp-content/uploads/2015/06/Canc%C3%BAn-M%C3%A9xico.jpg",
      place: "Cancun",
      tour: "Xoximilco",
      url: "https://thebests.kotaku.com/the-best-sports-video-game-1796797217"
    },
    {
      image: "https://www.olympus-tours.com/images/things-to-do-in-riviera-maya.jpg",
      place: "Los Cabos",
      tour: "Yatch Trip",
      url: "https://google.com"
    },
    {
      image: "https://lh3.googleusercontent.com/proxy/jD34r9DN39g_LoPKRgeM6JQQpZPhpUZGutoXq8ey-XwQRoaimj32yRZ1yhoz7DgKhepRDH-KQxXMqo6_O1299Fb1KvPSz3ffW7jog_m0h_VdRQHsSjaTCqlgMkLQVdwjALj23ddN5S-tNgaLFHRW1Ly-_x0=w539-h360-k-no",
      place: "Costa Rica",
      tour: "Jungle Tour",
      url: "https://google.com"
    }
  ];

  constructor(public navCtrl: NavController, private iab: InAppBrowser) {

  }
  contactar(){
    this.navCtrl.push(ContactoPage);
  }

  abrirEnlace(enlace:string){
    //Opciones para abrir el link
    const options: InAppBrowserOptions = {
      zoom: 'no'
    };

    //Abrir la url
    this.iab.create(enlace, '_blank', options);
  }
}
