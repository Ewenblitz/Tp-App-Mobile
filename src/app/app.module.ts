import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { GeolocPageModule } from '../pages/geoloc/geoloc.module';
import { CameraPageModule } from '../pages/camera/camera.module';
import { FxdiversPageModule } from '../pages/fxdivers/fxdivers.module';
import { GyroPageModule } from '../pages/gyro/gyro.module';
import { QrPageModule } from '../pages/qr/qr.module';
import { NgxQRCodeModule } from 'ngx-qrcode2';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Vibration } from '@ionic-native/vibration';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { Shake } from '@ionic-native/shake';
import { Gyroscope, GyroscopeOrientation, GyroscopeOptions } from '@ionic-native/gyroscope';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import {
 GoogleMaps,
 GoogleMap,
 GoogleMapsEvent,
 GoogleMapOptions,
 CameraPosition,
 MarkerOptions,
 Marker
} from '@ionic-native/google-maps';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage
  ],
  imports: [
    BrowserModule,
    GeolocPageModule,
    CameraPageModule,
    FxdiversPageModule,
    GyroPageModule,
    QrPageModule,
    NgxQRCodeModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    Camera,
    Vibration,
    TextToSpeech,
    Shake,
    Gyroscope,
    GoogleMaps,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
