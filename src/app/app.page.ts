import { Component } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.page.html',
  styleUrls: ['app.page.scss'],
})
export class AppPage {
  constructor(
    private statusBar: StatusBar,
    private screenOrientation: ScreenOrientation,
    private router: Router,
    private platform: Platform,
    private splashScreen: SplashScreen
  ) {
    this.iniciarApp();
  }

  iniciarApp() {
    this.platform.ready().then(() => {
      setTimeout(() => {
        this.splashScreen.hide();
        this.router.navigate(['/inicio']);
      }, 1000);
    });

    this.statusBar.backgroundColorByHexString('#2A2A2A');
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  }
}
