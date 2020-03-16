import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Http, RequestOptionsArgs, RequestOptions } from '@angular/http';
/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider<T> {

  BaseUrl = 'http://localhost/api2018/web/index_dev.php/api/';



  BuildUrl(apiName: string, apiVersion: string = 'v1') {
    return this.BaseUrl + apiVersion + '/' + apiName;
  }

  constructor(public ApiName: string, public http: HttpClient) {
  }

  getAll(): Observable<Array<T>> {

    let ApiUri = this.BuildUrl(this.ApiName);

    return this.http.get(ApiUri)
      .map(data => data['msg']);
  }

  add(model: T): Observable<any> {
    let ApiUri = this.BuildUrl(this.ApiName + '/');
    return this.http
      .post(ApiUri, model, { headers: { 'Content-Type': 'application/json' } })
      .map(data => data['msg']);
  }

  update(id: number, model: T): Observable<any> {
    let ApiUri = this.BuildUrl(this.ApiName + '/' + id + '/m');
    return this.http.post(ApiUri, model).map(data => data['msg']);
  }

  delete(id: number): Observable<any> {
    let ApiUri = this.BuildUrl(this.ApiName + '/' + id + '/delet');
    return this.http.post(ApiUri, id).map(data => data['msg']);
  }

  getById(id: number): Observable<T> {
    let currentApiName = this.ApiName + '/' + id;
    let ApiUri = this.BuildUrl(currentApiName);
    return this.http.get(ApiUri).map(data => <T>data['msg']);
  }
}
