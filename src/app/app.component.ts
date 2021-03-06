import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { GeolocPage } from '../pages/geoloc/geoloc';
import { CameraPage } from '../pages/camera/camera';
import { FxdiversPage } from '../pages/fxdivers/fxdivers';
import { GyroPage } from '../pages/gyro/gyro';
import { QrPage } from '../pages/qr/qr';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Accueil', component: HomePage },
      { title: 'Liste', component: ListPage },
      { title: 'Geolocalisation', component: GeolocPage },
      { title: 'Camera', component: CameraPage },
      { title: 'Fonctions Diverses', component: FxdiversPage },
      { title: 'Gyroscope', component: GyroPage },
      { title: 'Qr Scanner', component: QrPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
