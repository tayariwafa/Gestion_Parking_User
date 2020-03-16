import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataProvider } from '../data/data';
import { AppelModel } from '../../models/AppelModel';

/*
  Generated class for the ContactProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class ContactProvider extends DataProvider<AppelModel> {
  constructor(private Http: HttpClient) {
    super('appel', Http);
  }
}
