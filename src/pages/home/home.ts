import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  app: AppData;
  clickMessage: String;

  onClickMe() {
    this.clickMessage = "Hello";
  }

  constructor(public navCtrl: NavController) {
    this.app = new AppData("nom", 0.3);
  }
}

class AppData {
  constructor(public nom: string,public version: Number){

  }
}
