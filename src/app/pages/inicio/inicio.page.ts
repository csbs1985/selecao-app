import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit, OnDestroy {

  constructor(
    private statusBar: StatusBar,
    private router: Router
  ) { }

  ngOnInit() {
    this.statusBar.backgroundColorByHexString('#58B187');
  }

  ngOnDestroy() {
    this.statusBar.backgroundColorByHexString('#2A2A2A');
  }

  rotaAjustePlacar(): void {
    this.router.navigate(['/placar']);
  }

  rotaAjusteSelecionar(): void {
    this.router.navigate(['/ajuste-selecionar']);
  }
}
