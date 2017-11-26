import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GyroPage } from './gyro';

import { Gyroscope, GyroscopeOrientation, GyroscopeOptions } from '@ionic-native/gyroscope';

@NgModule({
  declarations: [
    GyroPage,
  ],
  imports: [
    IonicPageModule.forChild(GyroPage),
  ],
})
export class GyroPageModule {}
