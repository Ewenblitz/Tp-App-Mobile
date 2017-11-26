import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

import {
GoogleMaps,
 GoogleMap,
 GoogleMapsEvent,
 GoogleMapOptions,
 CameraPosition,
 MarkerOptions,
 Marker
} from '@ionic-native/google-maps';

/**
 * Generated class for the GeolocPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-geoloc',
  templateUrl: 'geoloc.html',
})

export class GeolocPage {

  map: GoogleMap;

  longitude: number;
  latitude: number;

  aGeo: Array<GeolocWatch> = new Array<GeolocWatch>();

  constructor(public navCtrl: NavController, public navParams: NavParams, private geolocation: Geolocation, private googleMaps: GoogleMaps) {
    this.geolocation.getCurrentPosition().then((resp) => {
    this.latitude=resp.coords.latitude;
    this.longitude=resp.coords.longitude;
}).catch((error) => {
  console.log('Error getting location', error);
});
/*
let watch = this.geolocation.watchPosition();
watch.subscribe((data) => {
  this.aGeo.push(new GeolocWatch(data.coords.longitude, data.coords.latitude));
});
  }

  loadMap() {
    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: this.latitude,
          lng: this.longitude
        },
        zoom: 18,
        tilt: 30
      }
    };

    this.map = this.googleMaps.create('map_canvas', mapOptions);

    this.map.one(GoogleMapsEvent.MAP_READY)
    .then(() => {
      console.log('La carte est prête !');

      this.map.addMarker({
        title: 'Ionic',
        icon: 'blue',
        animation: 'DROP',
        position: {
          lat: this.latitude,
          lng: this.longitude
        }
      })
      .then(marker => {
        marker.on(GoogleMapsEvent.MARKER_CLICK)
        .subscribe(() => {
          alert('Click');
        });
      });
    }); */
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GeolocPage');
  }
}

class GeolocWatch {
  constructor (public aLongitute: number, public aLatitude: number){

  }
}
