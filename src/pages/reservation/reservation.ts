import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, PopoverController } from 'ionic-angular';
import { CalendarComponentOptions } from 'ion2-calendar';
import { NotificationsPage } from '../notifications/notifications';
import { DetailReserPage } from '../detail-reser/detail-reser';
import { ReservationProvider } from '../../providers/Reservation/reservation';
import { ThrowStmt } from '@angular/compiler';


/**
 * Generated class for the ReservationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reservation',
  templateUrl: 'reservation.html',
})
export class ReservationPage {


  constructor(private alertCtrl: AlertController,
    public navCtrl: NavController, public popoverCtrl: PopoverController, private ReservationService: ReservationProvider) {
  }

  presentNotifications(myEvent) {
    console.log(myEvent);
    let popover = this.popoverCtrl.create(NotificationsPage);
    popover.present({
      ev: myEvent
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReservationPage');
  }

  dateMulti: Date[] = [];
  type: 'string'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'
  optionsMulti: CalendarComponentOptions = {
    pickMode: 'multi'
  };


  public sortByDueDate(): void {
    this.dateMulti.sort((a: any, b: any) => {
      return a - b;
    });

    if (this.dateMulti.length > 0) {
      this.DateDeb = this.dateMulti[0];
      this.DateFin = this.dateMulti[this.dateMulti.length - 1];
    }
  }


  onChange($event) {
    console.log($event);

    this.dateMulti = $event.map(element => new Date(element._i))
    console.log(this.dateMulti);
  }

  DateDeb: Date;
  DateFin: Date;
  SelectDate() {

    // this.ReservationService.Reservation.DateDeb = this.dateMulti; // Mettre l'adresse 
    this.sortByDueDate();

    if (!this.DateDeb)
      return;

    this.ReservationService.Reservation.DateDeb = `${this.DateDeb.getFullYear()}-${this.DateDeb.getMonth()}-${this.DateDeb.getDate()}`;
    this.ReservationService.Reservation.DateFin = `${this.DateFin.getFullYear()}-${this.DateFin.getMonth()}-${this.DateFin.getDate()}`;
    
    this.navCtrl.setRoot(DetailReserPage);
  }
}
