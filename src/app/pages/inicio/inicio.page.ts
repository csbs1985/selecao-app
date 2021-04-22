import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private statusBar: StatusBar) { }

  ngOnInit() {
    this.statusBar.backgroundColorByHexString('#58B187');
  }
}
