import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.page.html',
  styleUrls: ['app.page.scss'],
})
export class AppPage implements OnInit {
  constructor(
    private statusBar: StatusBar,
    private screenOrientation: ScreenOrientation,
    private splashScreen: SplashScreen
  ) { }

  ngOnInit() {
    this.statusBar.backgroundColorByHexString('#2A2A2A');
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    this.splashScreen.hide();
  }
}
