import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, PopoverController } from 'ionic-angular';
import { PaiementPage } from '../paiement/paiement';
import { NotificationsPage } from '../notifications/notifications';
import { ReservationModel } from '../../models/ReservationModel';
import { ReservationProvider } from '../../providers/Reservation/reservation';

/**
 * Generated class for the DetailReserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-detail-reser',
  templateUrl: 'detail-reser.html',
})
export class DetailReserPage implements OnInit {

  ngOnInit(): void {
    this.initData() 
  }
  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams,
    public popoverCtrl: PopoverController, private reservationService: ReservationProvider) { }

  Reservation: ReservationModel = new ReservationModel();

  DateDeb: string;
  DateFin: string;
  HeureDeb:string;
  HeureFin: string;

  CurrentPosition;
  Destination;

  initData() {
    this.Reservation = this.reservationService.Reservation;
    this.DateDeb =  this.Reservation.DateDeb;
    this.DateFin = this.Reservation.DateFin;

    this.CurrentPosition = this.reservationService.currentPostion;
    this.Destination = this.reservationService.parking.Nom_p + ", " + this.reservationService.parking.Ville_p ;
  }

  paiement() {
    this.Reservation.HeurDeb = this.HeureDeb;
    this.Reservation.HeurFin = this.HeureFin;

    this.reservationService.Reservation = this.Reservation;
    this.navCtrl.setRoot(PaiementPage);
  }

  presentNotifications(myEvent) {
    console.log(myEvent);
    let popover = this.popoverCtrl.create(NotificationsPage);
    popover.present({
      ev: myEvent
    });
  }

}

