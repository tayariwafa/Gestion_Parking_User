import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import {Http ,  HttpModule, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { NotificationsPage } from '../notifications/notifications';
import { FavorisModel } from '../../models/FavorisModel';
import { FavorisProvider } from '../../providers/favoris/favoris';
import { HomePage } from '../home/home';

/**
 * Generated class for the FavorisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favoris',
  templateUrl: 'favoris.html',
})
export class FavorisPage implements OnInit{

  ngOnInit(): void {
   this.isBusy = true;
  }
  isBusy : boolean;
  Favoris: Array<FavorisModel> = new Array<FavorisModel>();

  constructor(public navCtrl: NavController, public navParams: NavParams , public http : HttpClient , public popoverCtrl: PopoverController , 
    public FavorisProvider: FavorisProvider ) {
  
     this.loadAllFavoris();

 }
 loadAllFavoris() {
  this.FavorisProvider.getAll()
    .subscribe(arrayResult => {
      this.Favoris = arrayResult;
      this.isBusy = false;
    });
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavorisPage');
  }
  presentNotifications(myEvent) {
    console.log(myEvent);
    let popover = this.popoverCtrl.create(NotificationsPage);
    popover.present({
      ev: myEvent
    });
  }
  favoris(){
    this.navCtrl.setRoot(HomePage);
  }

}
