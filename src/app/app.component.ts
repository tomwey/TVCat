import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UserService } from '../services/user-service';
import { Events } from 'ionic-angular/util/events';
import { TabsPage } from '../pages/tabs/tabs'; 

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, 
    splashScreen: SplashScreen,
    private users: UserService,
    private events: Events,
  ) {

    // this.events.subscribe('user:logout', () => {
    //   this.rootPage = LoginPage;
    // });
    
    // this.users.currentUser().then(user => {
      // if (!user) {
      //   this.rootPage = LoginPage;
      // } else {
      //   this.rootPage = HomePage;
      // }

      platform.ready().then(() => {
        // Okay, so the platform is ready and our plugins are available.
        // Here you can do any higher level native things you might need.
        statusBar.styleLightContent();

        statusBar.show();
        
        splashScreen.hide();
      });


    // });
    
  }
}

