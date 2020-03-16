import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VoitureModel } from '../../models/VoitureModel';
import { DataProvider } from '../data/data';

/*
  Generated class for the VoitureProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class VoitureProvider  extends DataProvider<VoitureModel> {
  Voiture : VoitureModel;
  constructor(private Http: HttpClient) {
    super('voitures', Http);
  }
}