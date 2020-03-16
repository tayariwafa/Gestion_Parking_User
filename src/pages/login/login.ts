import { Component } from "@angular/core";
import { NavController, AlertController, ToastController, MenuController } from "ionic-angular";
import { HomePage } from "../home/home";
import { RegisterPage } from "../register/register";
import { LoginVM } from "../../ViewModels/LoginVM";
import { MyParcUserProvider } from "../../providers/my-parc-user/my-parc-user";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  credentials: LoginVM = new LoginVM();
  errors = [];
  constructor(public nav: NavController, public forgotCtrl: AlertController, public menu: MenuController
    , public toastCtrl: ToastController, private userService: MyParcUserProvider) {
    this.menu.swipeEnable(false);
  }
  presentToast1(messageToShow: string) {
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
  // go to register page
  register() {
    this.nav.setRoot(RegisterPage);
  }

  // login and go to home page
  login() {
    this.errors =[];
    console.log("start test regular expression");
    const pattern = new RegExp(/[~`!@#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/).test(this.credentials.username);
    const patternPassword = new RegExp(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8})$/).test(this.credentials.password);
    if(this.credentials.username.length < 4 || pattern ) {
      console.log("error ");
      this.errors.push("merci de verifier votre username");
      this.presentToast1("merci de verifier votre username");
    }
    if(this.credentials.password.length <5 || patternPassword){
      this.errors.push(" merci de verifier votre mot de passe");
      this.presentToast1("merci de verifier votre Mot de passe");

    }
    if(this.errors.length === 0){
      this.presentToast1("Bienvenue chez My Park ");

      console.log("all is oky");
      let loginCall = this.userService.Login(this.credentials);
      loginCall.subscribe(success => {
        if (success) {
          console.log(" response", success);
          this.nav.setRoot(HomePage);
        }
      }, err => {
        console.log(err);
      });
    }
    
  }

  forgotPass() {
    let forgot = this.forgotCtrl.create({
      title: 'Forgot Password?',
      message: "Enter you email address to send a reset link password.",
      inputs: [
        {
          name: 'email',
          placeholder: 'Email',
          type: 'email'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Send',
          handler: data => {
            console.log('Send clicked');
            let toast = this.toastCtrl.create({
              message: 'Email was sended successfully',
              duration: 3000,
              position: 'top',
              cssClass: 'dark-trans',
              closeButtonText: 'OK',
              showCloseButton: true
            });
            toast.present();
          }
        }
      ]
    });
    forgot.present();
  }

}
