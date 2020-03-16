import { Component, NgZone, ElementRef, OnInit, ViewChild } from '@angular/core';

import { NavController, PopoverController, Platform, ModalController } from "ionic-angular";
import { FormControl } from "@angular/forms";
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';
import { NotificationsPage } from '../notifications/notifications';
import { first } from 'rxjs/operators';
import { AutocompletePage } from '../AutocompletePage/AutocompletePage';
import { ReservationProvider } from '../../providers/Reservation/reservation';
import { ParkingProvider } from '../../providers/park/park';
import { ParkingModel } from '../../models/ParkingModel';
import * as $ from "jquery";
import { ReservationPage } from '../reservation/reservation';
//install
//https://stackoverflow.com/questions/36064697/how-to-install-typescript-typings-for-google-maps

//use
//https://stackoverflow.com/questions/48729781/adding-marker-to-google-map-in-ionic-application

/* let map: any;
let infowindow: any;
let options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
}; */
declare var google: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage implements OnInit {
  ngOnInit(): void {
    this.initMap();
  }
  @ViewChild('map') mapElement: ElementRef;
  map: any;

  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;

  start = { lat: 35.8284891, lng: 10.6365484 };
  end: any = '';

  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;

  constructor(public popoverCtrl: PopoverController, public navCtrl: NavController,
    public platform: Platform,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private ModalCtrl: ModalController,
    public reservationService: ReservationProvider,
    private parkingService : ParkingProvider) {
    this.zoom = 4;
    this.latitude = this.start.lat;//35.8284891,10.6365484
    this.longitude = this.start.lng;
    this.address = {
      place: ''
    };
    //create search FormControl
    this.searchControl = new FormControl();

    //set current position
    this.setCurrentPosition();

    let getParkings = parkingService.getAll();
    getParkings.subscribe(Response => {this.Parkings = Response;
    this.Parkings.forEach(element => {
      this.addMarker(element);
    });
    
    });
  }

  Parkings: Array<ParkingModel> = new Array<ParkingModel>();

  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }

  ionViewDidLoad() {
    this.initMap();
    //this.initMap();
  }

  initMap() {
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 7,
      center: { lat: 35.8284891, lng: 10.6365484 }
    });

    this.directionsDisplay.setMap(this.map);
    // this.calculateAndDisplayRoute();
  }

  googleResponse: any = {};
  calculateAndDisplayRoute(direction = null) {
    let direct = direction ? direction : this.end;
    this.directionsService.route({
      // start = 'joplin, mo';
      // end = 'st louis, mo';
      origin: this.start,//this.start,
      destination: direct,//{ lat: 34.744018, lng: 10.769260 }, // 'st louis, mo',//this.end,34.744018, 10.769260
      travelMode: 'DRIVING'
    }, (response, status) => {
      if (status === 'OK') {
        let firstLeg = response.routes[0].legs[0];

        if (firstLeg) {
          this.googleResponse.depart = firstLeg.start_address;
          this.googleResponse.arrive = firstLeg.end_address;
          this.googleResponse.distance = firstLeg.distance.text;
          this.googleResponse.temps = firstLeg.duration.text;
        }

        this.directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });

  }

  address;

  showAddressModal() {
    let modal = this.ModalCtrl.create(AutocompletePage);
    let me = this;
    modal.onDidDismiss(data => {
      this.address.place = data;
    });
    modal.present();
  }

  detail(elt) {
    this.end = elt.description;
    // console.log(elt.description);
    this.calculateAndDisplayRoute();
  }

  addMarker(parking : ParkingModel){

    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: { lat: Number(parking.Laltitude_p), lng: Number(parking.Longitude_p) }
    });
    
    let content = `<h4>Information!</h4> ${parking.Nom_p}, ${parking.Ville_p} <hr/>
    <a class="btn btn-defaut" id="it-parking-${parking.id}" href="#" >Iténéraires</a>
    <button class="btn btn-defaut" id="parking-${parking.id}" >Réserver</button>
    `;
    var component = this; 
    this.addInfoWindow(marker, content, parking, component);
     
  }
 
  codeLatLng(lat, lng) {
    var latlng = new google.maps.LatLng(lat, lng);
    let geocoder = new google.maps.Geocoder;

    geocoder.geocode({
      'latLng': latlng
    }, (results, status) => {
      if (status === google.maps.GeocoderStatus.OK) {
        if (results[1]) {
          this.end = results[1].formatted_address;
          this.calculateAndDisplayRoute(latlng)
        } else {
          alert('No results found');
        }
      } else {
        alert('Geocoder failed due to: ' + status);
      }
    });
  }


  addInfoWindow(marker, content, parking, component){

    let infoWindow = new google.maps.InfoWindow({
      content: content
    });
 
    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
      $('#it-parking-'+parking.id).click(() => {
        component.reservationService.Reservation.Id_park = parking.id;
        component.reservationService.parking = parking;
        component.codeLatLng( Number(parking.Laltitude_p), Number(parking.Longitude_p));
      });

      $('#parking-'+parking.id).click(() => {
        component.reservationService.Reservation.Id_park = parking.id;
        component.reservationService.parking = parking;
        component.navCtrl.push(ReservationPage);
      });
    });
  }
}