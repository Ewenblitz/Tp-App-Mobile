import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Gyroscope, GyroscopeOrientation, GyroscopeOptions } from '@ionic-native/gyroscope';

/**
 * Generated class for the GyroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gyro',
  templateUrl: 'gyro.html',
})

export class GyroPage {

  orientationX: number;
  orientationY: number;
  orientationZ: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private gyroscope: Gyroscope) {
    let options: GyroscopeOptions = {
      frequency: 350
    }

    this.gyroscope.watch(options)
    .subscribe((orientation: GyroscopeOrientation) => {
      this.orientationX=orientation.x;
      this.orientationY=orientation.y;
      this.orientationZ=orientation.z;
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GyroPage');
  }

}
