import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataProvider } from '../data/data';
import { ReservationModel } from '../../models/ReservationModel';
import { Geolocation } from '@ionic-native/geolocation';
import { Observable } from 'rxjs/Observable';
import { ParkingModel } from '../../models/ParkingModel';


/*
  Generated class for the ContactProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class ReservationProvider extends DataProvider<ReservationModel> {
  public Reservation: ReservationModel = new ReservationModel();
  public parking: ParkingModel = new ParkingModel();
  constructor(private Http: HttpClient) {
    super('reservations', Http);
    this.LoadCurrentPosition();
  }

  currentPostionLat;
  currentPostionLong;
  currentPostion: string = "Sousse, Tunisia" ;
  LoadCurrentPosition() : Observable<any>{
    /**
     this.geolocation.getCurrentPosition().then((resp) => {
      this.currentPostionLat = resp.coords.latitude
      this.currentPostionLong = resp.coords.longitude
    })
     */
    this.currentPostionLat = 35.8284413;
    this.currentPostionLong = 10.6389083;
    return null;
  }
}
