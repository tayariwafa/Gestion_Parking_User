import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Keyboard} from '@ionic-native/keyboard';
import { GooglePlacesAutocompleteComponentModule } from 'ionic2-google-places-autocomplete';

import {ActivityService} from "../services/activity-service";
import {TripService} from "../services/trip-service";
import {WeatherProvider} from "../services/weather";

import {MyApp} from "./app.component";

import {CheckoutTripPage} from "../pages/checkout-trip/checkout-trip";
import {HomePage} from "../pages/home/home";
import {LoginPage} from "../pages/login/login";
import {NotificationsPage} from "../pages/notifications/notifications";
import {RegisterPage} from "../pages/register/register";
import {SearchLocationPage} from "../pages/search-location/search-location";
import {TripDetailPage} from "../pages/trip-detail/trip-detail";
import {TripsPage} from "../pages/trips/trips";
import { ProfilePage} from "../pages/profile/profile"
import { HistoriquePage } from '../pages/historique/historique';
import { FavorisPage } from '../pages/favoris/favoris';
import { SoldePage } from '../pages/solde/solde';
import { ContactPage } from '../pages/contact/contact';
import { AgmCoreModule } from '@agm/core';
import { Geolocation } from '@ionic-native/geolocation';
import { RestProvider } from '../providers/rest/rest';
import { PasswordPage } from '../pages/password/password';
import { DataProvider } from '../providers/data/data';
import { ContactProvider } from '../providers/contact/contact';
import { MyParcUserProvider } from '../providers/my-parc-user/my-parc-user';
import { CallNumber } from '@ionic-native/call-number';
import { ReservationPage } from '../pages/reservation/reservation';
import { CalendarModule } from "ion2-calendar";
import { DetailReserPage } from "../pages/detail-reser/detail-reser";
import { ReservationProvider } from '../providers/Reservation/reservation';
import { FavorisProvider } from '../providers/favoris/favoris';
import { PaiementPage } from '../pages/paiement/paiement';
import { VoitureProvider } from '../providers/voiture/voiture';
import { ParkingProvider } from '../providers/park/park';
import { AutocompletePage } from '../pages/AutocompletePage/AutocompletePage';





// import services
// end import services 
// end import services

// import pages
// end import pages

@NgModule({
  declarations: [
    MyApp,
    CheckoutTripPage,
    HomePage,
    AutocompletePage,
    LoginPage,
    RegisterPage,
    SearchLocationPage,
    TripDetailPage,
    TripsPage,
    ProfilePage,
    HistoriquePage,
    FavorisPage,
    SoldePage,
    NotificationsPage,
    ContactPage,
    PasswordPage,
    ReservationPage,
    DetailReserPage,
    PaiementPage,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    GooglePlacesAutocompleteComponentModule,
    IonicModule.forRoot(MyApp, {
      scrollPadding: false,
      scrollAssist: true,
      autoFocusAssist: false
    }),
    CalendarModule,
     AgmCoreModule.forRoot({
      apiKey: "AIzaSyCnahpwY4LRTYlzEHnER3B_Y8NR1HzmrVE",
      libraries: ["places"]
  }), 
    IonicStorageModule.forRoot({
      name: '__ionic3_start_theme',
        driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
    
  ],
  bootstrap: [IonicApp],

  entryComponents: [
    MyApp,
    CheckoutTripPage,
    HomePage,
    AutocompletePage,
    LoginPage,
    RegisterPage,
    SearchLocationPage,
    TripDetailPage,
    TripsPage,
    ProfilePage,
    HistoriquePage,
    FavorisPage,
    SoldePage,
    NotificationsPage,
    ContactPage,
    PasswordPage,
    ReservationPage,
    DetailReserPage,
    PaiementPage,


    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Keyboard,
    ActivityService,
    TripService,
    WeatherProvider,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    Geolocation,
    RestProvider,
    DataProvider,
    ContactProvider,
    MyParcUserProvider, 
    CallNumber,
    ReservationProvider,
    FavorisProvider,
    VoitureProvider,
    ParkingProvider
  ]
})

export class AppModule {
}
