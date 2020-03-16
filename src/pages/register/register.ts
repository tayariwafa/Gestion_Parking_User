import { Component } from "@angular/core";
import { NavController, NavParams, ToastController } from "ionic-angular";
import { LoginPage } from "../login/login";
import { HomePage } from "../home/home";
import { RegisterVM } from "../../ViewModels/RegisterVM";
import { MyParcUserProvider } from "../../providers/my-parc-user/my-parc-user";
// https://forum.ionicframework.com/t/a-good-form-validation-example/117960

@Component({
  selector:
    'page-register'
  ,
  templateUrl: 'register.html'
})
export class RegisterPage {



  // Matricule=this.Matricule1+' '+this.Matricule2+' '+this.Matricule3 ;

  account: RegisterVM = new RegisterVM();
  errors : string[] = [];
  constructor(public nav: NavController
    , public navParams: NavParams,
    public userService: MyParcUserProvider, public toastCtrl: ToastController) {
  }
  presentToast1() {
    const toast = this.toastCtrl.create({
      message: 'vérifier votre nom',
      duration: 3000, 
      position: 'top' 
    });
    toast.present();
  }
  presentToast2() {
    const toast = this.toastCtrl.create({
      message: 'vérifier votre prenom ',
      duration: 3000,
      position: 'top' 
    });
    toast.present();
  }
  presentToast3() {
    const toast = this.toastCtrl.create({
      message: 'vérifier votre Matricule plus spésifiquement le numéro de 4 chiffre  ',
      duration: 3000,
      position: 'top' 
    });
    toast.present();
  }
  presentToast4() {
    const toast = this.toastCtrl.create({
      message: 'vérifier votre serial number  le nombre doit être composer obligatoirement de 3 chiffre   ',
      duration: 3000,
      position: 'top' 
    });
    toast.present();
  }
  presentToast5() {
    const toast = this.toastCtrl.create({
      message: 'vérifier votre formulaire  ',
      duration: 3000,
      position: 'top' 
    });
    toast.present();
  }
  presentToastmail() {
    const toast = this.toastCtrl.create({
      message: 'vérifier votre email il doit être sous la forme exemple@gmail.com  ',
      duration: 3000,
      position: 'top' 
    });
    toast.present();
  }
  presentToastusername() {
    const toast = this.toastCtrl.create({
      message: 'vérifier votre Nom Utilisateur  ',
      duration: 3000,
      position: 'top' 
    });
    toast.present();
  }
  presentToastpassword() {
    const toast = this.toastCtrl.create({
      message: 'vérifier votre Mot de passe il doit étre mixte   ',
      duration: 3000,
      position: 'top' 
    });
    toast.present();
  }
  presentToast6(){
    const toast = this.toastCtrl.create({
      message: 'utilisateur bien ajouter  ',
      duration: 3000 , 
      position: 'top' 
    });
    toast.present();
  }
  // register and go to home page
  register() {
    this.errors = [];
    console.log("start test regular expression ------register ------");
    const patternName = new RegExp(/[~`!@#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/).test(this.account.Nom_ut);
    const patternlastName = new RegExp(/[~`!@#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/).test(this.account.Prenom_ut);
    const patternmail = new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/) .test(this.account.Email_ut);
    const patternphone =new RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/).test(this.account.tel_ut);
     const patternFourChiffre = new RegExp(/d{4}$/).test(this.account.Matricule2);
     const patternthreeChiffre = new RegExp(/d{3}$/).test(this.account.Matricule3);
     const patternusername = new RegExp(/[~`!@#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/).test(this.account.NomUtilisateur_ut);
     //const patternPassword = new RegExp(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8})$/).test(this.account.mdp_ut);
  
 console.log("------------ step 1 ---------------");
    if (this.account.Nom_ut.length < 3 || patternName) {
      console.log("error in firstname");
      this.errors.push("vérifier votre nom ");
      this.presentToast1();
    
    }
    console.log("------------ step 2 ---------------");
    console.log("prenom",this.account.Prenom_ut);
    if (this.account.Prenom_ut.length < 3 || patternlastName) {
      console.log("error in lastname");
      this.errors.push("vérifier votre prenom ");
      this.presentToast2();
    }
   console.log("------------ step 3-1 ---------------");

   if (this.account.tel_ut.length < 8 || patternphone){
      console.log("error in phone number");
      this.errors.push("vérifier votre numéro telephonique  ");
    }  
    console.log("------------ step 3 ---------------");
     if (this.account.Matricule2.length < 4 || patternFourChiffre){
      console.log("error in registration number");
      this.errors.push("vérifier votre   registration number ");
      this.presentToast3();
    }
    console.log("------------ step 4 ---------------");
  if (this.account.Matricule3.length < 3 || patternthreeChiffre){
      console.log("error in serialnumber");
      this.errors.push("vérifier votre  serialnumber ");
      this.presentToast4();
    } 
    console.log("------------ step  5 ---------------");
    if (this.account.Email_ut.length < 4 || patternmail){
        console.log("error in email");
        this.errors.push("vérifier votre  email ");
        this.presentToastmail();
      } 
      console.log("------------ step  6 ---------------");
      if (this.account.NomUtilisateur_ut.length < 4 || patternusername){
          console.log("error in userame");
          this.errors.push("vérifier votre  Nom Utilisateur ");
          this.presentToastusername();
        } 
       /*  console.log("------------ step  7 ---------------");
        if (this.account.mdp_ut.length < 4 || patternPassword){
            console.log("error in password");
            this.errors.push("vérifier votre  mot de passe  il doit etre mixte c a d contient lettre majus/minus/numero ");
            this.presentToastpassword();
          }  */
    if (this.errors.length > 0) {
    this.presentToast5();
    }else{
      console.log("okk register");
      this.presentToast6();
      this.account.Matricule = this.account.Matricule1 + ' ' + this.account.Matricule2 + ' ' + this.account.Matricule3;
      let addUser = this.userService.add(this.account);
      addUser.subscribe(() => { this.nav.setRoot(LoginPage); });
     // this.nav.setRoot(HomePage);
    }


    /*     this.account.Matricule = this.account.Matricule1+' '+ this.account.Matricule2+' '+ this.account.Matricule3;
        let addUser = this.userService.add(this.account);
        addUser.subscribe(()=> {this.nav.setRoot(LoginPage); });
      this.nav.setRoot(HomePage); */
  }

  // go to login page
  login() {
    this.nav.setRoot(LoginPage);
  }
}
