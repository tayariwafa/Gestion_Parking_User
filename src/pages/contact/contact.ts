 import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import {Http ,  HttpModule, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { NotificationsPage } from '../notifications/notifications';
import { AppelModel } from '../../models/AppelModel';
import { ContactProvider } from '../../providers/contact/contact';

import { CallNumber } from '@ionic-native/call-number';

/*
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage  implements OnInit{

  ngOnInit(): void {
   this.isBusy = true;
  }

  contacts: Array<AppelModel> = new Array<AppelModel>();
  isBusy : boolean;


  constructor(public navCtrl: NavController, public navParams: NavParams , public http : HttpClient , public popoverCtrl: PopoverController , 
     public contactProvider: ContactProvider ,private callNumber: CallNumber) {
   
      this.loadAllAppels();

  }
  //appel telephone
/*   callJoint(telephoneNumber) {
    this.callNumber.callNumber(`197`, true);
} */
//getAll list of Contact
loadAllAppels() {
  this.contactProvider.getAll()
    .subscribe(arrayResult => {
      this.contacts = arrayResult;
      this.isBusy = false;
    });
}


  
  presentNotifications(myEvent) {
    console.log(myEvent);
    let popover = this.popoverCtrl.create(NotificationsPage);
    popover.present({
      ev: myEvent
    });
  }

}
