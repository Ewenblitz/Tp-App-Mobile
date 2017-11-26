import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ToastController } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { Shake } from '@ionic-native/shake';

/**
 * Generated class for the FxdiversPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fxdivers',
  templateUrl: 'fxdivers.html',
})

export class FxdiversPage {

  text: TextData;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCrtl: ToastController, private vibration: Vibration, private tts: TextToSpeech, private shake: Shake) {
    this.text = new TextData("");

    this.shake.startWatch(40).subscribe(data => {
      alert('Shaking Device Detected !');
      console.log('Shake');
    });
  }

// Fonction pour les différents Toast
  toastBot() {
    let toast = this.toastCrtl.create({
      message: 'Un Toast apparaissant en bas',
      duration: 3000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Toast bas disparu');
    });
    toast.present();
  }

  toastTop() {
    let toast = this.toastCrtl.create({
      message: 'Un Toast apparaissant en haut',
      duration: 3000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Toast haut disparu');
    });
    toast.present();
  }

  toastConfirm() {
    let toast = this.toastCrtl.create({
      message: 'Il s\'emblerait que le toast fonctionne bien',
      showCloseButton: true,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Toast w/ confimration disparu');
    });
    toast.present();
  }

// Fonctions pour les différentes types de vibrations
  vibeOnce() {
    this.vibration.vibrate(2000);
  }

  vibePattern() {
    this.vibration.vibrate([500, 250, 500, 250, 500]);
  }

//Fonction pour le Text To Speech
  textTS() {
    this.tts.speak(this.text.inputText)
    .then(() => console.log('Succès de la lecture'))
    .catch((reason: any) => console.log(reason));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FxdiversPage');
  }

}

class TextData {
  constructor(public inputText: string) {

  }
}
