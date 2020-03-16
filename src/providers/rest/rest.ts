import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Http ,  HttpModule, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
  apiUrl : string = "http://localhost/api2018/web/index_dev.php/api/v1/appel/";
  constructor(public http: HttpClient) {
   console.log('hello api Appel ');
  }

  getappel() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl).subscribe(   data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  addappel(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/', JSON.stringify(data))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
 
  

}
