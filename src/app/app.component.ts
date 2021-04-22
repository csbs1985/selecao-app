import { Component } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private statusBar: StatusBar) { }

  ngOnInit() {
    // deixe a barra de status se sobrepor ao webview
    this.statusBar.overlaysWebView(true);
    this.statusBar.backgroundColorByHexString('#2A2A2A');
    this.statusBar.styleLightContent();
  }
}