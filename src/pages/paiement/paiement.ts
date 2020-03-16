import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, ToastController, PopoverController, IonicPage } from "ionic-angular";
import { TripService } from "../../services/trip-service";
import { NotificationsPage } from '../notifications/notifications';
import { HomePage } from '../home/home';
import { ReservationProvider } from '../../providers/Reservation/reservation';
import { ReservationModel } from '../../models/ReservationModel';
import { MyParcUserProvider } from '../../providers/my-parc-user/my-parc-user';

/**
 * Generated class for the PaiementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-paiement',
  templateUrl: 'paiement.html',
})
export class PaiementPage implements OnInit {

  ngOnInit(): void {
    this.initData();
  }
  // trip data
  
  public trip: any;
  public user ={
    "firstName":"",
    "lastName":"",
    "matricule":"",
    "montant_a_payer":""
  };
  // date
  public date = new Date();

  public paymethods = 'creditcard';

  constructor(public nav: NavController, public tripService: TripService,
    public loadingCtrl: LoadingController, public toastCtrl: ToastController,
    public popoverCtrl: PopoverController,
    private ReservationService: ReservationProvider,
    private userService: MyParcUserProvider) {
    // set sample data
    this.trip = tripService.getItem(1);
    this.getUserData();
  }

  Reservation: ReservationModel;
  code: string;

  getUserData(){
    this.userService.GetCurrentProfile().subscribe(response=>{
      console.log("---------user data----------", response);
      this.user.firstName =response.Prenom_ut;
      console.log("firstName : ",this.user.firstName);
      this.user.lastName = response.Nom_ut;
     
      this.user.montant_a_payer = response.Solde_ut;
    },error=>{

    });
  }

  initData() {
    this.Reservation = this.ReservationService.Reservation;
    this.Reservation.Id_ut = this.userService.UserId;
    this.Reservation.Id_voiture = this.userService.VoitureId;
    this.Reservation.Surplus = "0";
    
    let montant = (new Date(this.Reservation.DateDeb).getDay() - new Date(this.Reservation.DateFin).getDay()) + 1;

    this.Reservation.Montant_carte = 10 + "";
    this.Reservation.Montant_espece = 20 + "";
    this.Reservation.MontantPay = 15 + "";
  }
  // process send button
  send() {
    // send booking info
    let loader = this.loadingCtrl.create({
      content: "Please wait..."
    });

    this.Reservation.ModePaiement = this.paymethods;
    this.Reservation.Montant_carte = this.code;
    this.ReservationService.Reservation = this.Reservation;

    let sendReservation = this.ReservationService.add(this.Reservation);

    sendReservation.subscribe(
      data => {
        // show message
        let toast = this.toastCtrl.create({
          showCloseButton: true,
          cssClass: 'profile-bg',
          message: ' Success!',
          duration: 3000,
          position: 'bottom'
        });

        loader.present();

        setTimeout(() => {
          loader.dismiss();
          toast.present();
          // back to home page
          this.nav.setRoot(HomePage);
        }, 3000)
      }
    );

  }

  presentNotifications(myEvent) {
    console.log(myEvent);
    let popover = this.popoverCtrl.create(NotificationsPage);
    popover.present({
      ev: myEvent
    });
  }
}

