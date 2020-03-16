import { Component, ViewChild, OnInit } from "@angular/core";
import { Platform, Nav } from "ionic-angular";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Keyboard } from '@ionic-native/keyboard';

import { HomePage } from "../pages/home/home";
import { LoginPage } from "../pages/login/login";
import { ProfilePage } from "../pages/profile/profile";
import { HistoriquePage } from "../pages/historique/historique";
import { FavorisPage } from "../pages/favoris/favoris";
import { SoldePage } from "../pages/solde/solde";

import { ContactPage } from "../pages/contact/contact";
import { NotificationsPage } from "../pages/notifications/notifications";
import { MyParcUserProvider } from "../providers/my-parc-user/my-parc-user";
import { ReservationPage } from "../pages/reservation/reservation";
import { DetailReserPage } from "../pages/detail-reser/detail-reser";

export interface MenuItem {
    title: string;
    component: any;
    icon: string;
}

@Component({
  templateUrl: 'app.html'
})

export class MyApp implements OnInit {
  //added 
  userName : string;
  ngOnInit(): void {
    if (!this.userService.IsLoggedIn()) {
      this.nav.popTo['HomePage'];
    }
    this.userName = this.userService.Username;
  }
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  appMenuItems: Array<MenuItem>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public keyboard: Keyboard,
    public userService: MyParcUserProvider
  ) {

//added
 /*    if (!this.userService.IsLoggedIn()) {
      this.nav.setRoot['HomePage'];
    }
    this.userName = this.userService.Username;
 */
 ///

    this.initializeApp();

    this.appMenuItems = [
      {title: 'Home', component: HomePage, icon: 'home'},
      {title: 'Favorites', component:FavorisPage , icon: 'star'},
      {title: 'My History', component: HistoriquePage, icon: 'rewind'},
      {title: 'My balance ', component: SoldePage, icon: 'cash'},
     // {title: 'Notification', component:NotificationsPage, icon: 'notifications'},
      {title: 'My contact list', component: ContactPage, icon: 'logo-whatsapp'},
     // {title: 'reservation', component: ReservationPage, icon: 'logo-whatsapp'},


    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.

      //*** Control Splash Screen
      // this.splashScreen.show();
      // this.splashScreen.hide();

      //*** Control Status Bar
      this.statusBar.styleDefault();
      this.statusBar.overlaysWebView(false);

      //*** Control Keyboard
      this.keyboard.disableScroll(true);
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  logout() {
    this.nav.setRoot(LoginPage);
  }
  
  MyProfile(){
    this.nav.setRoot(ProfilePage);
  }
  

  /* ///// username 
  isLoggedIn() {
    if (this.userService)
      return this.userService.IsLoggedIn();
    return false;
  }

  getUsername() {
    if (this.userService)
      return this.userService.Username;
    return false;
  } */
}
