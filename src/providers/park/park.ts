import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ParkingModel } from '../../models/ParkingModel';
import { DataProvider } from '../data/data';

/*
  Generated class for the ParkProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ParkingProvider extends DataProvider<ParkingModel> {
  Reservation : ParkingModel;
  constructor(private Http: HttpClient) {
    super('parkings', Http);
  }
}
