import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataProvider } from '../data/data';
import { UserModel } from '../../models/UserModel';
import { NavController } from 'ionic-angular';
import { LoginVM } from '../../ViewModels/LoginVM';
import { RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

/*
  Generated class for the MyParcUserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MyParcUserProvider extends DataProvider<UserModel> {
//   Token: string = null;

  public Token: string = null; 
  public UserId : number;
  public VoitureId : number;
  public Username: string;

  constructor(private Http: HttpClient) {
    super('user', Http);
  }

  Login(model: LoginVM): Observable<boolean> {
    let ApiUri = this.BuildUrl('user/login');
    let headers = { 'Content-Type': 'application/x-www-form-urlencoded' };

    return this.http.post(ApiUri, model, { headers: headers })
    // .map( data => data['msg']); 
      .map(data => {
        if (data['success']) {
          this.Token = data["token"];
          this.UserId = <number>data["id"];

          this.VoitureId = data["voiture"]; 

          this.Username = model.username;
          return true;
        }
        return false;
      }

      );

  }

  IsLoggedIn() {
    return this.Token != null;
  }

  Logout() {
    this.Token = null;
  }

  GetCurrentProfile(): Observable<UserModel>{
    return this.getById(this.UserId);
  }
}

