import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(
    private statusBar: StatusBar,
    private router: Router
  ) { }

  ngOnInit() {
    // this.statusBar.backgroundColorByHexString('#58B187');
  }

  rotaAjustePlacar(): void {
    this.router.navigate(['/placar']);
  }

  rotaAjusteSelecionar(): void {
    this.router.navigate(['/ajuste-selecionar']);
  }
}
