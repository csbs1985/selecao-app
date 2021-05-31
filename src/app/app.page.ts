import { Component } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { SplashScreen } from '@capacitor/splash-screen';

@Component({
  selector: 'app-root',
  templateUrl: 'app.page.html',
  styleUrls: ['app.page.scss'],
})

export class AppPage {
  constructor(
    private statusBar: StatusBar,
    private screenOrientation: ScreenOrientation
  ) {
    this.iniciarApp();
  }

  iniciarApp() {
    SplashScreen.show({
      showDuration: 20000,
      autoHide: true
    });
    this.statusBar.backgroundColorByHexString('#2A2A2A');
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  }
}
