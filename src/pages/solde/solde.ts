import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, Toast, ToastController } from 'ionic-angular';
import { NotificationsPage } from '../notifications/notifications';
import { UserModel } from '../../models/UserModel';
import { VoitureProvider } from '../../providers/voiture/voiture';
import { MyParcUserProvider } from '../../providers/my-parc-user/my-parc-user';
import { VoitureModel } from '../../models/VoitureModel';
import { HomePage } from '../home/home';

/**
 * Generated class for the SoldePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-solde',
  templateUrl: 'solde.html',
})
export class SoldePage implements OnInit {

  ngOnInit(): void {
    this.initData();
  }
  profile: UserModel = new UserModel();
  Voiture: VoitureModel = new VoitureModel();

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public popoverCtrl: PopoverController, public UserService: MyParcUserProvider,
    private toastCtrl: ToastController, public VoitureService: VoitureProvider) {

  }
  initData() {
    let getCurrentProfile = this.UserService.GetCurrentProfile();
    getCurrentProfile.subscribe(
      data => {
        this.profile = data;
      }
    );
    let voitureId = this.UserService.VoitureId;
    let getCurrentVoiture = this.VoitureService.getById(voitureId);
    
      console.log(this.Voiture);
    ;
  }

  presentToast(messageToShow: string) {
    let toast = this.toastCtrl.create({
      message: messageToShow,
      duration: 3000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  cancel() {
    this.navCtrl.setRoot(HomePage);
  }

  Consommer(){
    this.presentToast("Bien consommer votre solde Foufaa ");   

    this.navCtrl.setRoot(HomePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SoldePage');
  }
  presentNotifications(myEvent) {
    console.log(myEvent);
    let popover = this.popoverCtrl.create(NotificationsPage);
    popover.present({
      ev: myEvent
    });
  }

}
