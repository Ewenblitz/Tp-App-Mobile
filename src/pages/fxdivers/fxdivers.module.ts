import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FxdiversPage } from './fxdivers';

import { ToastController } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';
import { TextToSpeech } from '@ionic-native/text-to-speech';

@NgModule({
  declarations: [
    FxdiversPage,
  ],
  imports: [
    IonicPageModule.forChild(FxdiversPage),
  ],
})
export class FxdiversPageModule {}
