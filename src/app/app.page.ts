import { Component } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.page.html',
  styleUrls: ['app.page.scss'],
})
export class AppPage {
  constructor(private statusBar: StatusBar) { }

  ngOnInit() {
    this.statusBar.backgroundColorByHexString('#2A2A2A');
  }
}