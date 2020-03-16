import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FavorisModel } from '../../models/FavorisModel';
import { DataProvider } from '../data/data';

/*
  Generated class for the FavorisProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FavorisProvider extends DataProvider<FavorisModel> {
  constructor(private Http: HttpClient) {
    super('parkings', Http);
  }
}
