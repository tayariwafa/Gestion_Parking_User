import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, Toast, ToastController } from 'ionic-angular';
import { PasswordPage } from '../password/password';
import { NotificationsPage } from '../notifications/notifications';
import { ProfileVM } from '../../ViewModels/ProfileVM';
import { ProfileModel } from '../../models/ProfileModel';
import { MyParcUserProvider } from '../../providers/my-parc-user/my-parc-user';
import { UserModel } from '../../models/UserModel';
import { VoitureProvider } from '../../providers/voiture/voiture';
import { VoitureModel } from '../../models/VoitureModel';
import { HomePage } from '../home/home';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage implements OnInit {

  ngOnInit(): void {
    this.initData();
  }

  profile: UserModel = new UserModel();
  Voiture: VoitureModel = new VoitureModel();

  Matricule1: string;
  Matricule2: string;
  Matricule3: string;

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
    getCurrentVoiture.subscribe(data => {
      this.Voiture = data;
      let matricules = data.Matricule.split(" ");
      console.log(matricules);
      if (matricules.length == 3) {
        this.Matricule1 = matricules[0];
        this.Matricule2 = matricules[1];
        this.Matricule3 = matricules[2];
      }
      else {
        this.Matricule3 = this.Voiture.Matricule;
      }

      console.log(this.Voiture);
    });
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

  save() {
    let updateProfile = this.UserService.update(this.profile.id, this.profile);
    updateProfile.subscribe(
      data => {
        this.presentToast("Profile mis à jour avec succès!");
      }
    );

    this.Voiture.Matricule = this.Matricule2 +' '+ this.Matricule1 +' '+ this.Matricule3;
    let updateVoiture = this.VoitureService.update(this.Voiture.id, this.Voiture);
    updateProfile.subscribe(
      data => {
        this.presentToast("Voiture mis à jour avec succès!");   
      }
    );
  }

  cancel() {
    this.navCtrl.setRoot(HomePage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  Password() {
    this.navCtrl.setRoot(PasswordPage);
  }

  presentNotifications(myEvent) {
    console.log(myEvent);
    let popover = this.popoverCtrl.create(NotificationsPage);
    popover.present({
      ev: myEvent
    });
  }

}
