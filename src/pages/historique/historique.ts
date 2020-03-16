import { Component, OnInit } from "@angular/core";
import { NavController, PopoverController } from "ionic-angular";
import { Storage } from '@ionic/storage';
import { TripsPage } from '../trips/trips';
import { SearchLocationPage } from '../search-location/search-location';
import { NotificationsPage } from '../notifications/notifications';
import { ReservationModel } from "../../models/ReservationModel";
import { ReservationProvider } from "../../providers/Reservation/reservation";

/**
 * Generated class for the HistoriquePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-historique',
  templateUrl: 'historique.html',
})
export class HistoriquePage implements OnInit{

  ngOnInit(): void {
    this.initData();
  }
  reservations: Array<ReservationModel> = new Array<ReservationModel>();

  constructor(private storage: Storage, public nav: NavController, public popoverCtrl: PopoverController,
    private reservationService: ReservationProvider
  ) {
  }


  initData() {
    let getReservations = this.reservationService.getAll();
    getReservations.subscribe(data => {
      this.reservations = data;
    });
  }

  presentNotifications(myEvent) {
    console.log(myEvent);
    let popover = this.popoverCtrl.create(NotificationsPage);
    popover.present({
      ev: myEvent
    });
  }

  delete(id : number){
    let deleteReservation = this.reservationService.delete(id);
    deleteReservation.subscribe(
      data => {
        this.initData();
      }
    );
  }

}