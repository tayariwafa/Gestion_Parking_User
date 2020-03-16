import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, ToastController } from 'ionic-angular';
import { NotificationsPage } from '../notifications/notifications';
import { UserModel } from '../../models/UserModel';
import { MyParcUserProvider } from '../../providers/my-parc-user/my-parc-user';

/**
 * Generated class for the PasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-password',
  templateUrl: 'password.html',
})
export class PasswordPage implements OnInit {

  ngOnInit(): void {
    this.initData();
  }

  profile: UserModel = new UserModel();
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public popoverCtrl: PopoverController, public UserService: MyParcUserProvider,
    private toastCtrl: ToastController) {
  }
  
initData(){

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
  ionViewDidLoad() {
    console.log('ionViewDidLoad PasswordPage');
  }
  presentNotifications(myEvent) {
    console.log(myEvent);
    let popover = this.popoverCtrl.create(NotificationsPage);
    popover.present({
      ev: myEvent
    });
  }


}
